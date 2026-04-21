# Macklemore Solutions

Welcome to the Macklemore Solutions corporate website repository. This application represents the digital storefront and resource center for Macklemore Solutions, an enterprise focused on delivering measurable operational transformation through AI, Automation, and Cybersecurity.

## Overview

Macklemore Solutions is a modern, responsive React web application designed to showcase enterprise-level technical services. It features a rich, dynamic user interface with smooth animations, clear navigation, and a focus on lead generation and resource distribution.

The website includes comprehensive sections for:
- **Solutions:** Deep dives into AI & Automation, Cybersecurity, and AI Education offerings.
- **Industries We Serve:** Tailored content for Logistics, Financial Services, Healthcare, Retail, Education, and Enterprise sectors.
- **Resources:** A robust content library featuring Blog insights, interactive AI Playbooks, and downloadable eGuides/Whitepapers.
- **Company Context:** About Us, The Macklemore Advantage, Careers, and Case Studies.

## Tech Stack

This project is built using modern web development tools:
- **Framework:** [React 19](https://react.dev/) via [Vite](https://vitejs.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Motion (Framer Motion)](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## Run Locally

**Prerequisites:** Node.js

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

3. **Build for production:**
   ```bash
   npm run build
   ```
   This will generate a production-ready build in the `dist` folder.

## Project Structure

- `src/pages/`: Contains all the main route components (Home, Blog, CaseStudies, etc.).
- `src/pages/solutions/`: Specific nested pages detailing core technical services.
- `src/components/`: Reusable layout and UI components (e.g., Layout, Navbar, Footer).
- `src/assets/`: Static assets like images and logos.
- `src/index.css`: Global styles, typography settings, and core Tailwind configuration.
