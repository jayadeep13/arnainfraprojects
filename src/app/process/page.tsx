import type { Metadata } from 'next';
import SectionTag from '@/components/ui/SectionTag';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Process | ARNA INFRA PROJECTS',
  description:
    'How ARNA INFRA PROJECTS works: from free consultation to handover — our proven 5-step construction process ensures on-time delivery and premium quality every time.',
};

const steps = [
  {
    num: '01', title: 'Free Consultation', icon: '💬', color: 'navy', duration: 'Day 1',
    desc: 'Share your vision and requirements with K. Vidya Sagar and our expert team. We listen, understand your goals, and provide honest advice — completely free with no obligation.',
    points: ['Site visit & assessment', 'Requirement analysis', 'Budget discussion', 'Timeline expectations', 'Initial design ideas'],
  },
  {
    num: '02', title: 'Design & Planning', icon: '📐', color: 'orange', duration: '2–4 Weeks',
    desc: "Our architects create comprehensive plans including floor plans, structural drawings, 3D elevations, and interior concepts. We revise until you're 100% satisfied.",
    points: ['Architectural drawings', '3D elevation renders', 'Structural design', 'Electrical & plumbing layout', 'Interior mood boards'],
  },
  {
    num: '03', title: 'Approvals', icon: '📋', color: 'navy', duration: '2–8 Weeks',
    desc: 'We handle all approvals on your behalf — Municipality, Panchayat, DTCP, and any regulatory clearances. We know the system; we get it done efficiently.',
    points: ['Document preparation', 'Municipality submission', 'DTCP application', 'Panchayat NOC', 'Approval tracking & follow-up'],
  },
  {
    num: '04', title: 'Construction', icon: '🏗️', color: 'orange', duration: 'As per schedule',
    desc: 'With approvals secured, our team begins construction using Grade-A materials. We follow approved designs exactly and provide regular progress updates.',
    points: ['Foundation & structural work', 'RCC frame construction', 'Brickwork & plastering', 'MEP installations', 'Tiling, painting & finishing'],
  },
  {
    num: '05', title: 'Handover', icon: '🔑', color: 'navy', duration: 'On scheduled date',
    desc: 'Final quality inspection, snagging, interior completion, and your project is handed over on the scheduled date with a complete walkthrough.',
    points: ['Final quality inspection', 'Defect remediation', 'Occupancy certificate', 'Utility connections', 'Walkthrough & handover'],
  },
];

const faq = [
  { q: 'How long does a complete house construction take?', a: 'A standard individual house (1200–1800 sqft) typically takes 8–12 months. Larger villas may take 12–18 months. We provide a detailed project-specific timeline during consultation.' },
  { q: 'Do you handle building approvals for rural areas?', a: 'Yes — we handle Panchayat approvals for rural areas, Municipality approvals for urban areas, and DTCP approvals for layouts. We cover all approval types across Andhra Pradesh.' },
  { q: 'What is a turnkey project?', a: 'A turnkey project means we manage everything: design, approvals, construction, and interior finishing. You give us your requirements and receive a completed, move-in ready building.' },
  { q: 'Can I make changes during construction?', a: 'Minor modifications are manageable. Major structural changes may affect timelines and cost. We recommend finalizing all design details before construction starts.' },
  { q: 'Do you provide a construction warranty?', a: 'Yes — we provide a 1-year defect liability period post-handover. Structural defects are our responsibility during this period.' },
  { q: 'How do I track construction progress?', a: 'We provide weekly progress reports, milestone photographs, and allow scheduled site visits. Our project manager is always reachable on WhatsApp for any queries.' },
];

export default function ProcessPage() {
  return (
    <>
      {/* Header — process.png background */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '75vh',
          backgroundImage: 'url(/process.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark gradient overlay — strong left, fades right */}
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
            <SectionTag label="Our Process" variant="dark" />
            <h1
              className="font-display font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 76px)' }}
            >
              How We Build Your<br />
              <span className="text-orange-brand">Dream Project</span>
            </h1>
            <p className="text-[15px] text-white/65 leading-relaxed max-w-xl font-body">
              A transparent, structured 5-step process that has delivered 500+ projects on time and to the highest quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border ${
                step.color === 'navy' ? 'border-navy-100' : 'border-orange-pale/50'
              } hover:shadow-lg transition-all group`}
            >
              {/* Number side */}
              <div className={`p-10 flex items-center gap-8 ${
                step.color === 'navy' ? 'bg-navy-50 group-hover:bg-navy-100' : 'bg-orange-pale/20 group-hover:bg-orange-pale/35'
              } transition-colors ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`font-display font-bold text-[80px] leading-none select-none opacity-20 ${
                  step.color === 'navy' ? 'text-navy-800' : 'text-orange-brand'
                }`}>
                  {step.num}
                </div>
                <div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h2 className={`font-display font-bold text-2xl mb-1 ${
                    step.color === 'navy' ? 'text-navy-800' : 'text-orange-brand'
                  }`}>{step.title}</h2>
                  <p className={`text-[11px] tracking-[2px] uppercase font-semibold font-body ${
                    step.color === 'navy' ? 'text-navy-600' : 'text-orange-brand/70'
                  }`}>Timeline: {step.duration}</p>
                </div>
              </div>

              {/* Content side */}
              <div className={`p-10 bg-white ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-[14px] text-slate-500 leading-relaxed mb-6 font-body">{step.desc}</p>
                <ul className="space-y-2">
                  {step.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-3 text-[13px] text-slate-600 font-body">
                      <CheckCircle size={15} className={step.color === 'navy' ? 'text-navy-700' : 'text-orange-brand'} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionTag label="FAQ" className="justify-center" />
            <h2 className="font-display font-bold text-navy-900" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
              Frequently Asked<br /><span className="text-sky-brand">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faq.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-100 hover:border-navy-200 transition-colors overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none gap-4">
                  <span className="text-[15px] font-semibold text-slate-900 group-open:text-navy-800 transition-colors font-body">{f.q}</span>
                  <span className="text-navy-700 text-xl font-light flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-[13px] text-slate-500 leading-relaxed border-t border-slate-100 pt-4 font-body">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5%] bg-navy-gradient text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 20px)` }}
        />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 46px)' }}>
            Ready to Begin<br /><span className="text-orange-brand">Step One?</span>
          </h2>
          <p className="text-[14px] text-white/60 mb-8 font-body">Book your free consultation with K. Vidya Sagar today.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="flex items-center gap-2 bg-orange-brand hover:bg-orange-light text-white px-8 py-3.5 rounded-lg text-[13px] font-semibold transition-all font-body">
              Book Free Consultation
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
