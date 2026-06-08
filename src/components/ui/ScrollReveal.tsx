'use client';
import { useEffect, useRef, useState, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const transforms: Record<string, string> = {
  up:    'translateY(48px)',
  down:  'translateY(-48px)',
  left:  'translateX(-48px)',
  right: 'translateX(48px)',
  fade:  'none',
  scale: 'scale(0.92)',
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 680,
  threshold = 0.12,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? (direction === 'scale' ? 'scale(1)' : 'none') : transforms[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
