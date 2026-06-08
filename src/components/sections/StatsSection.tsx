'use client';
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const stats = [
  { num: 500, suffix: '+', label: 'Projects Completed',   desc: 'Delivered across AP',              icon: '🏗️' },
  { num: 100, suffix: '%', label: 'Client Satisfaction',  desc: 'Zero compromise on quality',        icon: '⭐' },
  { num: 10,  suffix: '+', label: 'Years of Experience',  desc: 'Trusted since 2014',                icon: '🏆' },
  { num: 50,  suffix: '+', label: 'Expert Team Members',  desc: 'Skilled & certified professionals', icon: '👷' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1800;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(step);
          else setCount(target);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section id="stats" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" className="text-center mb-12">
          <p className="text-[11px] tracking-[3px] uppercase text-orange-brand font-bold mb-2 font-body">Our Numbers</p>
          <h2 className="font-display font-bold text-navy-900" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
            Trusted by Hundreds of<br />
            <span className="text-sky-brand">Families Across Andhra Pradesh</span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 100}>
              <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-7 text-center hover:shadow-md hover:border-orange-brand/30 transition-all group">
                <div className="text-3xl mb-4">{s.icon}</div>
                <div className="font-display font-bold text-[48px] leading-none text-navy-900 mb-1 group-hover:text-orange-brand transition-colors">
                  <Counter target={s.num} suffix={s.suffix} />
                </div>
                <div className="text-[13px] font-semibold text-slate-700 mb-1 font-body">{s.label}</div>
                <div className="text-[11px] text-slate-400 font-body">{s.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
