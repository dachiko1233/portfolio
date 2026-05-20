import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dachi Maisashvili — Junior Full-Stack Developer',
  description:
    'Self-taught developer building modern web apps with React, Next.js, and Go. Based in Limassol, Cyprus.',
  openGraph: {
    title: 'Dachi Maisashvili — Junior Full-Stack Developer',
    description:
      'Self-taught developer building modern web apps with React, Next.js, and Go. Based in Limassol, Cyprus.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
