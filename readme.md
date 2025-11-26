# Bolts Robotics Website

A modern, responsive website for the Bolts VEX U Robotics Team, built using React, Vite, and TailwindCSS. The site showcases the team, provides information about the program, features a gallery, and includes a contact section for outreach.

## Features

- Fast React frontend built on Vite.
- Fully responsive design.
- Custom team branding with a transparent PNG logo.
- TailwindCSS utility-first styling.
- Clean component-based structure.
- Easy to maintain and extend.

## Tech Stack

- React 18
- Vite 3
- TailwindCSS
- Node.js (LTS)

## Installation Requirements

Students must have the following installed before running the project:

### Node.js (LTS Version)
Download from https://nodejs.org  
Verify installation:

```
node -v
npm -v
```

### npm
npm is bundled with Node.js.

### VS Code (Recommended)
Download from https://code.visualstudio.com

Recommended extensions:
- Tailwind CSS IntelliSense
- Prettier
- ESLint
- Error Lens

### Git (Recommended)
Download from https://git-scm.com/downloads

### Modern Browser
Chrome, Firefox, Safari, or Edge.

## Project Structure

```
bolts-website/
  index.html
  package.json
  tailwind.config.js
  postcss.config.js
  src/
    main.jsx
    App.jsx
    index.css
    components/
      Hero.jsx
      About.jsx
      TeamGrid.jsx
      GalleryCarousel.jsx
      Contact.jsx
      logo2.png
```

## Setup Instructions

1. Clone the repository:

   ```
   git clone <your-repo-url>
   cd bolts-website
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run start
   ```

   Vite will run on:

   ```
   http://localhost:5173
   ```

4. Build for production:

   ```
   npm run build
   ```

5. Preview production build:

   ```
   npm run serve
   ```

## Logo Usage

The logo file `logo2.png` is stored in `src/components/` and imported directly inside components using:

```jsx
import logo from "./logo2.png";
```

It renders using an image tag:

```jsx
<img src={logo} alt="Bolts Robotics Logo" className="w-28 h-28 object-contain" />
```

## TailwindCSS

Tailwind utilities are available throughout the project. The main stylesheet at `src/index.css` includes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

The Tailwind config file defines custom colors such as `boltsRed`, `boltsWhite`, and any additional theme values you add.

## Deployment

You can deploy the built site using:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

Build output will be located in the `dist/` folder.

## Image Management

Images used inside React components must be placed inside:

```
src/assets/
```

Import them using:

```jsx
import robot1 from "../assets/gallery/robot1.jpg";
```

Images that must be referenced by URL belong inside:

```
public/
```

Use them in JSX as:

```jsx
<img src="/sponsor-logos/qualcomm.png" />
```

## Webmaster Onboarding Guide

### Required Skills
- Basic JavaScript
- React components and imports
- Vite project structure
- TailwindCSS utility classes
- Basic Git workflow

### Local Development Setup

```
git clone <repo-url>
cd bolts-website
npm install
npm run start
```

The site runs at:

```
http://localhost:5173
```

### Adding Images

Team member photos go in:

```
src/assets/team/
```

Gallery photos go in:

```
src/assets/gallery/
```

Import images in components:

```jsx
import alice from "../assets/team/alice.jpg";
```

### Adding a Team Member

Edit `TeamGrid.jsx`, import the image, then add an object to the team array.

### Deployment Workflow

- Push changes to a feature branch
- Create a Pull Request
- Merge after review
- Vercel auto-deploys from main

### Git Workflow

```
git checkout -b feature/<name>
git commit -m "Description"
git push
```

A review is required before merging.

### Troubleshooting

**Blank screen**  
Usually caused by missing React imports or bad image paths.

**Vite compile errors**  
Check file name case sensitivity.

**Image not showing**  
Verify correct folder placement and correct import path.

## Contributing

Feel free to submit issues or open pull requests for improvements.

## License

This project is maintained for educational and team use by the Bolts VEX U Robotics Program.
