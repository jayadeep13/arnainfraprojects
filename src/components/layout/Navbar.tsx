'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import ArnaLogo from '@/components/ui/ArnaLogo';

const links = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/process',  label: 'Process' },
  { href: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950 shadow-lg shadow-navy-950/50'
          : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between px-[5%] h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <ArnaLogo size={42} />
            <div>
              <div className="font-display font-bold text-[17px] tracking-[2px] text-white leading-tight">
                ARNA <span className="text-orange-brand">INFRA</span>
              </div>
              <div className="text-[9px] tracking-[4px] text-sky-brand uppercase font-semibold">
                Projects
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5 list-none">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-[13px] font-medium transition-colors duration-200 font-body ${
                      active
                        ? 'text-sky-brand'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-sky-brand rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href="tel:+918897072777"
                className="ml-3 flex items-center gap-2 bg-orange-brand hover:bg-orange-light text-white text-[12px] font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 font-body"
              >
                <Phone size={13} />
                8897072777
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950 flex flex-col justify-center items-center gap-5 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xl font-display font-semibold tracking-wide transition-colors ${
              pathname === link.href ? 'text-orange-brand' : 'text-white/80 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="tel:+918897072777"
          className="mt-4 flex items-center gap-2 bg-orange-brand text-white text-sm font-semibold px-8 py-3 rounded-lg"
        >
          <Phone size={14} /> 8897072777
        </a>
      </div>
    </>
  );
}
