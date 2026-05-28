'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dachimari9@gmail.com',
    href: 'mailto:dachimari9@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+357 95 195 018',
    href: 'tel:+35795195018',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'https://github.com/dachiko1233',
    href: 'https://github.com/dachiko1233',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/dachi-maisashvili-1ab973383/',
    href: 'https://www.linkedin.com/in/dachi-maisashvili-1ab973383/',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-sm font-semibold tracking-widest text-emerald-500 uppercase mb-4">
          Contact
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">
          Let's talk.
        </h3>
        <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-md">
          Open to junior full-stack roles and freelance opportunities. Reach out
          directly — I respond quickly.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {contactItems.map(({ icon: Icon, label, value, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-emerald-500/40 transition-all duration-200"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-400/10 group-hover:text-emerald-500 transition-colors">
              <Icon size={16} />
            </div>
            <div>
              <p className="text-xs text-zinc-400 dark:text-zinc-500">
                {label}
              </p>
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      ></motion.div>
    </section>
  );
}
