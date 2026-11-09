'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Backend',
    skills: ['Go', 'Gin', 'REST API design', 'PostgreSQL', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'WordPress',
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Docker', 'Git', 'GitHub', 'Makefile', 'Postman'],
  },
  {
    category: 'Professional',
    skills: [
      'Team leadership',
      'Problem-solving',
      'Communication',
      'Project management',
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-sm font-semibold tracking-widest text-emerald-500 uppercase mb-4">
          Skills
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          My toolkit.
        </h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
          >
            <h4 className="text-xs font-semibold tracking-widest text-emerald-500 uppercase mb-3">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
