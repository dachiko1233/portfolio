export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          © 2026 Dachi Maisashvili. All rights reserved.
        </p>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">
          Built with{' '}
          <span className="text-zinc-600 dark:text-zinc-300">Next.js & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
