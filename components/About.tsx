'use client';

import { motion } from 'framer-motion';

const languages = [
  { name: 'Georgian', level: 'Native' },
  { name: 'Greek', level: 'Native' },
  { name: 'English', level: 'C1' },
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
          From construction sites
          <br />
          to codebases.
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed">
            <p>
              For 7 years I worked as a Site Supervisor in the construction industry across Cyprus
              and Georgia, managing teams of 10+ workers and taking full accountability for
              complex, high-stakes projects. That experience taught me to think systemically,
              communicate clearly, and deliver under pressure.
            </p>
            <p>
              Two years ago I made a deliberate pivot into software development. What started as
              curiosity quickly became a passion. I've since built full-stack applications with
              React, Next.js, and Go — treating every project with the same discipline I brought
              to construction.
            </p>
            <p>
              I thrive in environments where precision matters and where there's always something
              new to learn.
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
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">· {level}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
