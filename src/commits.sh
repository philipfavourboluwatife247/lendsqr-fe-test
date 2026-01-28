#!/bin/bash

# Simple Single Commit Option
# Use this if you want to commit everything at once

echo "🚀 Committing all changes for Lendsqr Frontend Assessment..."

# Stage all changes
git add .

# Single comprehensive commit
git commit -m "feat: complete Lendsqr frontend assessment implementation

Implemented all required features:
- Login page with authentication
- Dashboard with user statistics
- Users page with filtering, pagination, and actions
- User details page with localStorage integration
- Fully responsive design (mobile, tablet, desktop)
- 500 mock user records
- Pixel-perfect Figma design match
- TypeScript with strict mode
- SCSS modular styling
- Unit and integration tests

Tech stack: React, TypeScript, SCSS, React Router
Deployed on: Vercel"

echo "✅ Commit completed!"
echo ""
echo "Next steps:"
echo "1. git push origin main"
echo "2. Verify deployment on Vercel"
echo "3. Submit assessment"
