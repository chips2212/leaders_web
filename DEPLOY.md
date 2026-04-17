# Deployment Guide

## GitHub Pages Deployment

This website is configured to deploy automatically to GitHub Pages when you push to the `warm-humanistic-version` branch.

### Published URL
Once deployed, your site will be available at:
**https://chips2212.github.io/leaders_web/**

### How it works
1. Every time you push to the `warm-humanistic-version` branch, GitHub Actions automatically builds and deploys the site
2. The workflow file is located at `.github/workflows/deploy.yml`
3. The site is built as a static export and hosted on GitHub Pages

### Manual Deployment
You can also trigger deployment manually:
1. Go to your GitHub repository
2. Click on "Actions" tab
3. Select "Deploy to GitHub Pages" workflow
4. Click "Run workflow"

### First-time Setup (if needed)
If this is the first deployment, you may need to enable GitHub Pages:
1. Go to repository Settings
2. Scroll down to "Pages" section
3. Under "Source", select "GitHub Actions"

### Local Development
```bash
npm run dev
# Site will be at http://localhost:3000
```

### Building for Production
```bash
npm run build
# Static files will be in the /dist folder
```
