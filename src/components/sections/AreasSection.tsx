import SectionTag from '@/components/ui/SectionTag';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MapPin, CheckCircle } from 'lucide-react';

const areas = [
  { name: 'Hanuman Junction', tag: 'Headquarters',       primary: true  },
  { name: 'Vijayawada',       tag: 'Major Hub',          primary: true  },
  { name: 'Gudivada',         tag: 'Active Service',     primary: false },
  { name: 'Gannavaram',       tag: 'Active Service',     primary: false },
  { name: 'Eluru',            tag: 'Active Service',     primary: false },
  { name: 'Machilipatnam',    tag: 'Active Service',     primary: false },
  { name: 'Krishna District', tag: 'Full Coverage',      primary: true  },
  { name: 'Andhra Pradesh',   tag: 'Pan-State Projects', primary: false },
];

export default function AreasSection() {
  return (
    <section className="section-pad bg-stone-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

        <ScrollReveal direction="left" className="flex-1">
          <SectionTag label="Service Areas" />
          <h2 className="font-display font-bold text-navy-900 mb-4" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
            Serving Across<br />
            <span className="text-orange-brand">Andhra Pradesh</span>
          </h2>
          <p className="text-[14px] text-slate-500 leading-relaxed mb-8 max-w-md font-body">
            World-class construction and architectural services throughout the Krishna District and all of Andhra Pradesh.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {areas.map((a, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all cursor-default ${
                  a.primary
                    ? 'bg-navy-50 border-navy-200 hover:border-navy-400'
                    : 'bg-white border-slate-100 hover:border-navy-200'
                }`}
              >
                <MapPin size={15} className={a.primary ? 'text-navy-700' : 'text-slate-400'} />
                <div>
                  <p className="text-[14px] font-semibold text-slate-800 font-body">{a.name}</p>
                  <p className={`text-[10px] tracking-[1px] uppercase font-bold font-body ${a.primary ? 'text-navy-700' : 'text-slate-400'}`}>
                    {a.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {[
              'Free site visit across all service areas',
              'Same quality standards everywhere we build',
              'Local material sourcing for faster delivery',
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-[13px] text-slate-600 font-body">
                <CheckCircle size={14} className="text-navy-700 flex-shrink-0" />
                {t}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={150} className="flex-1 max-w-[420px]">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col items-center">
            <svg viewBox="0 0 360 340" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[300px]">
              <path
                d="M70,40 L280,40 L320,100 L310,170 L275,240 L210,315 L145,305 L85,260 L50,195 L38,120 Z"
                fill="rgba(26,47,122,0.08)"
                stroke="rgba(26,47,122,0.35)"
                strokeWidth="1.5"
              />
              <path
                d="M60,180 Q110,160 160,170 Q210,180 260,165"
                fill="none"
                stroke="rgba(41,170,225,0.4)"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <circle cx="165" cy="165" r="12" fill="rgba(26,47,122,0.9)" />
              <circle cx="165" cy="165" r="22" fill="rgba(26,47,122,0.15)" />
              <circle cx="165" cy="165" r="34" fill="rgba(26,47,122,0.05)" />
              <text x="180" y="162" fill="rgba(30,41,59,0.9)" fontSize="11" fontFamily="Inter,sans-serif" fontWeight="600">Hanuman Jn.</text>
              <circle cx="215" cy="135" r="7" fill="rgba(232,148,26,0.85)" />
              <text x="225" y="139" fill="rgba(30,41,59,0.75)" fontSize="10" fontFamily="Inter,sans-serif">Vijayawada</text>
              <circle cx="128" cy="150" r="5" fill="rgba(41,170,225,0.7)" />
              <text x="88" y="147" fill="rgba(30,41,59,0.6)" fontSize="9" fontFamily="Inter,sans-serif">Gudivada</text>
              <circle cx="235" cy="158" r="5" fill="rgba(41,170,225,0.6)" />
              <circle cx="175" cy="200" r="5" fill="rgba(41,170,225,0.6)" />
              <text x="182" y="203" fill="rgba(30,41,59,0.55)" fontSize="9" fontFamily="Inter,sans-serif">Eluru</text>
              <circle cx="145" cy="230" r="5" fill="rgba(41,170,225,0.6)" />
              <text x="152" y="233" fill="rgba(30,41,59,0.5)" fontSize="9" fontFamily="Inter,sans-serif">Machilipatnam</text>
              <text x="180" y="30" fill="rgba(26,47,122,0.7)" fontSize="11" fontFamily="Inter,sans-serif" textAnchor="middle" letterSpacing="3">KRISHNA DISTRICT</text>
              <text x="180" y="330" fill="rgba(30,41,59,0.4)" fontSize="10" fontFamily="Inter,sans-serif" textAnchor="middle">Andhra Pradesh, India</text>
            </svg>
            <p className="text-[11px] tracking-[2px] uppercase text-navy-700 font-bold mt-4 font-body">
              Our Primary Service Region
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
