# Data Engineer Portfolio

A visually stunning portfolio website built with React, TypeScript, and Tailwind CSS. Features animated particle backgrounds, glowing effects, interactive hover states, and smooth scroll animations.

![Portfolio Preview](https://nuronnsrkezqg.ok.kimi.link)

## Features

- **Animated Particle Background** - Interactive neural network-style particles
- **Glowing Lime Green Theme** - Premium dark mode with accent colors
- **Smooth Scroll Animations** - Sections fade in as you scroll
- **Interactive Hover States** - Cards, buttons, and links have engaging hover effects
- **3D Tilt Effects** - Hero card follows mouse movement
- **Responsive Design** - Works perfectly on all devices

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deploying to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the main branch.

1. **Push this code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**

3. **That's it!** The workflow will automatically build and deploy your site.

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to GitHub Pages using the `gh-pages` branch:
```bash
# Install gh-pages package
npm install -g gh-pages

# Deploy
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

## Customization

### Update Your Information

Edit these files to personalize your portfolio:

1. **`src/sections/Hero.tsx`**
   - Replace `[Your Name]` with your actual name
   - Update the description
   - Modify stats (years, projects, uptime)

2. **`src/sections/About.tsx`**
   - Update your personal story
   - Modify the highlights

3. **`src/sections/Experience.tsx`**
   - Update job titles, companies, and descriptions
   - Add/remove experiences as needed

4. **`src/sections/Projects.tsx`**
   - Add your actual projects
   - Update project links (demo and GitHub)

5. **`src/sections/Skills.tsx`**
   - Add/remove skills
   - Adjust proficiency levels

6. **`src/sections/Contact.tsx`**
   - Update email, phone, and location
   - Update social media links

7. **`src/sections/Footer.tsx`**
   - Replace `[Your Name]` with your name

### Changing Colors

The primary accent color is defined in `src/index.css`:

```css
--lime: #d1e29d;
```

Update this value to change the accent color throughout the site.

## Project Structure

```
├── .github/workflows/     # GitHub Actions for deployment
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navigation.tsx
│   │   └── ParticleBackground.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── LogoOrbit.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with ❤️ using React, Vite, and Tailwind CSS.
