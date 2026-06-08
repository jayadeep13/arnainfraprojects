import SectionTag from '@/components/ui/SectionTag';
import ScrollReveal from '@/components/ui/ScrollReveal';

const testimonials = [
  {
    name: 'Ravi Kumar Reddy',
    role: 'Villa Owner',
    location: 'Vijayawada',
    initials: 'RK',
    text: 'ARNA INFRA PROJECTS built our dream villa exactly as we envisioned. K. Vidya Sagar and his team were professional, punctual, and the quality of construction is simply outstanding.',
    rating: 5,
  },
  {
    name: 'Dr. Suresh Prasad',
    role: 'Hospital Director',
    location: 'Gudivada',
    initials: 'SP',
    text: 'They handled all our hospital approvals and construction flawlessly. Their expertise in regulatory compliance saved us months of hassle and significant cost.',
    rating: 5,
  },
  {
    name: 'Lavanya Namburi',
    role: 'Restaurant Owner',
    location: 'Hanuman Junction',
    initials: 'LN',
    text: 'Our restaurant interior by ARNA is absolutely breathtaking. Customers constantly compliment the ambience. Delivered on time and perfectly matched the 3D visualization.',
    rating: 5,
  },
  {
    name: 'Anil Srinivas',
    role: 'Apartment Developer',
    location: 'Gannavaram',
    initials: 'AS',
    text: 'We partnered with ARNA for a 24-unit apartment project. Their structural design, quality control, and project management were impeccable. Will work with them again.',
    rating: 5,
  },
  {
    name: 'Meena Lakshmi',
    role: 'Homeowner',
    location: 'Eluru',
    initials: 'ML',
    text: 'From the first consultation to handing over the keys, ARNA INFRA made the entire process stress-free. The renovation exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Ramesh Varma',
    role: 'Commercial Builder',
    location: 'Machilipatnam',
    initials: 'RV',
    text: 'Outstanding commercial construction work. They got all DTCP approvals done in record time and the building quality is excellent. Best in the region.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" className="text-center mb-14">
          <SectionTag label="Client Reviews" className="justify-center" />
          <h2 className="font-display font-bold text-navy-900" style={{ fontSize: 'clamp(26px, 3.5vw, 46px)' }}>
            What Our Clients<br />
            <span className="text-sky-brand">Say About Us</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 80}>
              <div className="bg-white rounded-2xl border border-slate-100 hover:border-navy-200 hover:shadow-lg transition-all duration-300 p-7 flex flex-col h-full">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-orange-brand text-[16px]">★</span>
                  ))}
                </div>
                <p className="text-[13px] text-slate-600 leading-relaxed font-body flex-1 mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full bg-navy-800 flex items-center justify-center font-bold text-[13px] text-white flex-shrink-0 font-display">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-slate-900 font-display">{t.name}</p>
                    <p className="text-[12px] text-orange-brand font-semibold font-body">{t.role} · {t.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
