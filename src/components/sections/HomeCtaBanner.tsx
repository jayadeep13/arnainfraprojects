import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Phone, MessageCircle } from 'lucide-react';

export default function HomeCtaBanner() {
  return (
    <section className="py-20 px-[5%] bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 20px)` }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sky-brand/10 blur-[120px] pointer-events-none" />

      <ScrollReveal direction="up" className="relative max-w-3xl mx-auto text-center">
        <p className="text-[11px] tracking-[3px] uppercase text-orange-brand font-bold mb-3 font-body">Get Started Today</p>
        <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
          Ready to Build Your<br />
          <span className="text-orange-brand">Dream Project?</span>
        </h2>
        <p className="text-[14px] text-white/60 leading-relaxed mb-10 font-body">
          Contact K. Vidya Sagar for a completely free consultation. We&apos;ll discuss your vision,
          requirements, and provide a transparent quote — no pressure, no obligation.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-orange-brand hover:bg-orange-light text-white px-8 py-3.5 rounded-lg text-[13px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-brand/30 font-body"
          >
            Get Free Consultation
          </Link>
          <a
            href="https://wa.me/918897072777"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:opacity-90 text-white px-8 py-3.5 rounded-lg text-[13px] font-semibold transition-all hover:-translate-y-0.5 font-body"
          >
            <MessageCircle size={14} /> WhatsApp Now
          </a>
          <a
            href="tel:+918897072777"
            className="flex items-center gap-2 border border-white/30 hover:border-sky-brand hover:text-sky-brand text-white px-8 py-3.5 rounded-lg text-[13px] font-semibold transition-all font-body"
          >
            <Phone size={13} /> 8897072777
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
