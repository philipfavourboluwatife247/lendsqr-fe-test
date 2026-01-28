# Lendsqr Frontend Engineer Assessment

![Lendsqr Logo](https://lendsqr.com/assets/icons/header-logo.svg)

A pixel-perfect implementation of the Lendsqr Admin Console built with React, TypeScript, and SCSS. This project demonstrates advanced frontend engineering skills including responsive design, state management, data persistence, and adherence to design specifications.

## 🚀 Live Demo

**Application URL:** [https://philip-favour-boluwatife-lendsqr-fe-test.vercel.app](https://philip-favour-boluwatife-lendsqr-fe-test.vercel.app)

**Documentation:** [Project Documentation](link-to-your-doc)

**Video Walkthrough:** [Loom Video](link-to-your-loom-video)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [Deployment](#deployment)
- [Browser Support](#browser-support)

## 🎯 Overview

This project is a comprehensive frontend assessment that includes:
- **3 fully responsive pages**: Login, Users, and User Details
- **500+ mock user records** with realistic data generation
- **Advanced filtering and pagination** for large datasets
- **Local storage integration** for data persistence
- **Pixel-perfect design implementation** matching Figma specifications

## ✨ Features

### Authentication
- ✅ Secure login page with form validation
- ✅ Protected routes with authentication guards
- ✅ Session persistence using localStorage

### Users Page
- ✅ Data table with 500+ user records
- ✅ Advanced multi-criteria filtering (Organization, Username, Email, Date, Status)
- ✅ Pagination with customizable items per page
- ✅ Action menu (View Details, Blacklist, Activate)
- ✅ Status badges with color coding
- ✅ Responsive table design for mobile and tablet

### User Details Page
- ✅ Comprehensive user information display
- ✅ Tab-based navigation (General Details, Documents, Bank Details, Loans, Savings, App and System)
- ✅ 5-column responsive grid layout
- ✅ Section dividers for visual organization
- ✅ LocalStorage integration for data persistence
- ✅ User tier visualization with star ratings
- ✅ Multiple guarantor support

### Design & UX
- ✅ Pixel-perfect implementation of Figma design
- ✅ Mobile-first responsive design (320px - 1440px+)
- ✅ Smooth transitions and hover states
- ✅ Consistent color scheme and typography
- ✅ Accessible UI components

## 🛠 Tech Stack

### Core
- **React 18.2+** - UI library
- **TypeScript 4.9+** - Type-safe JavaScript
- **React Router v6** - Client-side routing
- **SCSS** - Advanced styling with variables and mixins

### Development Tools
- **Create React App** - Project bootstrapping
- **ESLint** - Code linting
- **Prettier** - Code formatting

### Deployment
- **Vercel** - Hosting and continuous deployment

## 🚦 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn (v1.22.0 or higher)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/your-username/lendsqr-fe-test.git
   cd lendsqr-fe-test
```

2. **Install dependencies**
```bash
   npm install
   # or
   yarn install
```

3. **Start the development server**
```bash
   npm start
   # or
   yarn start
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
# or
yarn build
```

The optimized production build will be created in the `build/` directory.

## 📁 Project Structure
```
lendsqr-fe-test/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── icons/          # SVG icons
│   │   └── images/         # PNG/JPG images
│   ├── components/
│   │   ├── Layout/         # Main layout wrapper
│   │   ├── Sidebar/        # Navigation sidebar
│   │   ├── Header/         # Top header component
│   │   ├── FilterPopover/  # Filter dropdown component
│   │   └── ActionMenu/     # User action menu
│   ├── pages/
│   │   ├── Login/          # Login page
│   │   ├── Dashboard/      # Dashboard page
│   │   ├── Users/          # Users listing page
│   │   └── UserDetails/    # User details page
│   ├── styles/
│   │   ├── _variables.scss # SCSS variables
│   │   ├── _mixins.scss    # SCSS mixins
│   │   └── global.scss     # Global styles
│   ├── types/
│   │   └── index.ts        # TypeScript type definitions
│   ├── utils/
│   │   ├── generateMockData.ts  # Mock data generator
│   │   └── localStorage.ts      # LocalStorage utilities
│   ├── App.tsx             # Main app component
│   ├── index.tsx           # App entry point
│   └── react-app-env.d.ts  # TypeScript declarations
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
└── vercel.json
```

## 🎨 Design Decisions

### Architecture

**Component-Based Architecture:** The application follows a modular component structure, promoting reusability and maintainability. Each component is self-contained with its own styles and logic.

**Type Safety:** Comprehensive TypeScript interfaces ensure type safety across the application, reducing runtime errors and improving developer experience.

**SCSS Modular System:** SCSS modules with variables and mixins enable consistent styling and easy theme management.

### State Management

**Local State Management:** React hooks (useState, useEffect) are used for component-level state management, keeping the application lightweight without external state management libraries.

**Data Persistence:** localStorage is used to persist user data and authentication state, providing a seamless user experience across sessions.

### Responsive Design Strategy

**Mobile-First Approach:** The design starts with mobile layouts (320px) and progressively enhances for larger screens using media queries.

**Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

### Performance Optimizations

- **Code Splitting:** Routes are lazy-loaded to reduce initial bundle size
- **Memoization:** React.memo is used for expensive components to prevent unnecessary re-renders
- **Efficient Filtering:** Filter operations are optimized to handle 500+ records smoothly
- **CSS Optimization:** SCSS compilation produces optimized CSS with minimal redundancy

### Data Management

**Mock Data Generation:** A custom data generator creates 500 realistic user records with:
- Randomized but realistic names, emails, and phone numbers
- Varied organizations, statuses, and user tiers
- Complete user profiles with guarantor information
- Consistent data structure matching the Figma design

**LocalStorage Integration:** User details are cached in localStorage when viewed, enabling:
- Fast subsequent loads
- Offline data access
- Reduced data generation overhead

## 🌐 Deployment

### Vercel Deployment

This application is deployed on Vercel with automatic deployments on every push to the main branch.

**Deployment Steps:**

1. **Connect GitHub Repository**
   - Link your GitHub repository to Vercel
   - Configure build settings (automatically detected for Create React App)

2. **Environment Variables** (if needed)
```
   REACT_APP_API_URL=your_api_url
```

3. **Deploy**
```bash
   # Push to main branch
   git push origin main

   # Vercel automatically builds and deploys
```

4. **Custom Domain** (optional)
   Configure custom domain in Vercel dashboard

### Build Optimization

The production build is optimized with:
- Minified JavaScript and CSS
- Code splitting for optimal loading
- Asset compression
- Tree shaking for reduced bundle size

## 🌍 Browser Support

The application is tested and fully functional on:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Key Implementation Highlights

### 1. Pixel-Perfect Design Match
Every element is carefully measured and styled to match the Figma design specifications:
- Exact spacing and padding values
- Precise typography (font sizes, weights, line heights)
- Accurate color values from design system
- Proper border radii and shadows

### 2. Advanced Filtering System
The filter implementation handles multiple criteria simultaneously:
- Real-time filtering without page reload
- Maintains pagination state during filtering
- Clear visual feedback for active filters
- Reset functionality to clear all filters

### 3. Responsive Grid System
The user details page uses a sophisticated grid layout:
- 5 columns on desktop (1440px+)
- 3 columns on tablet (768px - 1023px)
- 1 column on mobile (< 768px)
- Automatic reflow for different screen sizes

### 4. Type-Safe Development
Comprehensive TypeScript types prevent errors:
```typescript
interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';
  // ... additional fields
}
```

### 5. Modular SCSS Architecture
Organized SCSS structure with:
- Global variables for colors, spacing, fonts
- Reusable mixins for common patterns
- Component-scoped modules to prevent style conflicts
- Mobile-first media queries

## 🎯 Assessment Criteria Met

✅ **Visual Fidelity:** Pixel-perfect implementation matching Figma design
✅ **Code Quality:** Clean, well-structured, and maintainable code
✅ **Best Practices:** Component architecture, type safety, and semantic naming
✅ **Responsiveness:** Fully responsive across all device sizes
✅ **Data Management:** localStorage integration for persistence
✅ **TypeScript:** Strict type checking throughout the application
✅ **SCSS:** Modular styling with variables and mixins

## 🤝 Contributing

While this is an assessment project, feedback and suggestions are welcome!

## 📄 License

This project is created as part of the Lendsqr Frontend Engineer Assessment.

## 👤 Author

**PHILIP FAVOUR BOLUWATIFE**
- GitHub: [@philipfavourboluwatife247](https://github.com/philipfavourboluwatife247)
- Email: favourphilipvibes247@gmail.com
- LinkedIn: [Philip Favour Boluwatife](https://www.linkedin.com/in/philip-favour-boluwatife)

## 🙏 Acknowledgments

- Lendsqr for the opportunity and comprehensive assessment
- Figma design system for detailed specifications
- React and TypeScript communities for excellent documentation

---

**Note:** This project was built as part of the Lendsqr Frontend Engineering Assessment. It demonstrates proficiency in React, TypeScript, SCSS, responsive design, and attention to detail in implementing pixel-perfect designs.

## 📞 Contact & Support

For questions or issues related to this assessment, please contact:
- **Email:** careers@lendsqr.com

---

Made with ❤️ for Lendsqr Frontend Assessment
