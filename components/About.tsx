'use client';

import { motion } from 'framer-motion';

const languages = [
  { name: 'Georgian', level: 'Native' },
  { name: 'Greek', level: 'Fluent' },
  { name: 'English', level: 'Fluent' },
  { name: 'Russian', level: 'B1' },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-semibold tracking-widest text-emerald-500 uppercase mb-4">
          About
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-10">
          I build full-stack products,
          <br />
          end to end.
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed">
            <p>
              I'm a full-stack developer specialising in Go (Gin) on the backend and React/Next.js
              with TypeScript on the frontend. I design REST APIs, model data and write SQL in
              PostgreSQL, and containerise my stacks with Docker.
            </p>
            <p>
              On the frontend I build responsive, accessible, polished web interfaces — and I've
              shipped live products end-to-end, from the API layer to the deployed dashboard. I care
              about details: consistent layouts across devices, usability, and clean code.
            </p>
            <p>
              Before software, I spent six years leading onsite construction teams — daily quality
              control, catching errors before handover, and clear communication with clients and
              engineers. That discipline carries straight into how I build and ship software.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {languages.map(({ name, level }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                >
                  {name}
                  {level && <span className="text-xs text-zinc-400 dark:text-zinc-500">· {level}</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
