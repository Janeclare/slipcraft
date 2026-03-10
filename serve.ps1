param(
  [int]$Port = 8080,
  [switch]$AutoPort
)

$ErrorActionPreference = 'Stop'

$root = (Get-Location).Path

# Supabase config
# NOTE: Anon key is safe to use in a browser context. Do NOT put your service_role key in this file.
$SupabaseUrl = "https://hgxtrafpxmugfxplvesv.supabase.co"
$SupabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhneHRyYWZweG11Z2Z4cGx2ZXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNjgxNzYsImV4cCI6MjA4ODY0NDE3Nn0.c3K1zuW7YOIXd_Q7iFAnOvSMqjjcfuaDC-lHbAq4Yp8"

function Get-AccessToken([System.Net.HttpListenerRequest]$req) {
  # prefer Authorization header
  $auth = $req.Headers['Authorization']
  if ($auth -and $auth.StartsWith('Bearer ')) { return $auth.Substring(7) }
  # fallback to cookie set by our /login handler
  $cookie = $req.Cookies['sb-access-token']
  if ($cookie) { return $cookie.Value }
  return $null
}

function Write-JsonResponse([System.Net.HttpListenerResponse]$res, [int]$status, [object]$obj) {
  $json = if ($obj -is [string]) { $obj } else { ($obj | ConvertTo-Json -Compress -Depth 20) }
  $bytes = [System.Text.Encoding]::UTF8.GetBytes($json)
  $res.StatusCode = $status
  $res.ContentType = 'application/json; charset=utf-8'
  $res.ContentLength64 = $bytes.Length
  $res.OutputStream.Write($bytes,0,$bytes.Length)
}

function Supabase-Rest([string]$method, [string]$path, [object]$body, [string]$accessToken) {
  # path example: vendors?select=*
  return Supabase-Invoke -method $method -url ("$SupabaseUrl/rest/v1/$path") -body $body -accessToken $accessToken
}


function Fix-InertiaJson([string]$json) {
  # Make JSON safe for JSON.parse by removing control chars and fixing bad escapes like: \ "
  # (This does NOT change UI; it only fixes corrupted JSON strings in the build.)
  $sb = New-Object System.Text.StringBuilder
  $inString = $false
  $escaped = $false

  for ($i=0; $i -lt $json.Length; $i++) {
    $ch = $json[$i]

    if ($inString) {
      if ($escaped) {
        [void]$sb.Append($ch)
        $escaped = $false
        continue
      }

      if ($ch -eq '\\') {
        # Fix corrupted escape with whitespace before quote
        if ($i -le $json.Length - 3 -and $json[$i+1] -match '\s' -and $json[$i+2] -eq '"') {
          [void]$sb.Append('\"')
          $i += 2
          continue
        }

        # Keep valid escapes, otherwise escape the backslash itself
        if ($i -lt $json.Length - 1) {
          $next = $json[$i+1]
          if ($next -match '^["\\/bfnrtu]$') {
            [void]$sb.Append($ch)
            $escaped = $true
          } else {
            [void]$sb.Append('\\\\')
          }
        } else {
          [void]$sb.Append('\\\\')
        }
        continue
      }

      if ($ch -eq '"') {
        $inString = $false
        [void]$sb.Append($ch)
        continue
      }

      $code = [int][char]$ch
      if ($ch -eq "`r") {
        if ($i -lt $json.Length - 1 -and $json[$i+1] -eq "`n") { $i++ }
        [void]$sb.Append('\\n')
        continue
      }
      if ($ch -eq "`n") {
        [void]$sb.Append('\\n')
        continue
      }
      if ($code -lt 32) {
        [void]$sb.Append(('\\u{0:x4}' -f $code))
        continue
      }

      [void]$sb.Append($ch)
      continue
    }

    if ($ch -eq '"') {
      $inString = $true
      [void]$sb.Append($ch)
      continue
    }

    [void]$sb.Append($ch)
  }

  return $sb.ToString()
}

function Get-RequestBody([System.Net.HttpListenerRequest]$req) {
  if (-not $req.HasEntityBody) { return "" }
  $reader = New-Object System.IO.StreamReader($req.InputStream, $req.ContentEncoding)
  return $reader.ReadToEnd()
}

function Parse-FormUrlEncoded([string]$body) {
  $result = @{}
  if ([string]::IsNullOrWhiteSpace($body)) { return $result }
  foreach ($pair in $body -split '&') {
    if ([string]::IsNullOrWhiteSpace($pair)) { continue }
    $kv = $pair -split '=', 2
    $k = [System.Uri]::UnescapeDataString(($kv[0] -replace '\+', ' '))
    $v = if ($kv.Count -gt 1) { [System.Uri]::UnescapeDataString(($kv[1] -replace '\+', ' ')) } else { '' }
    $result[$k] = $v
  }
  return $result
}

function Get-CookieValue([System.Net.HttpListenerRequest]$req, [string]$name) {
  $cookie = $req.Cookies[$name]
  if ($cookie) { return $cookie.Value }
  return $null
}

function Supabase-Invoke([string]$method, [string]$url, [object]$body, [string]$accessToken) {
  $headers = @{
    apikey = $SupabaseAnonKey
  }

  if ($accessToken) {
    $headers.Authorization = "Bearer $accessToken"
  } else {
    # For auth endpoints, Supabase accepts apikey; no Authorization required.
  }

  if ($body -ne $null) {
    $headers['Content-Type'] = 'application/json'
    $payload = if ($body -is [string]) { $body } else { ($body | ConvertTo-Json -Compress -Depth 20) }
    return Invoke-RestMethod -Method $method -Uri $url -Headers $headers -Body $payload
  }

  return Invoke-RestMethod -Method $method -Uri $url -Headers $headers
}

function Supabase-AuthSignup([string]$email, [string]$password) {
  return Supabase-Invoke -method 'Post' -url ("$SupabaseUrl/auth/v1/signup") -body @{ email = $email; password = $password } -accessToken $null
}

function Supabase-AuthLogin([string]$email, [string]$password) {
  return Supabase-Invoke -method 'Post' -url ("$SupabaseUrl/auth/v1/token?grant_type=password") -body @{ email = $email; password = $password } -accessToken $null
}

function Supabase-AuthUser([string]$accessToken) {
  return Supabase-Invoke -method 'Get' -url ("$SupabaseUrl/auth/v1/user") -body $null -accessToken $accessToken
}

function Supabase-RestGet([string]$path, [string]$accessToken) {
  return Supabase-Invoke -method 'Get' -url ("$SupabaseUrl/rest/v1/$path") -body $null -accessToken $accessToken
}

function Supabase-Rpc([string]$fnName, [hashtable]$args, [string]$accessToken) {
  return Supabase-Invoke -method 'Post' -url ("$SupabaseUrl/rest/v1/rpc/$fnName") -body $args -accessToken $accessToken
}

function Start-Listener([int]$TryPort) {
  $l = New-Object System.Net.HttpListener
  # Use localhost only (more reliable without requiring URLACL reservations for 127.0.0.1)
  $l.Prefixes.Add("http://localhost:$TryPort/")
  $l.Start()
  return $l
}

$listener = $null

if ($AutoPort) {
  $portsToTry = @($Port, 8081, 8090, 9000)
  foreach ($p in $portsToTry) {
    try {
      $listener = Start-Listener -TryPort $p
      $Port = $p
      break
    } catch {
      continue
    }
  }
  if (-not $listener) {
    throw "Could not bind to any port: $($portsToTry -join ', ')"
  }
} else {
  $listener = Start-Listener -TryPort $Port
}

try {
  Write-Host "SlipCraft server running" -ForegroundColor Green
  Write-Host "Root: $root"
  Write-Host "Open: http://localhost:$Port/" -ForegroundColor Cyan
  Write-Host "Press Ctrl+C to stop." -ForegroundColor Yellow
  Write-Host "(Debug) Logging requests with key headers: X-Inertia, X-Requested-With" -ForegroundColor DarkGray

  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    # Debug log
    Write-Host ("{0} {1} X-Inertia={2} X-Req-With={3}" -f $req.HttpMethod,$req.Url.LocalPath,$req.Headers['X-Inertia'],$req.Headers['X-Requested-With']) -ForegroundColor DarkGray
    $res = $ctx.Response
    $res.AddHeader('X-Slipcraft-Backend','RovoSupabase')

    $path = $req.Url.LocalPath

    # Normalize trailing slash (e.g. /login/ -> /login)
    if ($path.Length -gt 1 -and $path.EndsWith('/')) {
      $path = $path.TrimEnd('/')
    }

    # Home
    if ($path -eq '/') { $path = '/index.html' }

    # Auth guard for protected pages
    $isInertiaReq = ($null -ne $req.Headers['X-Inertia'] -or $req.Headers['X-Requested-With'] -eq 'XMLHttpRequest')
    $accessTokenEarly = Get-AccessToken $req
    if (($req.Url.LocalPath -eq '/dashboard' -or $req.Url.LocalPath -eq '/dashboard.html' -or $req.Url.LocalPath -eq '/profile' -or $req.Url.LocalPath -eq '/profile.html' -or $req.Url.LocalPath -eq '/transactions' -or $req.Url.LocalPath -eq '/transactions.html') -and -not $accessTokenEarly) {
      if ($isInertiaReq) {
        $res.StatusCode = 409
        $res.AddHeader('X-Inertia-Location', ($req.Url.GetLeftPart([System.UriPartial]::Authority) + '/login'))
        $res.Close();
        continue
      }
      $res.StatusCode = 303
      $res.RedirectLocation = '/login.html'
      $res.Close();
      continue
    }

    # Favicon convenience
    if ($path -eq '/favicon.ico') {
      $path = '/favicon.ico'
    }

    # Backend endpoints (Supabase-backed)
    # Auth routes:
    #   POST /login, POST /register, POST /logout
    # API routes (Laravel-ish):
    #   GET  /api/vendors
    #   POST /api/vendors
    #   GET  /api/transactions
    #   POST /api/points/transfer
    #
    # NOTE: We keep the UI untouched; this is a local backend bridge.

    # --- Debug: echo headers (dev only) ---
    if ($req.Url.LocalPath -eq '/debug/headers') {
      $h = @{}
      foreach ($k in $req.Headers.AllKeys) { $h[$k] = $req.Headers[$k] }
      Write-JsonResponse -res $res -status 200 -obj @{ method = $req.HttpMethod; path = $req.Url.LocalPath; headers = $h }
      $res.Close(); continue
    }

    # --- API: GET /api/vendors ---
    if ($req.HttpMethod -eq 'GET' -and $req.Url.LocalPath -eq '/api/vendors') {
      $token = Get-AccessToken $req
      try {
        # Public + own vendors allowed by RLS
        $vendors = Supabase-Rest -method 'Get' -path 'vendors?select=*' -body $null -accessToken $token
        Write-JsonResponse -res $res -status 200 -obj @{ data = $vendors }
      } catch {
        Write-JsonResponse -res $res -status 500 -obj @{ error = $_.Exception.Message }
      }
      $res.Close(); continue
    }

    # --- API: POST /api/vendors (apply) ---
    if ($req.HttpMethod -eq 'POST' -and $req.Url.LocalPath -eq '/api/vendors') {
      $token = Get-AccessToken $req
      $bodyText = Get-RequestBody $req
      try {
        $payload = $bodyText | ConvertFrom-Json
      } catch {
        $payload = Parse-FormUrlEncoded $bodyText
      }

      try {
        $vendorObj = @{
          display_name = $payload.display_name
          application_fee_ngn = 0
          status = 'pending'
        }
        $created = Supabase-Invoke -method 'Post' -url ("$SupabaseUrl/rest/v1/vendors") -body $vendorObj -accessToken $token
        Write-JsonResponse -res $res -status 201 -obj @{ data = $created }
      } catch {
        Write-JsonResponse -res $res -status 500 -obj @{ error = $_.Exception.Message }
      }
      $res.Close(); continue
    }

    # --- API: GET /api/transactions ---
    if ($req.HttpMethod -eq 'GET' -and $req.Url.LocalPath -eq '/api/transactions') {
      $token = Get-AccessToken $req
      try {
        $tx = Supabase-Rest -method 'Get' -path 'transactions?select=*&order=created_at.desc' -body $null -accessToken $token
        Write-JsonResponse -res $res -status 200 -obj @{ data = $tx }
      } catch {
        Write-JsonResponse -res $res -status 500 -obj @{ error = $_.Exception.Message }
      }
      $res.Close(); continue
    }

    # --- API: POST /api/points/transfer ---
    if ($req.HttpMethod -eq 'POST' -and $req.Url.LocalPath -eq '/api/points/transfer') {
      $token = Get-AccessToken $req
      $bodyText = Get-RequestBody $req
      try {
        $payload = $bodyText | ConvertFrom-Json
      } catch {
        $payload = Parse-FormUrlEncoded $bodyText
      }

      try {
        $to = [Guid]$payload.to_user
        $points = [int64]$payload.points
        $reason = $payload.reason
        $null = Supabase-Rpc -fnName 'transfer_points' -args @{ to_user = $to; points = $points; reason = $reason } -accessToken $token
        Write-JsonResponse -res $res -status 200 -obj @{ ok = $true }
      } catch {
        Write-JsonResponse -res $res -status 500 -obj @{ error = $_.Exception.Message }
      }
      $res.Close(); continue
    }

    # --- Auth handlers ---
    if ($req.HttpMethod -eq 'POST') {
      if ($req.Url.LocalPath -in @('/login','/register')) {
        $body = Get-RequestBody $req

        # Try JSON first, then form-encoded
        $email = $null
        $password = $null

        if ($req.ContentType -and $req.ContentType.ToLowerInvariant().Contains('application/json')) {
          try {
            $obj = $body | ConvertFrom-Json
            $email = $obj.email
            $password = $obj.password
          } catch { }
        }

        if (-not $email -or -not $password) {
          $form = Parse-FormUrlEncoded $body
          $email = $form['email']
          $password = $form['password']
        }

        if (-not $email -or -not $password -or [string]::IsNullOrWhiteSpace($SupabaseUrl) -or [string]::IsNullOrWhiteSpace($SupabaseAnonKey)) {
          # If we can't auth for real, still allow demo flow (no redesign)
          $res.StatusCode = 303
          $res.RedirectLocation = '/dashboard'
          $res.Close()
          continue
        }

        try {
          $auth = if ($req.Url.LocalPath -eq '/login') {
            Supabase-AuthLogin -email $email -password $password
          } else {
            Supabase-AuthSignup -email $email -password $password
          }

          # Some Supabase setups return no session on signup even with confirmations off.
          # In that case, attempt immediate login.
          if (-not $auth.access_token -and $req.Url.LocalPath -eq '/register') {
            try {
              $auth = Supabase-AuthLogin -email $email -password $password
            } catch { }
          }

          if (-not $auth.access_token) {
            $isInertiaPost = ($null -ne $req.Headers['X-Inertia'] -or $req.Headers['X-Requested-With'] -eq 'XMLHttpRequest')
            $msg = 'Could not create a login session. If email confirmation is enabled, confirm your email first. Also check Supabase email rate limits.'
            if ($isInertiaPost) {
              Write-JsonResponse -res $res -status 422 -obj @{ errors = @{ email = $msg } }
              $res.Close(); continue
            }
            $res.StatusCode = 303
            $res.RedirectLocation = '/login.html?error=' + [System.Uri]::EscapeDataString($msg)
            $res.Close();
            continue
          }

          # Store tokens as cookies
          # (SameSite=Lax avoids most cross-site issues; HttpOnly prevents JS access)
          $res.Headers.Add('Set-Cookie', "sb-access-token=$($auth.access_token); Path=/; HttpOnly; SameSite=Lax")
          if ($auth.refresh_token) {
            $res.Headers.Add('Set-Cookie', "sb-refresh-token=$($auth.refresh_token); Path=/; HttpOnly; SameSite=Lax")
          }
          $res.Headers.Add('Set-Cookie', 'slipcraft_session=1; Path=/; SameSite=Lax')

          $res.StatusCode = 303
          $res.RedirectLocation = '/dashboard'
          $res.Close()
          continue
        } catch {
          # If Supabase rejects, return Inertia-style validation errors when requested.
          $isInertiaPost = ($null -ne $req.Headers['X-Inertia'] -or $req.Headers['X-Requested-With'] -eq 'XMLHttpRequest')
          $msg = $_.Exception.Message

          if ($isInertiaPost) {
            Write-JsonResponse -res $res -status 422 -obj @{ errors = @{ email = $msg } }
            $res.Close(); continue
          }

          # Otherwise, redirect back
          $res.StatusCode = 303
          $target = if ($req.Url.LocalPath -eq '/login') { '/login.html' } else { '/register.html' }
          $res.RedirectLocation = $target + '?error=' + [System.Uri]::EscapeDataString($msg)
          $res.Close()
          continue
        }
      }

      if ($req.Url.LocalPath -eq '/logout') {
        $res.Headers.Add('Set-Cookie', 'sb-access-token=; Path=/; Max-Age=0')
        $res.Headers.Add('Set-Cookie', 'sb-refresh-token=; Path=/; Max-Age=0')
        $res.Headers.Add('Set-Cookie', 'slipcraft_session=; Path=/; Max-Age=0')
        $res.StatusCode = 303
        $res.RedirectLocation = '/index.html'
        $res.Close()
        continue
      }
    }

    $routeAliases = @{
      '/dashboard' = '/dashboard.html'
      '/about' = '/about.html'
      '/transactions' = '/transactions.html'
      '/vendors' = '/vendors.html'
      '/services' = '/services.html'
      '/profile' = '/profile.html'
      '/profile/edit' = '/profile.html'
      '/orders' = '/orders.html'
      '/referral' = '/services/referral.html'
      '/buy-point' = '/buy-point.html'
      '/buy-points' = '/buy-point.html'
      '/help' = '/help.html'
      '/contact' = '/contact.html'
      '/login' = '/login.html'
      '/register' = '/register.html'
    }
    if ($routeAliases.ContainsKey($path)) {
      $path = $routeAliases[$path]
    }

    $actionOnlyRoutes = @(
      '/order/find',
      '/order/find.html',
      '/services/faker/generate',
      '/services/faker/generate.html',
      '/services/pass-clone/link-status',
      '/services/pass-clone/link-status.html',
      '/services/crypto-receipt/binance/store',
      '/services/crypto-receipt/binance/store.html',
      '/services/crypto-receipt/bybit/store',
      '/services/crypto-receipt/bybit/store.html'
    )
    if ($req.HttpMethod -eq 'GET' -and $actionOnlyRoutes -contains $path) {
      Write-JsonResponse -res $res -status 405 -obj @{ error = 'This endpoint expects a POST request.' }
      $res.Close()
      continue
    }

    # Support extensionless routes (SPA-style links like /login, /register, etc.)
    # If a request is for a path without an extension and a matching .html file exists, serve that.
    $ext = [System.IO.Path]::GetExtension($path)
    if ([string]::IsNullOrWhiteSpace($ext)) {
      $candidate = "$path.html"
      $candidatePath = Join-Path $root $candidate.TrimStart('/')
      if (Test-Path $candidatePath -PathType Leaf) {
        $path = $candidate
      }
    }

    $filePath = Join-Path $root $path.TrimStart('/')

    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()

      # Inertia emulation:
      # - For X-Inertia requests: return JSON page object (from HTML's data-page), patched with Supabase data.
      # - For normal document navigation: return HTML but with a patched data-page embedded.
      $isInertia = ($req.Headers.AllKeys -contains 'X-Inertia')
      $isDocumentNavigation = ($req.Headers['Sec-Fetch-Dest'] -eq 'document')

      # Load data-page JSON from the HTML file
      $htmlText = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
      $match = [regex]::Match($htmlText, 'data-page="([^"]+)"')
      $pageJson = $null
      if ($match.Success) {
        $pageJson = [System.Net.WebUtility]::HtmlDecode($match.Groups[1].Value)
        $pageJson = Fix-InertiaJson $pageJson
      }

      # Patch auth user from Supabase if logged in
      $accessToken = Get-AccessToken $req
      if ($pageJson) {
        try {
          $pageObj = $pageJson | ConvertFrom-Json -ErrorAction Stop

          if (-not $pageObj.props) { $pageObj | Add-Member -NotePropertyName 'props' -NotePropertyValue (@{}) -Force }
          if (-not $pageObj.props.auth) { $pageObj.props | Add-Member -NotePropertyName 'auth' -NotePropertyValue (@{}) -Force }
          if (-not $pageObj.props.errors) { $pageObj.props | Add-Member -NotePropertyName 'errors' -NotePropertyValue (New-Object PSObject) -Force }

          # If server redirected with ?error=..., surface it as a validation error
          if ($req.Url.Query -and $req.Url.Query.StartsWith('?')) {
            $q = $req.Url.Query.TrimStart('?')
            foreach ($part in $q -split '&') {
              $kv = $part -split '=',2
              if ($kv.Count -eq 2 -and $kv[0] -eq 'error') {
                $errMsg = [System.Uri]::UnescapeDataString($kv[1])
                $pageObj.props.errors | Add-Member -NotePropertyName 'email' -NotePropertyValue $errMsg -Force
              }
            }
          }

          if ($accessToken) {
            try {
              $user = Supabase-AuthUser -accessToken $accessToken
              # Load wallet
              $wallet = $null
              try {
                $wallet = Supabase-Rest -method 'Get' -path ("wallets?select=*&user_id=eq.{0}" -f $user.id) -body $null -accessToken $accessToken
              } catch { }
              $walletRow = if ($wallet -and $wallet.Count -gt 0) { $wallet[0] } else { $null }

              # Ensure name is always a non-empty string (UI crashes otherwise)
              $displayName = $null
              if ($user.user_metadata -and $user.user_metadata.full_name -and -not [string]::IsNullOrWhiteSpace($user.user_metadata.full_name)) {
                $displayName = $user.user_metadata.full_name
              } elseif ($user.user_metadata -and $user.user_metadata.username -and -not [string]::IsNullOrWhiteSpace($user.user_metadata.username)) {
                $displayName = $user.user_metadata.username
              } elseif ($user.email -and -not [string]::IsNullOrWhiteSpace($user.email)) {
                $displayName = ($user.email -split '@')[0]
              } else {
                $displayName = 'User'
              }

              $emailValue = if ($user.email -and -not [string]::IsNullOrWhiteSpace($user.email)) { $user.email } else { 'user@example.com' }
              $usernameValue = $null
              if ($user.user_metadata -and $user.user_metadata.username -and -not [string]::IsNullOrWhiteSpace($user.user_metadata.username)) {
                $usernameValue = $user.user_metadata.username
              } else {
                $usernameValue = $displayName
              }

              $pageObj.props.auth.user = @{
                id = $user.id
                name = $displayName
                email = $emailValue
                username = $usernameValue
                point_main_balance = if ($walletRow) { [int64]$walletRow.main_points } else { 0 }
                point_holding_balance = if ($walletRow) { [int64]$walletRow.holding_points } else { 0 }
              }
            } catch {
              $pageObj.props.auth.user = $null
            }
          } else {
            $pageObj.props.auth.user = $null
          }

          # Transactions page: inject transactions
          if ($pageObj.component -eq 'Transactions' -and $accessToken) {
            try {
              $tx = Supabase-Rest -method 'Get' -path 'transactions?select=*&order=created_at.desc' -body $null -accessToken $accessToken
              $pageObj.props.transactions = $tx
            } catch {
              $pageObj.props.transactions = @()
            }
          }

          # Prefer extensionless URL for Inertia (Laravel-style)
          $lp = $req.Url.LocalPath
          if ($lp -ne '/' -and $lp.EndsWith('.html')) {
            $lp = $lp.Substring(0, $lp.Length - 5)
          }
          if ([string]::IsNullOrWhiteSpace($lp)) { $lp = '/' }
          $pageObj.url = $lp
          $pageJson = $pageObj | ConvertTo-Json -Compress -Depth 30
        } catch {
          # keep original
        }
      }

      if ($isInertia -and -not $isDocumentNavigation -and $req.HttpMethod -eq 'GET' -and $ext -eq '.html' -and $pageJson) {
        $bytes = [System.Text.Encoding]::UTF8.GetBytes($pageJson)
        $res.StatusCode = 200
        $res.ContentType = 'application/json; charset=utf-8'
        $res.AddHeader('X-Inertia', 'true')
        $res.ContentLength64 = $bytes.Length
        $res.OutputStream.Write($bytes, 0, $bytes.Length)
        continue
      }

      # Document navigation: serve HTML with patched data-page
      if ($pageJson) {
        $encoded = [System.Net.WebUtility]::HtmlEncode($pageJson)
        $htmlText = [regex]::Replace($htmlText, 'data-page="([^"]+)"', ('data-page="' + $encoded + '"'), 1)
        $bytes = [System.Text.Encoding]::UTF8.GetBytes($htmlText)
        $res.StatusCode = 200
        $res.ContentType = 'text/html; charset=utf-8'
        $res.ContentLength64 = $bytes.Length
        $res.OutputStream.Write($bytes, 0, $bytes.Length)
        continue
      }

      # Fallback: static file
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $res.ContentType = switch ($ext) {
        '.html' { 'text/html; charset=utf-8' }
        '.css'  { 'text/css; charset=utf-8' }
        '.js'   { 'application/javascript; charset=utf-8' }
        '.json' { 'application/json; charset=utf-8' }
        '.png'  { 'image/png' }
        '.jpg'  { 'image/jpeg' }
        '.jpeg' { 'image/jpeg' }
        '.svg'  { 'image/svg+xml' }
        '.ico'  { 'image/x-icon' }
        '.woff' { 'font/woff' }
        '.woff2'{ 'font/woff2' }
        default { 'application/octet-stream' }
      }
      $res.StatusCode = 200
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $res.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
      $res.ContentType = 'text/plain; charset=utf-8'
      $res.ContentLength64 = $msg.Length
      $res.OutputStream.Write($msg, 0, $msg.Length)
    }

    $res.Close()
  }
}
finally {
  if ($listener.IsListening) { $listener.Stop() }
  $listener.Close()
}
