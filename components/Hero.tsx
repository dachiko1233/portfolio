'use client';

import Image from 'next/image';

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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          <div>
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-5">
              <MapPin size={14} className="text-emerald-500" />
              <span>Limassol, Cyprus 🇨🇾</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none text-zinc-900 dark:text-zinc-50">
              Dachi
              <br />
              <span className="text-emerald-500">Maisashvili</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-500 dark:text-zinc-400 mt-3">
              Junior Full-Stack Developer
            </p>

            <p className="max-w-xl text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mt-4">
              Self-taught developer building modern web apps with React,
              Next.js, and Go. Previously led construction teams for 7 years —
              now building software with the same discipline.
            </p>

            <div className="flex flex-wrap gap-3 pt-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors"
              >
                View Projects
                <ArrowDown size={14} />
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center order-first md:order-last">
            <Image
              src="/dachi.jpeg"
              alt="Dachi Maisashvili"
              width={300}
              height={300}
              className="rounded-4xl w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover"
            />
          </div>
        </div>

        <div className="flex items-center gap-5 pt-2">
          <a
            href="https://github.com/dachiko1233"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/dachi-maisashvili-1ab973383/"
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
