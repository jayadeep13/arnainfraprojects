import type { Metadata } from 'next';
import SectionTag from '@/components/ui/SectionTag';
import Link from 'next/link';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | ARNA INFRA PROJECTS',
  description:
    'Learn about ARNA INFRA PROJECTS — led by K. Vidya Sagar. Over 10 years of premium construction, architectural design, and building approvals in Hanuman Junction and Andhra Pradesh.',
};

const milestones = [
  { year: '2014', title: 'Foundation',         desc: 'ARNA INFRA PROJECTS established in Hanuman Junction by K. Vidya Sagar with a vision to deliver honest, quality construction.' },
  { year: '2016', title: 'First 50 Projects',  desc: 'Successfully completed 50 residential and commercial projects across Krishna District, building a reputation for quality.' },
  { year: '2018', title: 'Hospital Division',  desc: 'Expanded into specialized healthcare facility design and construction to serve the growing healthcare infrastructure need.' },
  { year: '2020', title: 'DTCP Certification', desc: 'Became a certified DTCP documentation and approval consultant firm — one of the most trusted in the region.' },
  { year: '2022', title: '300+ Projects',      desc: 'Crossed 300 completed projects milestone and expanded our services to all districts of Andhra Pradesh.' },
  { year: '2024', title: '500+ Projects',      desc: 'Reached 500 successful project deliveries while maintaining our 100% client satisfaction record.' },
];

const values = [
  { icon: '🏛️', title: 'Integrity',   desc: 'Complete transparency in pricing, timelines, and quality commitments — no hidden costs, ever.' },
  { icon: '💡', title: 'Innovation',  desc: 'Blending modern design trends with proven construction techniques for lasting, functional results.' },
  { icon: '🤝', title: 'Partnership', desc: 'We treat every client project as our own, investing fully in your success and satisfaction.' },
  { icon: '⭐', title: 'Excellence',  desc: 'Zero compromise on quality at any stage — from foundation laying to finishing touches.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Header — about.png background */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '90vh',
          backgroundImage: 'url(/about1.png)',
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

        <div
          className="relative z-10 px-[5%] w-full max-w-7xl mx-auto flex flex-col justify-center"
          style={{ minHeight: '90vh', paddingTop: '120px', paddingBottom: '60px' }}
        >
          <div className="max-w-3xl">
            <SectionTag label="About Us" variant="dark" />
            <h1 className="font-display font-bold text-white leading-[1.1] mb-5" style={{ fontSize: 'clamp(36px, 5vw, 66px)' }}>
              Building Trust,<br />
              <span className="text-sky-brand">One Project At A Time</span>
            </h1>
            <p className="text-[15px] text-white/65 leading-relaxed max-w-xl font-body">
              ARNA INFRA PROJECTS has been transforming visions into magnificent structures since 2014 —
              guided by an unwavering commitment to quality, integrity, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* About section — text left, founder image right */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <SectionTag label="About Us" />
            <h2 className="font-display font-bold text-navy-800 mb-6" style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}>
              ARNA INFRA PROJECTS, Founded by<br />
              <span className="text-orange-brand">K. Vidya Sagar</span>
            </h2>
            <div className="space-y-4 text-[14px] text-slate-600 leading-relaxed font-body">
              <p>
                <strong className="text-slate-900">ARNA INFRA PROJECTS</strong>, founded by{' '}
                <strong className="text-orange-brand">K. Vidya Sagar</strong>, is a forward-thinking construction and
                design firm specializing in{' '}
                <strong className="text-slate-900">Architecture, Structural Engineering, and Project Planning</strong>.
                Guided by the vision of our founder, we are committed to creating designs that not only meet functional
                needs but also inspire communities and enhance lifestyles.
              </p>
              <p>
                Since its inception, ARNA INFRA PROJECTS has been dedicated to delivering innovative, practical,
                and sustainable solutions across diverse sectors including{' '}
                <strong className="text-slate-900">residential, commercial, educational, healthcare</strong>, and{' '}
                <strong className="text-slate-900">institutional projects</strong>. With a strong foundation in civil
                engineering and architectural design, we consistently execute projects that balance creativity,
                functionality, and precision.
              </p>
              <p>
                What sets ARNA INFRA PROJECTS apart is our pool of{' '}
                <strong className="text-slate-900">highly skilled professionals</strong> with expertise in{' '}
                <strong className="text-slate-900">structural design, architecture, interior design, 3D visualization, renovation,
                and government approvals</strong>. This multidisciplinary strength enables us to deliver projects with
                confidence and excellence — shaping spaces that are both inspiring and enduring.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-navy-800 hover:bg-navy-900 text-white px-7 py-3.5 rounded-lg text-[13px] font-semibold transition-all font-body"
              >
                Start Your Project
              </Link>
              <a
                href="tel:+918897072777"
                className="flex items-center gap-2 border-2 border-slate-200 hover:border-navy-800 text-slate-700 px-7 py-3.5 rounded-lg text-[13px] font-semibold transition-all font-body"
              >
                <Phone size={14} /> Call Now
              </a>
            </div>
          </div>

          {/* Founder photo card */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl overflow-hidden border-4 border-navy-800 shadow-2xl">
                <img
                  src="/kiran.png"
                  alt="K. Vidya Sagar — Founder"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-brand text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <span className="font-display font-bold text-lg">10+</span>
              </div>
            </div>
            <div className="text-center mt-6">
              <h3 className="font-display font-bold text-2xl text-navy-900">K. Vidya Sagar</h3>
              <p className="text-slate-500 font-body mt-1">Founder &amp; Visionary</p>
              <div className="flex gap-3 justify-center mt-4">
                <div className="bg-navy-50 rounded-xl px-4 py-3 text-center">
                  <p className="font-display font-bold text-navy-800 text-xl">500+</p>
                  <p className="text-[11px] text-slate-500 font-body">Projects</p>
                </div>
                <div className="bg-orange-pale/30 rounded-xl px-4 py-3 text-center">
                  <p className="font-display font-bold text-orange-brand text-xl">100%</p>
                  <p className="text-[11px] text-slate-500 font-body">Satisfaction</p>
                </div>
                <div className="bg-sky-pale/30 rounded-xl px-4 py-3 text-center">
                  <p className="font-display font-bold text-sky-brand text-xl">50+</p>
                  <p className="text-[11px] text-slate-500 font-body">Experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline — stone-50 */}
      <section className="section-pad bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionTag label="Our Journey" className="justify-center" />
            <h2 className="font-display font-bold text-navy-900" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
              A Decade of<br /><span className="text-sky-brand">Milestones</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 hover:border-navy-200 hover:shadow-md transition-all p-6">
                <div className="inline-flex items-center gap-2 bg-navy-50 rounded-lg px-3 py-1.5 mb-4">
                  <span className="font-display font-bold text-navy-800 text-lg">{m.year}</span>
                </div>
                <h3 className="font-display font-bold text-slate-900 text-[18px] mb-2">{m.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-body">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionTag label="Our Values" className="justify-center" />
            <h2 className="font-display font-bold text-navy-900" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
              The Principles That<br /><span className="text-orange-brand">Guide Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-stone-50 rounded-2xl p-7 text-center hover:bg-navy-50 hover:shadow-md transition-all group border border-slate-100">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{v.icon}</div>
                <h3 className="font-display font-bold text-[18px] text-slate-900 mb-2 group-hover:text-navy-800 transition-colors">{v.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed font-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <TestimonialsSection />
    </>
  );
}
