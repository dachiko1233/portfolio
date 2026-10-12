'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const items = [
  {
    title: 'Udemy',
    detail: 'React, JavaScript, and modern web development',
  },
  {
    title: 'freeCodeCamp',
    detail: 'HTML, CSS, JavaScript, and full-stack fundamentals',
  },
  {
    title: 'Self-directed projects',
    detail: 'Deployable code shipped on GitHub',
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-sm font-semibold tracking-widest text-emerald-500 uppercase mb-4">
          Education
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Always learning.
        </h3>
        <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-md">
          Continuous, self-directed learning — turning courses into projects with
          deployable code.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-400/10 text-emerald-500 mb-4">
              <GraduationCap size={16} />
            </div>
            <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
              {item.title}
            </h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
