'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ChevronDown } from 'lucide-react';

const slides = [
  { image: '/villa1.png', label: 'Luxury Villas' },
  { image: '/hos.png', label: 'Healthcare Spaces' },
  { image: '/tow.png', label: 'Commercial Towers' },
  { image: '/inv.png', label: 'Premium Residences' },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      {/* Image carousel */}
      {slides.map((s, i) => (
        <div
          key={s.image}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt={s.label}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-navy-900/50 to-navy-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-navy-900/15" />

      <div className="relative z-10 w-full px-[5%] pt-32 pb-24">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6"
            style={{ animation: 'fadeUp 0.7s 0.1s both', opacity: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-orange-brand animate-pulse" />
            <span className="text-[11px] tracking-[2px] text-white/80 uppercase font-semibold font-body">
              #1 Construction Firm — Andhra Pradesh
            </span>
          </div>

          <h1
            className="font-display font-bold text-white leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', animation: 'fadeUp 0.7s 0.2s both', opacity: 0 }}
          >
            Building Dreams<br />
            <span className="text-orange-brand">Into Reality</span>
          </h1>

          <p
            className="text-[15px] text-white/70 leading-relaxed mb-9 max-w-[460px] font-body"
            style={{ animation: 'fadeUp 0.7s 0.35s both', opacity: 0 }}
          >
            Premium construction &amp; architectural design across Andhra Pradesh — trusted by 500+ families and businesses.
          </p>

          <div
            className="flex flex-wrap gap-3 mb-12"
            style={{ animation: 'fadeUp 0.7s 0.45s both', opacity: 0 }}
          >
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-orange-brand hover:bg-orange-light text-white px-7 py-3.5 rounded-lg text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-brand/30 font-body"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+918897072777"
              className="flex items-center gap-2 border border-white/30 hover:border-sky-brand hover:bg-sky-brand/10 text-white px-7 py-3.5 rounded-lg text-[13px] font-semibold transition-all duration-200 font-body"
            >
              <Phone size={14} /> Call Now
            </a>
          </div>

          {/* Carousel indicators */}
          <div
            className="flex items-center gap-3"
            style={{ animation: 'fadeUp 0.7s 0.55s both', opacity: 0 }}
          >
            {slides.map((s, i) => (
              <button
                key={s.image}
                onClick={() => setActive(i)}
                className="group flex items-center gap-2"
                aria-label={`Show ${s.label}`}
              >
                <span
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-orange-brand' : 'w-4 bg-white/30 group-hover:bg-white/50'
                  }`}
                />
                <span
                  className={`text-[11px] font-body uppercase tracking-wide transition-colors duration-300 hidden sm:inline ${
                    i === active ? 'text-white/85' : 'text-white/40 group-hover:text-white/60'
                  }`}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-[10px] tracking-[3px] uppercase font-body">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
