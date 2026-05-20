'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 pb-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="space-y-6"
      >
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <MapPin size={14} className="text-emerald-500" />
          <span>Limassol, Cyprus 🇨🇾</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-none text-zinc-900 dark:text-zinc-50">
          Dachi
          <br />
          <span className="text-emerald-500">Maisashvili</span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-zinc-500 dark:text-zinc-400">
          Junior Full-Stack Developer
        </p>

        <p className="max-w-xl text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Self-taught developer building modern web apps with React, Next.js, and Go.
          Previously led construction teams for 7 years — now building software with the same
          discipline.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors"
          >
            View Projects
            <ArrowDown size={14} />
          </a>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
          >
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-5 pt-2">
          <a
            href="https://github.com/dachimari9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:dachimari9@gmail.com"
            aria-label="Email"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
