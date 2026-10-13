'use client';

import { motion } from 'framer-motion';

const languages = [
  { name: 'Georgian', level: 'Native' },
  { name: 'Greek', level: 'Fluent' },
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
          From building things
          <br />
          to breaking them — on purpose.
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed">
            <p>
              I'm a detail-oriented web developer moving into manual software quality assurance. I
              bring hands-on knowledge of how web applications are built, where they break, and how
              to verify them — testing for functionality, responsiveness, accessibility, and
              usability against requirements.
            </p>
            <p>
              My technical background means I speak the same language as engineers. I design and
              exercise REST APIs through Postman, model data and write SQL queries in PostgreSQL,
              and have shipped full-stack applications with React, Next.js, and Go.
            </p>
            <p>
              Before software, I spent six years leading onsite construction teams — daily quality
              control, catching errors before handover, and clear communication with clients and
              engineers. That discipline is exactly what good QA runs on.
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
