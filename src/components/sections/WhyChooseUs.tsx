import SectionTag from '@/components/ui/SectionTag';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { CheckCircle } from 'lucide-react';

const reasons = [
  { icon: '🏛️', title: 'Design Excellence',    desc: 'Award-winning architectural designs crafted for lasting beauty and structural integrity. Every line is deliberate.' },
  { icon: '⚡', title: 'On-Time Delivery',      desc: 'Strict project timelines with milestone tracking — we have delivered 500+ projects on schedule, every time.' },
  { icon: '🔐', title: 'End-to-End Approvals', desc: 'DTCP, Municipality & Panchayat — we handle all documentation and regulatory clearances so you don\'t have to.' },
  { icon: '💎', title: 'Premium Materials',    desc: 'Only Grade A materials from trusted suppliers. We never cut corners on quality at any stage of your project.' },
  { icon: '👷', title: 'Expert Workforce',     desc: '50+ skilled engineers, architects, and craftsmen with specialized domain expertise and years of field experience.' },
  { icon: '💰', title: 'Transparent Pricing',  desc: 'Detailed project estimates with no hidden costs. You know exactly what you\'re paying for at every stage.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" className="text-center mb-14">
          <SectionTag label="Why Choose Us" className="justify-center" />
          <h2 className="font-display font-bold text-navy-900" style={{ fontSize: 'clamp(26px, 3.5vw, 46px)' }}>
            Why 500+ Clients Trust<br />
            <span className="text-orange-brand">ARNA INFRA PROJECTS</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {reasons.map((r, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 80}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-navy-200 hover:shadow-lg transition-all duration-300 group h-full">
                <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-navy-800 group-hover:scale-105 transition-all">
                  <span>{r.icon}</span>
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2 group-hover:text-navy-800 transition-colors font-display">
                  {r.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-body">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={100}>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-navy-gradient p-10 flex flex-col justify-center">
                <p className="text-[11px] tracking-[3px] uppercase text-orange-brand font-bold mb-3 font-body">Founder & Director</p>
                <h3 className="font-display font-bold text-white text-3xl mb-4">K. Vidya Sagar</h3>
                <p className="text-[14px] text-white/65 leading-relaxed font-body">
                  With over <strong className="text-white">10 years</strong> of experience in construction and architectural design,
                  K. Vidya Sagar founded ARNA INFRA PROJECTS with a mission to deliver
                  <strong className="text-white"> premium construction at honest prices</strong> to the people of Hanuman Junction and Andhra Pradesh.
                </p>
                <div className="flex gap-4 mt-6">
                  <div className="border border-white/20 rounded-lg px-4 py-2 text-center">
                    <p className="font-bold text-white text-xl font-display">500+</p>
                    <p className="text-[10px] text-white/50 font-body">Projects</p>
                  </div>
                  <div className="border border-white/20 rounded-lg px-4 py-2 text-center">
                    <p className="font-bold text-orange-brand text-xl font-display">10+</p>
                    <p className="text-[10px] text-white/50 font-body">Years</p>
                  </div>
                  <div className="border border-white/20 rounded-lg px-4 py-2 text-center">
                    <p className="font-bold text-sky-brand text-xl font-display">100%</p>
                    <p className="text-[10px] text-white/50 font-body">Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <h4 className="font-display font-bold text-navy-800 text-xl mb-6">What Makes Us Different</h4>
                <ul className="space-y-4">
                  {[
                    'DTCP Certified documentation & approval experts',
                    'Grade A materials — no compromise on quality',
                    'In-house architects, engineers & craftsmen',
                    'Serving all of Andhra Pradesh since 2014',
                    '1-year defect liability on all completed projects',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-body text-[14px] text-slate-600">
                      <CheckCircle size={17} className="text-navy-700 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
