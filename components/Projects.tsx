"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "./icons";

const projects = [
  {
    name: "PharmaSense — Pharmacy Inventory & Quality Management",
    status: "Completed",
    description:
      "Full-stack SaaS dashboard built end-to-end to replace manual, error-prone pharmacy inventory tracking. Designed REST APIs and exercised them through Postman, modelled data and wrote SQL queries in PostgreSQL, and automated expiry alerts via scheduled emails — a single source of truth for stock, expiry, and quality status.",
    stack: [
      "Go (Gin)",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/dachiko1233/PharmaSense-go",
    demo: "https://www.pharmasense.co/en",
  },
  {
    name: "The Wedding — Digital Invitation",
    status: "Completed",
    description:
      "Elegant, production-deployed wedding invitation microsite for Nicole & Giorgi. A fully responsive, animated single-page experience with event details and RSVP, built with smooth motion and a polished, mobile-first layout.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: null,
    demo: "https://www.thewedding.gdn/",
  },
  {
    name: "GhostLeads — Lead Generation Platform",
    status: "Completed",
    description:
      "SaaS lead-generation platform that surfaces local businesses with little or no social-media presence. Aggregates public Google business data, scores each prospect by a 0–100 “hotness” ranking based on posting gaps, and delivers customizable lead packages (phone, email, website) as CSV downloads on a no-subscription, pay-per-lead model.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: null,
    demo: "https://www.getghostleads.com/",
  },
  {
    name: "WorldWise — Travel Tracker",
    status: "Completed",
    description:
      "Interactive map app to log visited cities, with client-side routing (nested, dynamic, and protected routes), global state via Context API and useReducer, and geolocation with reverse-geocoding.",
    stack: ["React", "React Router", "Context API", "Leaflet"],
    github: "https://github.com/dachiko1233/WorldWise1",
    demo: "https://ubiquitous-naiad-e2b034.netlify.app/",
  },
  {
    name: "Movies Web App",
    status: "Completed",
    description:
      "Single-page movie browser consuming the IMDb API, with search, filtering, and routing.",
    stack: ["React", "JavaScript", "IMDb API"],
    github: "https://github.com/dachiko1233/dachiko1233",
    demo: "https://velvety-hamster-272285.netlify.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-sm font-semibold tracking-widest text-emerald-500 uppercase mb-4">
          Projects
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Things I've built.
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
          >
            <div className="mb-4">
              {project.status === "In Progress" ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-400/20">
                  <Clock size={10} />
                  In Progress
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-400/20">
                  <CheckCircle2 size={10} />
                  Completed
                </span>
              )}
            </div>

            <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
              {project.name}
            </h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                >
                  <GithubIcon size={14} />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
