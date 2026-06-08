import Link from 'next/link';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import ArnaLogo from '@/components/ui/ArnaLogo';

const services = [
  'Architectural Design', 'Villa Construction', 'Apartment Construction',
  'Hospital Construction', 'Restaurant Design', 'Interior Design',
  'Building Approvals', 'Turnkey Projects', 'Renovation Services',
];

const quickLinks = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/process',  label: 'Our Process' },
  { href: '/contact',  label: 'Contact Us' },
];

const areas = ['Hanuman Junction', 'Vijayawada', 'Gudivada', 'Gannavaram', 'Eluru', 'Machilipatnam'];

export default function Footer() {
  return (
    <footer>

      {/* CTA Strip — LIGHT PASTEL (navy-50 / very soft blue-white) */}
      <div className="bg-navy-50 border-t border-navy-100">
        <div className="px-[5%] py-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
          <div>
            <p className="text-[11px] tracking-[3px] uppercase text-orange-brand font-bold mb-1 font-body">
              Ready to Build?
            </p>
            <h3 className="font-display font-bold text-xl md:text-2xl text-navy-900">
              Start Your Dream Project{' '}
              <span className="text-orange-brand">Today</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/918897072777"
              className="flex items-center gap-2 bg-[#25D366] hover:opacity-90 text-white px-6 py-2.5 rounded-lg text-[13px] font-semibold transition-all font-body"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white px-6 py-2.5 rounded-lg text-[13px] font-semibold transition-all font-body"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer — DARK NAVY (same as screenshot) */}
      <div className="bg-navy-950">
        <div className="px-[5%] py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <ArnaLogo size={48} />
              <div>
                <div className="font-display font-bold text-[18px] tracking-[2px] text-white leading-none">
                  ARNA <span className="text-orange-brand">INFRA</span>
                </div>
                <div className="text-[9px] tracking-[4px] text-sky-brand uppercase mt-1 font-semibold font-body">
                  Projects
                </div>
              </div>
            </Link>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-[240px] font-body">
              Premium construction, architectural design &amp; building approval services across Andhra Pradesh since 2014.
            </p>
            <div className="flex gap-3 mt-5">
              <div className="border border-sky-brand/30 rounded-lg px-3 py-1.5 text-[10px] text-sky-brand font-semibold font-body">
                DTCP Approved
              </div>
              <div className="border border-orange-brand/30 rounded-lg px-3 py-1.5 text-[10px] text-orange-brand font-semibold font-body">
                10+ Years
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[12px] tracking-[2px] uppercase text-white font-bold mb-5 font-body">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-white/45 hover:text-white transition-colors flex items-center gap-2 group font-body"
                  >
                    <span className="w-3 h-px bg-sky-brand/40 group-hover:w-5 group-hover:bg-sky-brand transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] tracking-[2px] uppercase text-white font-bold mb-5 font-body">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-[13px] text-white/45 hover:text-white transition-colors flex items-center gap-2 group font-body"
                  >
                    <span className="w-3 h-px bg-orange-brand/40 group-hover:w-5 group-hover:bg-orange-brand transition-all" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] tracking-[2px] uppercase text-white font-bold mb-5 font-body">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone size={16} className="text-sky-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-sky-brand font-semibold mb-1 font-body">Phone</p>
                  <a href="tel:+918897072777" className="text-[13px] text-white/70 hover:text-white block transition-colors font-body">
                    8897072777
                  </a>
                  <a href="tel:+919491869866" className="text-[13px] text-white/70 hover:text-white block transition-colors font-body">
                    9491869866
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={16} className="text-orange-brand mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[11px] text-orange-brand font-semibold mb-1 font-body">Address</p>
                  <p className="text-[13px] text-white/50 leading-relaxed font-body">
                    Opp. IDFC First Bank,<br />
                    Gudivada Road,<br />
                    Hanuman Junction – 521105,<br />
                    Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[11px] text-white/30 mb-2 font-body">Service Areas</p>
              <div className="flex flex-wrap gap-1.5">
                {areas.map((a) => (
                  <span
                    key={a}
                    className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 text-white/40 rounded font-body"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 px-[5%] py-4 flex flex-col md:flex-row justify-between items-center gap-3 max-w-7xl mx-auto">
          <p className="text-[12px] text-white/25 font-body">
            © {new Date().getFullYear()} ARNA INFRA PROJECTS. All Rights Reserved. | K. Vidya Sagar | Hanuman Junction – 521105, AP
          </p>
          <p className="text-[11px] text-white/20 font-body">
            Construction Company in Vijayawada | Architect in Hanuman Junction
          </p>
        </div>
      </div>

    </footer>
  );
}
