# AntBryx — Official Website

<p align="center">
  <strong>Official website of AntBryx — a software agency building modern digital products and software solutions.</strong>
</p>

<p align="center">
  <a href="https://antbryx.vercel.app">🌐 Live Website</a>
  ·
  <a href="https://github.com/codebyrifaf/antbryx-website">💻 Repository</a>
</p>

---

## About AntBryx

**AntBryx is a startup founded and developed by me, focused on building software products and delivering modern technology solutions.**

This repository contains the source code for the official AntBryx website.

The website serves as the company's digital presence, presenting the AntBryx brand, its capabilities, products, services, and technology-focused approach through a modern, responsive web experience.

> **AntBryx is not a tutorial or template project. This repository represents the production website of my own startup.**

---

## 🌐 Live Website

**AntBryx:**  
https://antbryx.vercel.app

The website is deployed using **Vercel**.

---

# ✨ Highlights

The website was designed and developed as a modern startup/technology-company platform with emphasis on:

- Modern UI/UX
- Responsive design
- Smooth animations
- Component-based architecture
- Reusable UI components
- Type-safe development
- Interactive sections
- Form handling and validation
- Data visualization capabilities
- Production-ready Next.js architecture
- Scalable frontend structure

---

# 🛠️ Technology Stack

### Core

- **Next.js 16**
- **React 19**
- **TypeScript 5.7**
- **Tailwind CSS 4**
- **PostCSS**

### UI & Components

- **Radix UI**
- **Lucide React**
- **Class Variance Authority**
- **Tailwind Merge**
- **Sonner**

### Animation & Interaction

- **Framer Motion**
- **Embla Carousel**
- **Vaul**

### Forms & Validation

- **React Hook Form**
- **Zod**
- **@hookform/resolvers**

### Data & Utilities

- **Recharts**
- **date-fns**
- **CMDK**

### Backend / Services

- **Resend**

### Analytics & Deployment

- **Vercel Analytics**
- **Vercel**

---

# 🏗️ Architecture

The project follows a modern Next.js application structure.

```text
antbryx-website/
│
├── app/
│   └── Application routes and Next.js pages
│
├── components/
│   └── Reusable UI and application components
│
├── hooks/
│   └── Custom React hooks
│
├── lib/
│   └── Utility functions and shared application logic
│
├── public/
│   └── Static assets and public resources
│
├── styles/
│   └── Global styling
│
├── components.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

The separation between application routes, reusable components, hooks, utilities, static assets, and styling keeps the project maintainable and allows the website to evolve alongside the startup.

---

# 🚀 Getting Started

## Prerequisites

Make sure you have:

- Node.js
- npm or pnpm
- Git

---

## Clone the Repository

```bash
git clone https://github.com/codebyrifaf/antbryx-website.git
```

Move into the project directory:

```bash
cd antbryx-website
```

---

## Install Dependencies

Using npm:

```bash
npm install
```

or using pnpm:

```bash
pnpm install
```

---

# 💻 Development

Start the local development server:

```bash
npm run dev
```

or:

```bash
pnpm dev
```

The development server will normally be available at:

```text
http://localhost:3000
```

---

# 📦 Production Build

Create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

---

# 🔍 Code Quality

The project includes ESLint configuration through the package scripts.

Run linting with:

```bash
npm run lint
```

---

# 📁 Project Structure

## `app/`

Contains the application's Next.js routes and page-level functionality.

The project uses the modern Next.js App Router architecture.

---

## `components/`

Contains reusable interface components.

Keeping UI elements modular allows the AntBryx website to maintain a consistent design system while making individual sections easier to develop and update.

---

## `hooks/`

Contains reusable custom React hooks used throughout the application.

---

## `lib/`

Contains shared utilities and application-level logic.

---

## `public/`

Contains static resources used by the website.

---

## `styles/`

Contains global styling and project-wide CSS configuration.

---

# 🎨 Design Philosophy

The AntBryx website was designed around several principles:

### Modern

The interface uses contemporary web design patterns and modern frontend technologies.

### Responsive

The website is designed to provide a consistent experience across:

- Desktop
- Laptop
- Tablet
- Mobile

### Interactive

Animations and interactive components are used to make the website feel dynamic without sacrificing usability.

### Scalable

The application uses reusable components and a structured architecture so new sections and functionality can be added as AntBryx grows.

### Brand-focused

The website is designed around the AntBryx identity rather than being a generic software-company template.

---

# ⚡ Performance & User Experience

The application takes advantage of the modern Next.js ecosystem for:

- Optimized rendering
- Component-based architecture
- Production builds
- Static asset handling
- Responsive interfaces
- Modern client-side interactions

Vercel Analytics is also integrated for website analytics.

---

# 📬 Communication & Forms

The project includes **React Hook Form** and **Zod** for structured form handling and validation.

The repository also includes **Resend**, providing infrastructure for email-related functionality where configured.

---

# 🧩 UI System

The project uses a combination of:

- Radix UI primitives
- Tailwind CSS
- Custom components
- Lucide icons
- Class Variance Authority
- Tailwind Merge

This provides a flexible component system while maintaining consistency across the website.

---

# 🎞️ Animation

Interactive motion is implemented using **Framer Motion**.

Animations are used to improve:

- Page transitions
- Section interactions
- Visual hierarchy
- User engagement
- Micro-interactions

The goal is to use motion as part of the experience rather than as decoration alone.

---

# 📊 Data Visualization

The project includes **Recharts**, allowing the application to support data-driven visualizations where required.

This provides a foundation for presenting structured information through charts and other visual components.

---

# 🔐 Environment Variables

If environment-dependent services are configured locally, create an environment file:

```text
.env.local
```

Do not commit private API keys, credentials, or other secrets to GitHub.

Example:

```env
# Example only
NEXT_PUBLIC_...
...
```

Use the actual environment variables required by the current application configuration.

---

# 🚢 Deployment

The website is deployed through **Vercel**.

The production deployment is available at:

**https://antbryx.vercel.app**

A typical Vercel deployment workflow is:

```text
GitHub Repository
       │
       ▼
     Vercel
       │
       ▼
Production Build
       │
       ▼
AntBryx Website
```

---

# 🔄 Development Workflow

The project follows a straightforward development workflow:

```text
Idea / Requirement
        │
        ▼
Component Development
        │
        ▼
Integration
        │
        ▼
Local Testing
        │
        ▼
Git Commit
        │
        ▼
GitHub
        │
        ▼
Vercel Deployment
```

This allows the website to evolve continuously as the startup develops new products, services, and business initiatives.

---

# 🎯 Purpose of This Repository

This repository serves two purposes:

### 1. Company Website

It contains the actual source code behind the AntBryx public-facing website.

### 2. Engineering Portfolio

It demonstrates the technical architecture and frontend engineering practices used to build the startup's digital presence.

The project therefore represents both a **real-world startup product** and an example of modern web application development.

---

# 👨‍💻 Founder & Developer

**Rifaf**

Founder & Software Engineer — **AntBryx**

GitHub:  
https://github.com/codebyrifaf

---

# 🔗 Links

### AntBryx Website

https://antbryx.vercel.app

### GitHub Repository

https://github.com/codebyrifaf/antbryx-website

---

# 📄 License

This project is the proprietary website of **AntBryx**.

Unless explicitly stated otherwise, the source code, branding, visual identity, content, and associated assets are not licensed for redistribution, commercial reuse, or modification.

For permissions or collaboration inquiries, contact the AntBryx team.

---

<p align="center">
  <strong>AntBryx</strong><br>
  Building software. Creating digital products. Turning ideas into technology.
</p>
