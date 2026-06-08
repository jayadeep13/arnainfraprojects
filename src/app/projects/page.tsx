import type { Metadata } from 'next';
import SectionTag from '@/components/ui/SectionTag';
import Link from 'next/link';
import ProjectsGallery from '@/components/sections/ProjectsGallery';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Projects | ARNA INFRA PROJECTS',
  description:
    '500+ completed projects: luxury villas, apartments, hospitals, restaurants, commercial buildings and corporate offices across Hanuman Junction, Vijayawada and Andhra Pradesh.',
};

export default function ProjectsPage() {
  return (
    <>
      {/* Header — projects.png background */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '75vh',
          backgroundImage: 'url(/projects.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(6,13,36,0.97) 0%, rgba(13,27,74,0.90) 40%, rgba(13,27,74,0.60) 65%, rgba(6,13,36,0.12) 100%)',
          }}
        />
        {/* Content */}
        <div
          className="relative z-10 px-[5%] w-full max-w-7xl mx-auto flex flex-col justify-center"
          style={{ minHeight: '75vh', paddingTop: '120px', paddingBottom: '60px' }}
        >
          <div className="max-w-[620px]">
            <SectionTag label="Our Projects" variant="dark" />
            <h1
              className="font-display font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 76px)' }}
            >
              Our Work Speaks<br />
              <span className="text-sky-brand">For Itself</span>
            </h1>
            <p className="text-[15px] text-white/65 leading-relaxed max-w-xl font-body">
              Over 500 completed projects across Andhra Pradesh — each one a testament to our commitment to premium quality and design excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-white px-[5%] py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { num: '340+', label: 'Total Projects',           icon: '🏗️', color: 'navy' },
            { num: '200+', label: 'Residential',              icon: '🏡', color: 'orange' },
            { num: '120+', label: 'Commercial',               icon: '🏢', color: 'navy' },
            { num: '5+',  label: 'Hospitals & Institutions', icon: '🏥', color: 'orange' },
          ].map((s, i) => (
            <div key={i} className={`rounded-2xl p-6 text-center border ${
              s.color === 'navy' ? 'bg-navy-50 border-navy-100' : 'bg-orange-pale/20 border-orange-pale/50'
            }`}>
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className={`font-display font-bold text-3xl mb-1 ${s.color === 'navy' ? 'text-navy-800' : 'text-orange-brand'}`}>{s.num}</div>
              <div className="text-[12px] font-semibold text-slate-500 font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <div className="bg-stone-50 pt-4">
        <ProjectsGallery />
      </div>

      {/* CTA */}
      <section className="py-20 px-[5%] bg-navy-gradient text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 20px)` }}
        />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 46px)' }}>
            Want Your Project<br /><span className="text-orange-brand">Featured Here?</span>
          </h2>
          <p className="text-[14px] text-white/60 mb-8 font-body max-w-md mx-auto">
            Let&apos;s create something extraordinary together. Contact us for a free consultation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="flex items-center gap-2 bg-orange-brand hover:bg-orange-light text-white px-8 py-3.5 rounded-lg text-[13px] font-semibold transition-all font-body">
              Start Your Project
            </Link>
            <a href="tel:+918897072777" className="flex items-center gap-2 border border-white/30 hover:border-sky-brand text-white px-8 py-3.5 rounded-lg text-[13px] font-semibold transition-all font-body">
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
