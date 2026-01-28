#!/bin/bash

# Lendsqr Frontend Assessment - Git Commit Script
# Run this script to commit all changes with proper commit messages

echo "Starting git commits for Lendsqr Frontend Assessment..."

# Initial Setup
git add .
git commit -m "chore: initialize React TypeScript project with SCSS"

git add .
git commit -m "chore: configure project structure and folder organization"

git add .
git commit -m "chore: setup SCSS variables, mixins, and global styles"

# Type Definitions
git add src/types/
git commit -m "feat: define User and Guarantor TypeScript interfaces"

# Utils
git add src/utils/
git commit -m "feat: create localStorage utilities for data persistence"

git add src/utils/generateMockData.ts
git commit -m "feat: create mock data generator with 500 user records"

git add src/utils/generateMockData.ts
git commit -m "fix: resolve TypeScript type error in maritalStatus field"

# Authentication
git add src/pages/Login/
git commit -m "feat: implement login page with form validation"

git add src/pages/Login/
git commit -m "style: implement responsive login page design matching Figma"

# Routing
git add src/App.tsx
git commit -m "feat: setup React Router with protected routes"

# Layout Components
git add src/components/Layout/
git commit -m "feat: create reusable Layout component with sidebar and header"

git add src/components/Sidebar/
git commit -m "feat: implement responsive sidebar navigation with active states"

git add src/components/Header/
git commit -m "feat: add header component with search and user profile"

git add src/components/Layout/Layout.module.scss
git commit -m "style: implement mobile-responsive navigation menu"

# Dashboard
git add src/pages/Dashboard/
git commit -m "feat: create Dashboard page with user statistics cards"

git add src/pages/Dashboard/Dashboard.module.scss
git commit -m "style: add responsive grid layout for dashboard cards"

# Users Page - Core
git add src/pages/Users/Users.tsx
git commit -m "feat: create Users page with data table and pagination"

git add src/pages/Users/Users.tsx
git commit -m "feat: implement user listing with mock API integration"

git add src/pages/Users/Users.tsx
git commit -m "feat: add pagination component with users per page selector"

git add src/pages/Users/Users.module.scss
git commit -m "style: implement responsive table design matching Figma"

# Users Page - Filtering
git add src/components/FilterPopover/
git commit -m "feat: create FilterPopover component for user filtering"

git add src/components/FilterPopover/FilterPopover.tsx
git commit -m "feat: implement filter form with organization, username, email, date, and status filters"

git add src/pages/Users/Users.tsx
git commit -m "feat: implement filter logic and apply filters to user data"

# Users Page - Actions
git add src/components/ActionMenu/
git commit -m "feat: create ActionMenu component with view, blacklist, and activate options"

git add src/components/ActionMenu/ActionMenu.module.scss
git commit -m "style: implement action menu positioning and hover states"

# User Details Page - Structure
git add src/pages/UserDetails/UserDetails.tsx
git commit -m "feat: create UserDetails page with tabs navigation"

git add src/pages/UserDetails/UserDetails.tsx
git commit -m "feat: implement user info card with avatar, tier stars, and account balance"

git add src/pages/UserDetails/UserDetails.tsx
git commit -m "feat: add localStorage integration for user details persistence"

# User Details Page - Content
git add src/pages/UserDetails/UserDetails.tsx
git commit -m "feat: implement Personal Information section with 5-column grid layout"

git add src/pages/UserDetails/UserDetails.tsx
git commit -m "feat: add Education and Employment section"

git add src/pages/UserDetails/UserDetails.tsx
git commit -m "feat: create Socials section display"

git add src/pages/UserDetails/UserDetails.tsx
git commit -m "feat: implement Guarantor section with multiple guarantors support"

# User Details Page - Styling
git add src/pages/UserDetails/UserDetails.module.scss
git commit -m "style: implement 5-column responsive grid matching Figma design"

git add src/pages/UserDetails/UserDetails.module.scss
git commit -m "style: add horizontal dividers between sections"

git add src/pages/UserDetails/UserDetails.module.scss
git commit -m "style: adjust typography, spacing, and padding to match Figma precisely"

git add src/pages/UserDetails/UserDetails.module.scss
git commit -m "style: optimize font sizes and grid gaps for pixel-perfect design"

# Testing (if tests exist)
if [ -d "src/__tests__" ] || [ -d "src/tests" ]; then
  git add src/__tests__/ src/**/*.test.tsx src/**/*.test.ts
  git commit -m "test: add unit tests for components and utilities"
  
  git add src/__tests__/ src/**/*.test.tsx src/**/*.test.ts
  git commit -m "test: implement integration tests for user flows"
fi

# Final Refinements
git add src/
git commit -m "refactor: improve code organization and extract reusable logic"

git add src/**/*.module.scss
git commit -m "style: final design adjustments for pixel-perfect Figma match"

git add .
git commit -m "chore: final code cleanup and formatting"

# Documentation
git add README.md
git commit -m "docs: add comprehensive README with setup and deployment instructions"

# Deployment Configuration
git add vercel.json package.json
git commit -m "chore: configure Vercel deployment settings"

git add .
git commit -m "chore: optimize build for production deployment"

echo "✅ All commits completed successfully!"
echo "Run 'git push origin main' to push to GitHub"
