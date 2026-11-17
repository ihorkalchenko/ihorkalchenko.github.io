# Ihor Kalchenko | Personal Portfolio

This repository hosts my personal portfolio website ([ihorkalchenko.github.io](https://ihorkalchenko.github.io)), built with **Astro**, **React**, and **Pages CMS**, deployed automatically via **GitHub Actions** to **GitHub Pages**.

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **UI Components**: [React](https://react.dev/) (interactive islands for theme toggling & dynamic computations)
- **Styling**: Sass / SCSS
- **Content Management**: [Pages CMS](https://pagescms.org/) (Git-based CMS configured via `.pages.yml`)
- **Hosting & CI/CD**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## 📂 Project Structure

```text
├── .github/workflows/deploy.yml # GitHub Actions automated deployment
├── .pages.yml                   # Pages CMS schema configuration
├── astro.config.mjs             # Astro configuration
├── package.json
├── public/                      # Static assets served at root
│   ├── files/                   # Documents (CV PDF)
│   ├── img/                     # Images & thumbnails
│   └── projects/                # Preserved live demo projects (eshop, candb, etc.)
└── src/
    ├── components/              # React & Astro components (ThemeToggle, ExperienceYears)
    ├── content/                 # Content managed via Pages CMS
    │   ├── pages/               # Single-page data (home.json, resume.json)
    │   └── projects/            # Markdown collection for portfolio projects
    ├── layouts/                 # Page layouts (BaseLayout.astro)
    ├── pages/                   # Astro routes (index.astro, projects.astro, about.astro)
    └── styles/                  # Sass SCSS stylesheet system
```

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:4321)
npm run dev

# Build for production (output to dist/)
npm run build

# Preview production build locally
npm run preview
```

## 📝 Content Management (Pages CMS)

Content can be edited directly in the repository or through the [Pages CMS](https://pagescms.org) web interface:
1. Sign in to [Pages CMS](https://pagescms.org) with your GitHub account.
2. Select `ihorkalchenko/ihorkalchenko.github.io`.
3. Edit Home page bio, Resume details, or Projects in the UI.
4. Saving automatically commits to the `master` branch and triggers GitHub Actions deployment.

## 🚀 Deployment

The project deploys automatically to GitHub Pages on every push to `master`.

Ensure that in your GitHub repository:
- **Settings** → **Pages** → **Build and deployment** → **Source** is set to **GitHub Actions**.

---
*© 2019-2026, Ihor Kalchenko*
