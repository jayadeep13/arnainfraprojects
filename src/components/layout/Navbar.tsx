'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import ArnaLogo from '@/components/ui/ArnaLogo';

const links = [
  { href: '/',         label: 'Home',     num: '01' },
  { href: '/about',    label: 'About',    num: '02' },
  { href: '/services', label: 'Services', num: '03' },
  { href: '/projects', label: 'Projects', num: '04' },
  { href: '/process',  label: 'Process',  num: '05' },
  { href: '/contact',  label: 'Contact',  num: '06' },
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-navy-950/50'
          : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between px-[5%] h-[70px]">
          <Link href="/" className="flex items-center gap-3">
            <ArnaLogo size={42} />
            <div>
              <div className="font-display font-bold text-[17px] tracking-[2px] text-white leading-tight">
                ARNA <span className="text-orange-brand">INFRA</span>
              </div>
              <div className="text-[9px] tracking-[4px] text-sky-brand uppercase font-semibold">Projects</div>
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
                      active ? 'text-sky-brand' : 'text-white/70 hover:text-white'
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
                <Phone size={13} /> 8897072777
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className="lg:hidden fixed inset-0 z-40 transition-all duration-300"
        style={{
          background: 'rgba(6, 13, 36, 0.7)',
          backdropFilter: 'blur(4px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      />

      {/* Slide-in drawer */}
      <div
        className="lg:hidden fixed top-0 right-0 bottom-0 z-50 flex flex-col"
        style={{
          width: 'min(82vw, 320px)',
          background: 'linear-gradient(160deg, #0a1535 0%, #0d1b4a 60%, #101f52 100%)',
          borderLeft: '1px solid rgba(255,255,255,0.07)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.38s cubic-bezier(0.4, 0, 0.2, 1), visibility 0s linear ' + (menuOpen ? '0s' : '0.38s'),
          visibility: menuOpen ? 'visible' : 'hidden',
          boxShadow: menuOpen ? '-12px 0 48px rgba(6,13,36,0.6)' : 'none',
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-[70px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5">
            <ArnaLogo size={36} />
            <div>
              <div className="font-display font-bold text-[13px] tracking-[2px] text-white leading-tight">
                ARNA <span className="text-orange-brand">INFRA</span>
              </div>
              <div className="text-[8px] tracking-[3px] text-sky-brand uppercase font-semibold">Projects</div>
            </div>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <p className="text-[9px] tracking-[3px] uppercase text-white/25 font-semibold font-body mb-3 px-2">Navigation</p>
          <ul className="space-y-1 list-none">
            {links.map((link, i) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between px-3 py-3.5 rounded-xl group transition-all duration-200"
                    style={{
                      background: active ? 'rgba(232, 148, 26, 0.12)' : 'transparent',
                      border: active ? '1px solid rgba(232,148,26,0.25)' : '1px solid transparent',
                      opacity: menuOpen ? 1 : 0,
                      transform: menuOpen ? 'translateX(0)' : 'translateX(18px)',
                      transition: `opacity 0.32s ease ${80 + i * 45}ms, transform 0.32s ease ${80 + i * 45}ms, background 0.2s`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[9px] font-bold" style={{ color: active ? '#e8941a' : 'rgba(255,255,255,0.2)' }}>
                        {link.num}
                      </span>
                      <span
                        className="font-display font-semibold text-[15px]"
                        style={{ color: active ? '#e8941a' : 'rgba(255,255,255,0.82)' }}
                      >
                        {link.label}
                      </span>
                    </div>
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: active ? '#e8941a' : 'rgba(255,255,255,0.2)' }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div
          className="px-4 py-5"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
            transition: `opacity 0.35s ease 380ms, transform 0.35s ease 380ms`,
          }}
        >
          <a
            href="tel:+918897072777"
            className="flex items-center justify-center gap-2 w-full font-semibold text-white text-[13px] rounded-xl py-3.5 font-body transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{ background: 'linear-gradient(90deg, #e8941a, #f0a93c)' }}
          >
            <Phone size={14} />
            Call: 8897072777
          </a>
          <p className="text-center text-[10px] text-white/25 mt-3 font-body tracking-wide">
            #1 Construction Firm · Andhra Pradesh
          </p>
        </div>
      </div>
    </>
  );
}
