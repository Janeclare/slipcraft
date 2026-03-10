# SlipCraft - Receipt Generation Platform

A spot to craft your receipt. Built with Laravel, Inertia.js, React, and Tailwind CSS.

## 🚀 Quick Start

Simply open `index.html` in your browser to view the website.

All assets are local - no server or internet connection required for viewing.

## 📁 Project Structure

```
slipcraft/
├── index.html           # Home page
├── login.html           # Login page
├── register.html        # Registration page
├── dashboard.html       # User dashboard
├── vendors.html         # Vendors page
├── buy-point.html       # Point purchase page
├── package.json         # Node.js configuration
├── build/               # Compiled assets (238 files)
│   └── assets/          # JavaScript, CSS, images
└── storage/             # Media files
    └── platform/        # Logo and icon
```

## 🎨 Technology Stack

- **Frontend Framework**: React 18
- **Routing**: Inertia.js
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Backend**: Laravel (requires server setup)

## 🌟 Features

- ✅ Inertia.js/React SPA architecture
- ✅ Responsive design with Tailwind CSS
- ✅ Point-based receipt generation system
- ✅ User authentication (UI ready)
- ✅ Vendor management system
- ✅ Multiple payment methods
- ✅ Dashboard with statistics
- ✅ All original animations and transitions

## ⚙️ Running Locally

### Option 1: Direct Browser Access
```bash
# Simply double-click any HTML file
# or open index.html in your browser
```

### Option 2: Local Development Server
```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Opens at: http://localhost:8080

### Option 3: Python Server
```bash
python -m http.server 8080
```

Then visit: http://localhost:8080

## 📝 Important Notes

### Current Status
- ✅ All pages load correctly with original design
- ✅ All assets are local (no CORS errors)
- ✅ React components render properly
- ✅ Animations and styling intact

### Backend Integration
This is a **frontend build** of the Inertia.js application. For full functionality:
- User authentication requires Laravel backend
- Point transactions need API integration
- Payment processing needs gateway setup
- Database operations require server connection

## 🎯 Platform Details

- **Primary Color**: #f8812d (Orange)
- **Font**: Nunito (200-900 weights)
- **Point Value**: 1 Point = ₦1.00
- **Transfer Range**: 100 - 15,000 points
- **Payment Window**: 15 minutes
- **Vendor Fee**: ₦5,600.00

## 📞 Contact

- **Email**: support@slipcraft.net
- **Phone**: 1-718-409-4162
- **Address**: 234 Weimann Station Suite 920, Mayertown, FL 40244-0699

## 🔧 Fixed Issues

- ✅ CORS errors from external asset loading
- ✅ White screen on page load
- ✅ Missing build assets
- ✅ Broken image paths
- ✅ External URL dependencies

All assets now load locally for offline viewing.

## 📄 License

Proprietary - SlipCraft Platform

---

**Built with ❤️ for SlipCraft**
