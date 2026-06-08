import type { Metadata } from 'next';
import SectionTag from '@/components/ui/SectionTag';
import ContactForm from '@/components/sections/ContactForm';
import { Phone, MapPin, Clock, MessageCircle, PenTool, LayoutPanelLeft, HardHat, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | ARNA INFRA PROJECTS',
  description:
    'Contact ARNA INFRA PROJECTS — K. Vidya Sagar, Hanuman Junction. Call 8897072777 or 9491869866 for free consultation on construction, architectural design, and building approvals.',
};

const heroServices = [
  { icon: PenTool,         label: 'Architectural\nDesign' },
  { icon: LayoutPanelLeft, label: 'Planning &\nVisualization' },
  { icon: HardHat,         label: 'Project\nManagement' },
  { icon: Building2,       label: 'End-to-End\nConstruction' },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero — contact.png full-width background ── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '82vh',
          backgroundImage: 'url(/contact.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(6,13,36,0.96) 0%, rgba(13,27,74,0.88) 38%, rgba(13,27,74,0.58) 62%, rgba(6,13,36,0.10) 100%)',
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 px-[5%] w-full max-w-7xl mx-auto flex flex-col justify-between"
          style={{ minHeight: '82vh', paddingTop: '110px', paddingBottom: '48px' }}
        >
          {/* Heading */}
          <div className="max-w-[620px]">
            <SectionTag label="Contact Us" variant="dark" />
            <h1
              className="font-display font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 78px)' }}
            >
              Let&apos;s Build Something<br />
              <span className="text-sky-brand">Extraordinary</span>
            </h1>
            <p className="text-[15px] text-white/70 leading-relaxed mb-2 font-body max-w-lg">
              Reach out to K. Vidya Sagar for a completely free consultation.
            </p>
            <p className="text-[15px] text-white/70 leading-relaxed font-body">
              No pressure — just an expert conversation about your project vision.
            </p>
          </div>

          {/* 4 icons row */}
          <div className="flex flex-wrap items-center gap-0 mt-12">
            {heroServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center gap-3 px-8 py-3">
                    <Icon size={34} className="text-sky-brand" strokeWidth={1.4} />
                    <p className="text-[12px] text-white/75 text-center font-body leading-snug whitespace-pre-line font-medium tracking-wide">
                      {s.label}
                    </p>
                  </div>
                  {i < heroServices.length - 1 && (
                    <div className="w-px h-14 bg-white/20 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact Info + Form ── */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — info */}
          <div>
            <h2 className="font-display font-bold text-navy-900 text-3xl mb-8">
              Direct Contact<br />
              <span className="text-orange-brand">Information</span>
            </h2>

            <div className="space-y-4 mb-8">
              {/* Phone */}
              <div className="bg-white rounded-2xl border border-slate-100 hover:border-navy-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-6 flex gap-4">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-navy-800" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-navy-800 uppercase tracking-wider mb-2 font-body">
                    Phone / WhatsApp
                  </p>
                  <a href="tel:+918897072777" className="text-[17px] text-slate-800 hover:text-navy-800 transition-colors block font-bold font-body">
                    +91 8897072777
                  </a>
                  <a href="tel:+919491869866" className="text-[17px] text-slate-800 hover:text-navy-800 transition-colors block font-bold font-body">
                    +91 9491869866
                  </a>
                  <p className="text-[12px] text-slate-400 mt-1 font-body">K. Vidya Sagar (Owner &amp; Director)</p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl border border-slate-100 hover:border-orange-brand/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-6 flex gap-4">
                <div className="w-12 h-12 bg-orange-pale/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-orange-brand" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-orange-brand uppercase tracking-wider mb-2 font-body">
                    Office Address
                  </p>
                  <p className="text-[14px] text-slate-700 leading-relaxed font-body">
                    Opp. IDFC First Bank, Gudivada Road,<br />
                    Hanuman Junction – 521105,<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl border border-slate-100 hover:border-sky-brand/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-6 flex gap-4">
                <div className="w-12 h-12 bg-sky-pale/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-sky-brand" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-sky-brand uppercase tracking-wider mb-2 font-body">
                    Office Hours
                  </p>
                  <p className="text-[14px] text-slate-700 font-body font-semibold">
                    Monday – Saturday: 9:00 AM – 7:00 PM
                  </p>
                  <p className="text-[13px] text-slate-400 font-body">Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/918897072777?text=Hello%2C%20I%20need%20a%20consultation%20for%20my%20construction%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:opacity-90 hover:-translate-y-0.5 text-white px-6 py-3 rounded-lg text-[13px] font-semibold transition-all font-body shadow-sm hover:shadow-md"
              >
                <MessageCircle size={15} /> WhatsApp Now
              </a>
              <a
                href="tel:+918897072777"
                className="flex items-center gap-2 bg-navy-800 hover:bg-navy-900 hover:-translate-y-0.5 text-white px-6 py-3 rounded-lg text-[13px] font-semibold transition-all font-body shadow-sm hover:shadow-md"
              >
                <Phone size={15} /> Call Now
              </a>
            </div>
          </div>

          {/* Right — WhatsApp form (client component) */}
          <ContactForm />
        </div>
      </section>

      {/* ── Full-width map ── */}
      <section className="bg-white px-[5%] pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={16} className="text-navy-800" />
            <p className="font-body font-semibold text-navy-800 text-[14px]">
              Opp. IDFC First Bank, Gudivada Road, Hanuman Junction – 521105, Andhra Pradesh
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 w-full" style={{ height: '420px' }}>
            <iframe
              src="https://maps.google.com/maps?q=Hanuman+Junction+521105+Andhra+Pradesh+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ARNA INFRA PROJECTS Location Map"
            />
          </div>
        </div>
      </section>

      {/* ── Service areas ── */}
      <section className="section-pad bg-stone-50 text-center border-t border-slate-100">
        <p className="text-[11px] tracking-[3px] uppercase text-navy-800 font-bold mb-3 font-body">We Serve</p>
        <h2 className="font-display font-bold text-navy-900 mb-6" style={{ fontSize: 'clamp(18px, 2.5vw, 32px)' }}>
          Hanuman Junction · Vijayawada · Gudivada · Gannavaram · Eluru · Machilipatnam ·{' '}
          <span className="text-orange-brand">&amp; All of Andhra Pradesh</span>
        </h2>
      </section>
    </>
  );
}
