Portfolio Website — Claude Code Prompt
Goal
Build a modern, professional, single-page portfolio website for a Junior Full-Stack Developer named Dachi Maisashvili. All content, comments, and UI text must be in English.
Tech Stack

Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS
Animations: Framer Motion
Icons: lucide-react
Fonts: Geist Sans or Inter (via next/font)
Deploy target: Vercel

Design Direction

Minimalist, clean, modern — inspiration: linear.app, vercel.com, leerob.io
Dark mode default, with a toggle for light mode (persisted in localStorage)
Color palette: neutral grays + one accent color (emerald-500 or blue-500 — pick one and stay consistent)
Smooth scroll for in-page navigation
Subtle scroll animations (fade-in, slide-up) using Framer Motion
Fully responsive — mobile-first approach
Sticky header with active section highlighting as the user scrolls

Site Structure (Sections)

1. Hero Section

Name: Dachi Maisashvili
Title: Junior Full-Stack Developer
Location: Limassol, Cyprus 🇨🇾
Short pitch:

"Self-taught developer building modern web apps with React, Next.js, and Go. Previously led construction teams for 7 years — now applying the same discipline to building software."

Two CTA buttons: "View Projects" (scrolls to projects) and "Download CV" (downloads PDF)
Social icons row: GitHub, LinkedIn, Email

2. About Section

Tell the unique story: Site Supervisor (7 years) → Self-taught Developer (2 years)
Emphasize transferable skills: leadership, problem-solving, discipline, accountability
2–3 short paragraphs of bio
Languages badges row:

Georgian — Native
Greek — Native level
English — C1 (Advanced)
Russian — B1 (Intermediate)

3. Projects Section (most important!)
   Three project cards. Each card includes:

Project title + status badge ("In Progress" / "Completed")
Short description
Tech stack tags (pill-style)
Two buttons: "Live Demo" and "GitHub"
Hover effect (subtle lift / glow / border)

Project 1 — Pharmacy Management Platform (In Progress)

Full-stack web application for pharmacies, in active development for 2+ months.
Stack: Next.js, TypeScript, Go (Gin), PostgreSQL, Docker, Makefile
Highlights: REST API design, schema migrations, Docker containerization, real-world workflows (feature branches, env vars, separation of concerns).

Project 2 — WorldWise: Travel Tracking App

Interactive travel app that lets users log visited cities and pin them on an interactive world map.
Stack: React, React Router, Context API, Leaflet, CSS Modules
Highlights: Geolocation API, reverse-geocoding, nested + protected routes, global state with Context + useReducer.

Project 3 — Movies Web App

Movie browsing app consuming the IMDb API for films, ratings, and details.
Stack: React, JavaScript, IMDb API
Highlights: Advanced hooks (useReducer, useRef, useMemo), Provider pattern, search, filtering, SPA routing.

4. Skills Section
   Categorized, pill/badge style:

Languages: JavaScript, TypeScript, Go, HTML5, CSS3, SQL
Frontend: React, Next.js, Tailwind CSS, React Router, Context API, React Hooks
Backend: Go (Gin framework), REST API design, Authentication
Database: PostgreSQL, Relational schema design
DevOps & Tools: Docker, Git, GitHub, Make, VS Code, Postman
Design: Figma (basic), Responsive UI, Mobile-first

5. Experience Section (brief)

Site Supervisor — Construction Industry (2018 – Present), Cyprus & Georgia
Supervised teams of up to 10 workers, coordinated daily tasks, met deadlines
7 years of progressive responsibility, leadership, and problem-solving
A short closing line: how these skills transfer directly into software engineering

6. Contact Section

Email: dachimari9@gmail.com
Phone: +357 95 195 018
GitHub link
LinkedIn (available on request)
"Download CV" button (PDF)
Optional: simple contact form (not required)

7. Footer

© 2026 Dachi Maisashvili
"Built with Next.js & Tailwind CSS" credit
Repeat social icons

Technical Requirements

SEO: proper <title>, meta description, Open Graph tags, favicon
Accessibility: semantic HTML, alt text on images, keyboard navigation, aria-labels on icon buttons
Performance: use next/image, lazy-load below-the-fold content
Dark mode: Tailwind dark: classes, toggle persisted in localStorage
TypeScript: strict mode, no any
File structure: clean, with components/, sections/, lib/, data/ folders. Project data lives in a typed data/projects.ts file so it's easy to add new ones later.

Final Deliverables

Working Next.js project that runs with npm run dev
README.md with setup, scripts, and deployment instructions
Proper .gitignore (Node.js + Next.js)
Git repo initialized
Ready for one-click Vercel deployment

Build Order

Project scaffolding + Tailwind + fonts + dark mode setup
Layout: header, footer, theme provider
Hero section
About section
Projects section (with typed data file)
Skills section
Experience section
Contact section
Framer Motion scroll animations
SEO, metadata, favicon, polish
README + deployment prep

Build it step by step. Show me each section as you complete it so I can review before moving on.
