import Link from 'next/link';
import SectionTag from '@/components/ui/SectionTag';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, CheckCircle } from 'lucide-react';

const featured = [
  {
    icon: '📐',
    title: 'Architectural Design',
    desc: 'Award-quality floor plans, 3D elevations, structural drawings, and interior visualizations for all building types.',
    points: ['Detailed floor plans', '3D elevation renders', 'Structural engineering', 'Interior design'],
    color: 'navy',
  },
  {
    icon: '🏡',
    title: 'Villa & Home Construction',
    desc: 'Luxury villas and residential homes built with Grade A materials, certified engineers, and unmatched craftsmanship.',
    points: ['RCC structure construction', 'Premium materials', 'On-time delivery', 'Quality guarantee'],
    color: 'orange',
  },
  {
    icon: '🏥',
    title: 'Hospital Construction',
    desc: 'Specialized healthcare facilities designed and built to NABH standards with patient flow optimization.',
    points: ['NABH-compliant design', 'OT & ICU suites', 'Regulatory clearances', 'Medical gas piping'],
    color: 'navy',
  },
  {
    icon: '🏗️',
    title: 'Apartment Projects',
    desc: 'Multi-storey apartment complexes from G+2 to G+10 — complete project management from site to handover.',
    points: ['Multi-storey complexes', 'Covered parking', 'Common amenities', 'RERA compliance'],
    color: 'orange',
  },
  {
    icon: '📋',
    title: 'Building Approvals',
    desc: 'DTCP, Municipality & Panchayat — we handle every approval, clearance and documentation process for you.',
    points: ['DTCP approvals', 'Municipality sanctions', 'Panchayat NOCs', 'Fast-track processing'],
    color: 'navy',
  },
  {
    icon: '🔑',
    title: 'Turnkey Projects',
    desc: 'We manage everything from design to keys — design, approvals, construction, and interior finishing.',
    points: ['Single point contact', 'End-to-end delivery', 'Transparent billing', 'Move-in ready'],
    color: 'orange',
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-pad" style={{ background: 'linear-gradient(135deg, #eef6fd 0%, #f4f0fb 50%, #fef4ec 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionTag label="Our Services" />
            <h2 className="font-display font-bold text-navy-900" style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}>
              What We Build &amp;<br />
              <span className="text-sky-brand">How We Help You</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-[13px] font-semibold text-navy-800 hover:text-orange-brand border-b-2 border-navy-800/30 hover:border-orange-brand pb-0.5 transition-all self-start md:self-auto font-body"
          >
            View All Services <ArrowRight size={14} />
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((s, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 80}>
              <Link
                href="/services"
                className="group bg-white rounded-2xl border border-slate-100 hover:border-navy-200 hover:shadow-lg transition-all duration-300 p-7 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 ${
                  s.color === 'navy' ? 'bg-navy-50' : 'bg-orange-pale/40'
                }`}>
                  {s.icon}
                </div>
                <h3 className="font-display font-bold text-[18px] text-slate-900 mb-2 group-hover:text-navy-800 transition-colors">
                  {s.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-5 font-body flex-1">{s.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-[12px] text-slate-600 font-body">
                      <CheckCircle size={13} className={s.color === 'navy' ? 'text-navy-600' : 'text-orange-brand'} />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className={`flex items-center gap-1.5 text-[12px] font-semibold ${
                  s.color === 'navy' ? 'text-navy-700' : 'text-orange-brand'
                } group-hover:gap-2.5 transition-all font-body`}>
                  Learn More <ArrowRight size={12} />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
