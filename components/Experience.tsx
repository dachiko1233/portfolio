'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const entries = [
  {
    role: 'Web Developer',
    type: 'Think Positive New Media',
    typeStyle: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 border-emerald-200 dark:border-emerald-400/20',
    dotStyle: 'bg-emerald-500',
    period: 'Sep 2025 – Dec 2025',
    location: 'Limassol, Cyprus',
    points: [
      'Applied accessibility practices and UI/UX improvements to existing websites, identifying and fixing usability issues for end users',
      'Developed and maintained responsive websites with JavaScript, HTML, and CSS, ensuring consistent layout and behaviour across screen sizes and devices',
      'Collaborated with designers and team members to deliver visually consistent, functional WordPress websites that met design requirements',
    ],
  },
  {
    role: 'Site Supervisor / Head Construction Worker',
    type: 'Construction Projects',
    typeStyle: 'text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700',
    dotStyle: 'bg-zinc-400 dark:bg-zinc-600',
    period: 'Aug 2019 – Sep 2025',
    location: 'Limassol, Cyprus',
    points: [
      'Carried out daily quality control across multiple projects, checking work against specifications and catching errors before handover',
      'Led a team of 7–8 workers, coordinating daily tasks and timelines under tight deadlines and changing conditions',
      'Communicated with clients, engineers, and subcontractors to make sure specifications were met on time and on budget',
      'Trained and mentored junior workers, improving team efficiency and reducing errors; managed safety compliance on site',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-sm font-semibold tracking-widest text-emerald-500 uppercase mb-4">
          Experience
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Where I've been.
        </h3>
      </motion.div>

      <div className="relative pl-6 border-l border-zinc-200 dark:border-zinc-800 space-y-10">
        {entries.map((entry, i) => (
          <motion.div
            key={entry.role}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div
              className={`absolute -left-[25px] w-3 h-3 rounded-full ring-4 ring-white dark:ring-zinc-950 ${entry.dotStyle}`}
            />
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {entry.role}
              </h4>
              <span
                className={`text-xs px-2 py-0.5 rounded-full border font-medium ${entry.typeStyle}`}
              >
                {entry.type}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500 mb-3">
              <Calendar size={12} />
              <span>{entry.period}</span>
              {entry.location && (
                <>
                  <span>·</span>
                  <span>{entry.location}</span>
                </>
              )}
            </div>
            <ul className="space-y-1.5">
              {entry.points.map((point) => (
                <li key={point} className="text-sm text-zinc-500 dark:text-zinc-400">
                  → {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
