'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { href: '/services/seo', label: 'SEO' },
  { href: '/services/website-development', label: 'Websites' },
  { href: '/services/ads', label: 'Ads' },
  { href: '/academy', label: 'Academy' },
  { href: '/insights', label: 'Insights' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300 ${scrolled
            ? 'border-noir/10 bg-paper/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl'
            : 'border-transparent bg-paper/40 backdrop-blur-md'
          }`}
      >
        <Link
          href="/"
          aria-label="ErnestPath home"
          className="relative block h-12 w-48 shrink-0 md:h-16 md:w-64"
        >
          <Image
            src="/logo.png"
            alt="ErnestPath"
            fill
            priority
            sizes="(max-width: 768px) 192px, 256px"
            className="object-contain object-left"
          />
        </Link>

        <ul
          onMouseLeave={() => setHovered(null)}
          className="hidden items-center gap-1 text-sm font-medium md:flex"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => setHovered(link.href)}
              >
                <Link
                  href={link.href}
                  className={`relative z-10 block px-4 py-2 transition-colors ${active ? 'font-semibold text-noir' : 'text-noir/70 hover:text-noir'
                    }`}
                >
                  {link.label}
                </Link>
                {hovered === link.href && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-full bg-noir/[0.06]"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <Link
          href="/tools/admission-score"
          className="group hidden items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-noir md:inline-flex"
        >
          Free Admission Score
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
          className="text-noir focus:outline-none focus-visible:ring-2 focus-visible:ring-lime md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-4 top-20 rounded-3xl border border-noir/10 bg-paper/95 p-6 shadow-xl backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-noir/80"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-2">
                <Link
                  href="/tools/admission-score"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-noir"
                >
                  Free Admission Score
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}