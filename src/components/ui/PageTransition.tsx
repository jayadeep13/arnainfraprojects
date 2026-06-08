'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import ArnaLogo from './ArnaLogo';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [barWidth, setBarWidth] = useState(0);
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    setVisible(true);
    setBarWidth(0);

    // Animate loading bar
    const barTimer = setTimeout(() => setBarWidth(100), 50);
    // Fade out overlay after animation completes
    const hideTimer = setTimeout(() => setVisible(false), 900);

    return () => {
      clearTimeout(barTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  return (
    <>
      {children}

      {/* Page transition overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #060d24 0%, #0d1b4a 50%, #1a2f7a 100%)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(1.04)',
          transition: 'opacity 0.45s ease, transform 0.45s ease',
          pointerEvents: visible ? 'all' : 'none',
          gap: 0,
        }}
      >
        {/* Logo */}
        <div
          style={{
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.95)',
            transition: 'transform 0.45s ease',
          }}
        >
          <ArnaLogo size={88} />
        </div>

        {/* Brand name */}
        <div
          style={{
            marginTop: 18,
            color: '#ffffff',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            opacity: 0.92,
          }}
        >
          ARNA INFRA PROJECTS
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 6,
            color: '#29aae1',
            fontFamily: 'Inter, sans-serif',
            fontSize: 11,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            opacity: 0.7,
          }}
        >
          Building Dreams Into Reality
        </div>

        {/* Animated loading bar */}
        <div
          style={{
            marginTop: 28,
            width: 120,
            height: 2,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${barWidth}%`,
              background: 'linear-gradient(90deg, #e8941a, #f0a93c)',
              borderRadius: 2,
              transition: 'width 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </div>
      </div>
    </>
  );
}
