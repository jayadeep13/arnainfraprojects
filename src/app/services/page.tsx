import type { Metadata } from 'next';
import SectionTag from '@/components/ui/SectionTag';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | ARNA INFRA PROJECTS',
  description:
    'Complete construction services: house planning, architectural design, villa construction, hospital construction, restaurant design, building approvals (DTCP, Municipality, Panchayat), interior design & turnkey projects in Andhra Pradesh.',
};

const categories = [
  {
    tag: 'Architecture & Planning',
    title: 'Design & Planning',
    description:
      'From initial concept sketches to detailed construction drawings — our design team transforms your vision into precise, buildable plans with photo-realistic 3D visualizations.',
    image: '/dp.png',
    color: 'navy' as const,
    services: [
      { icon: '📐', title: 'Conceptual Design & Ideation',          desc: 'Initial ideas, site analysis, and layout concepts tailored to your needs and plot dimensions.' },
      { icon: '🏛️', title: 'Detailed Architectural Drawings',       desc: 'Complete floor plans, elevations, sections, and working drawings for all building types.' },
      { icon: '🖥️', title: '3D Floor Plans & Visualizations',       desc: 'Photo-realistic 3D renders so you see exactly how your building looks before construction.' },
      { icon: '🏗️', title: 'Structural Feasibility Studies',        desc: 'Engineering assessment of soil, load calculations, and RCC structural design specifications.' },
      { icon: '🌿', title: 'Eco-Friendly Design Integration',        desc: 'Sustainable design practices, rainwater harvesting, solar planning, and IGBC-aligned layouts.' },
      { icon: '🛋️', title: 'Interior Design & Space Planning',       desc: 'Transforming interiors with premium materials, custom furniture, and signature aesthetics.' },
      { icon: '📏', title: 'Cost-Effective Material Recommendations', desc: 'Grade A material selection with transparent cost estimates — no hidden surprises.' },
      { icon: '🕌', title: 'Vastu & Cultural Consultation',          desc: 'Vastu Shastra integration and culturally sensitive design for homes and commercial spaces.' },
    ],
  },
  {
    tag: 'Build & Construct',
    title: 'Construction Services',
    description:
      'End-to-end construction excellence — from foundation laying to final finishing — using Grade A certified materials, licensed engineers, and strict quality control at every milestone.',
    image: '/constr.jpg',
    color: 'orange' as const,
    services: [
      { icon: '🏠', title: 'Residential Building Construction',       desc: 'Complete RCC/steel structure construction for individual homes, from foundation to handover.' },
      { icon: '🏡', title: 'Luxury Villa Construction',               desc: 'Bespoke luxury villas with premium finishes, imported materials, and landscape design.' },
      { icon: '🏢', title: 'Apartment & Multi-Storey Construction',   desc: 'G+2 to G+10 apartment complexes — 24-unit to 200-unit projects managed end-to-end.' },
      { icon: '🏬', title: 'Commercial Building Construction',        desc: 'Shopping complexes, offices, and retail spaces built for maximum ROI and longevity.' },
      { icon: '🍽️', title: 'Restaurant Construction & Build-Out',    desc: 'Complete restaurant buildout — kitchen, service areas, dining spaces, and customer zones.' },
      { icon: '🏥', title: 'Hospital & Healthcare Construction',      desc: 'NABH-compliant hospitals, clinics, and diagnostic centers built to international standards.' },
      { icon: '🏢', title: 'Corporate Office Construction',           desc: 'Grade-A office spaces with modern MEP, HVAC, fire safety, and smart building features.' },
    ],
  },
  {
    tag: 'Permissions & Compliance',
    title: 'Building Approvals',
    description:
      'Navigate government approvals with confidence. Our expert documentation team manages the entire DTCP, Municipality, and Panchayat process — you focus on your project, we handle the paperwork.',
    image: '/app.png',
    color: 'navy' as const,
    services: [
      { icon: '📋', title: 'Building Approval Documentation',  desc: 'End-to-end document preparation, file submission, and application tracking for approvals.' },
      { icon: '🏛️', title: 'Municipality Building Sanctions',  desc: 'Municipal Corporation and Town Planning Authority building permit sanctions.' },
      { icon: '🌿', title: 'Panchayat Approvals & NOCs',       desc: 'Gram Panchayat building permissions and No-Objection Certificates for rural projects.' },
      { icon: '📑', title: 'DTCP Layout Approvals',            desc: 'Directorate of Town & Country Planning layout sanctions and site plan approvals.' },
      { icon: '📂', title: 'Complete Project Documentation',   desc: 'Contracts, completion certificates, occupancy certificates, and full handover documentation.' },
    ],
  },
  {
    tag: 'Specialized Work',
    title: 'Renovation & Turnkey',
    description:
      'Beyond standard builds — comprehensive renovation services that modernize spaces while preserving character, and full turnkey project management so you simply receive the keys.',
    image: '/turn.png',
    color: 'orange' as const,
    services: [
      { icon: '🔧', title: 'Home Renovation & Remodelling',   desc: 'Complete renovation of kitchens, bathrooms, living areas, and entire homes with modern finishes.' },
      { icon: '🏢', title: 'Office & Commercial Renovation',  desc: 'Modernizing existing offices and commercial spaces for better productivity and aesthetics.' },
      { icon: '🔑', title: 'Turnkey Project Management',      desc: 'We handle design, approvals, construction, and interior finishing — you receive the finished key.' },
      { icon: '🎨', title: 'Interior Finishing & Fit-Out',    desc: 'Flooring, false ceilings, wall panelling, electrical, plumbing — complete interior execution.' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Header — services.png background */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '75vh',
          backgroundImage: 'url(/services.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark gradient overlay — same as contact/process/projects */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(6,13,36,0.97) 0%, rgba(13,27,74,0.90) 40%, rgba(13,27,74,0.60) 65%, rgba(6,13,36,0.12) 100%)',
          }}
        />

        <div
          className="relative z-10 px-[5%] w-full max-w-7xl mx-auto flex flex-col justify-center"
          style={{ minHeight: '75vh', paddingTop: '120px', paddingBottom: '60px' }}
        >
        <div className="max-w-3xl">
          <SectionTag label="Our Services" variant="dark" />
          <h1 className="font-display font-bold text-white leading-[1.1] mb-5" style={{ fontSize: 'clamp(40px, 5.5vw, 76px)' }}>
            Complete Construction<br />
            <span className="text-orange-brand">Solutions</span>
          </h1>
          <p className="text-[15px] text-white/65 leading-relaxed max-w-xl mb-8 font-body">
            From the first blueprint to the final key — every service your project needs, delivered under one roof by Andhra Pradesh&apos;s most trusted construction firm.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-orange-brand hover:bg-orange-light text-white px-7 py-3.5 rounded-lg text-[13px] font-semibold transition-all font-body"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+918897072777"
              className="flex items-center gap-2 border border-white/30 hover:border-sky-brand text-white px-7 py-3.5 rounded-lg text-[13px] font-semibold transition-all font-body"
            >
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Services — alternating image + content (RP Associates style) */}
      {categories.map((cat, ci) => (
        <section key={ci} className={`py-20 px-[5%] ${ci % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
          <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center`}>

            {/* Image */}
            <div className={ci % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-lg shadow">
                  <p className="text-[11px] font-semibold text-navy-800 uppercase tracking-wide">{cat.tag}</p>
                  <p className="text-[13px] font-bold text-orange-brand">{cat.services.length} Services Available</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={ci % 2 === 1 ? 'lg:order-1' : ''}>
              {/* Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-6 h-1 rounded-full ${cat.color === 'navy' ? 'bg-navy-800' : 'bg-orange-brand'}`} />
                <span className={`text-[11px] font-bold uppercase tracking-[3px] ${cat.color === 'navy' ? 'text-navy-800' : 'text-orange-brand'}`}>
                  {cat.tag}
                </span>
              </div>

              <h2 className={`font-display font-bold mb-3 ${cat.color === 'navy' ? 'text-navy-800' : 'text-orange-brand'}`}
                style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}>
                {cat.title}
              </h2>
              <p className="text-[14px] text-slate-500 leading-relaxed mb-7 font-body">{cat.description}</p>

              {/* Service bullet list */}
              <ul className="space-y-0 mb-8">
                {cat.services.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 py-3 border-b border-slate-100 last:border-0">
                    <span className={`mt-0.5 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm ${
                      cat.color === 'navy' ? 'bg-navy-50 text-navy-800' : 'bg-orange-pale/50 text-orange-brand'
                    }`}>
                      {s.icon}
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-slate-800 font-body">{s.title}</p>
                      <p className="text-[12px] text-slate-500 leading-relaxed font-body">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg text-[13px] font-semibold text-white transition-all font-body ${
                    cat.color === 'navy' ? 'bg-navy-800 hover:bg-navy-900' : 'bg-orange-brand hover:bg-orange-light'
                  }`}
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+918897072777"
                  className="flex items-center gap-2 border-2 border-slate-200 hover:border-navy-800 text-slate-700 hover:text-navy-800 px-6 py-3 rounded-lg text-[13px] font-semibold transition-all font-body"
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-[5%] bg-navy-gradient text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 20px)` }}
        />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 46px)' }}>
            Don&apos;t See What You Need?<br />
            <span className="text-orange-brand">Let&apos;s Talk</span>
          </h2>
          <p className="text-[14px] text-white/60 mb-8 max-w-md mx-auto font-body leading-relaxed">
            We handle custom and specialized construction projects. Contact K. Vidya Sagar directly to discuss your unique requirements.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-orange-brand hover:bg-orange-light text-white px-8 py-3.5 rounded-lg text-[13px] font-semibold transition-all font-body"
            >
              Contact Us Today
            </Link>
            <a
              href="https://wa.me/918897072777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:opacity-90 text-white px-8 py-3.5 rounded-lg text-[13px] font-semibold transition-all font-body"
            >
              <MessageCircle size={14} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
