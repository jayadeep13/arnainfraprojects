'use client';
import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const services = [
  'House Planning', 'Architectural Design', 'Structural Design', 'Interior Design',
  '3D Elevation Design', 'Building Construction', 'Luxury Villa Construction',
  'Apartment Construction', 'Commercial Building', 'Hospital Construction',
  'Restaurant Design & Construction', 'Corporate Office Design & Construction',
  'Building Approvals (DTCP/Municipality)', 'Renovation Services', 'Turnkey Project',
];

const inputCls =
  'w-full bg-slate-50 border border-slate-200 hover:border-navy-400 focus:border-navy-700 focus:bg-white text-slate-900 placeholder-slate-300 rounded-xl px-4 py-3 text-[13px] outline-none transition-all duration-200 font-body';

const selectCls =
  'w-full bg-slate-50 border border-slate-200 hover:border-navy-400 focus:border-navy-700 focus:bg-white text-slate-700 rounded-xl px-4 py-3 text-[13px] outline-none transition-all duration-200 font-body';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', service: '', location: '', budget: '', details: '',
  });

  function set(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const lines = [
      `Hello ARNA INFRA PROJECTS! 👋`,
      ``,
      `I would like to enquire about your services.`,
      ``,
      `📋 *Enquiry Details:*`,
      `• Name: ${form.name}`,
      `• Phone: ${form.phone}`,
      `• Service Required: ${form.service}`,
      form.location ? `• Project Location: ${form.location}` : null,
      form.budget   ? `• Approx. Budget: ${form.budget}`    : null,
      form.details  ? `• Project Details: ${form.details}`  : null,
      ``,
      `Please get in touch at your earliest convenience. Thank you!`,
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/918897072777?text=${encodeURIComponent(lines)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(url, '_blank');
    }, 900);
  }

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-12 flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <MessageCircle size={40} className="text-[#25D366]" />
        </div>
        <h3 className="font-display font-bold text-2xl text-navy-900 mb-3">Opening WhatsApp!</h3>
        <p className="text-[14px] text-slate-500 leading-relaxed max-w-xs mb-2 font-body">
          Your enquiry details have been prepared. WhatsApp should open automatically.
        </p>
        <p className="text-[13px] text-slate-400 font-body mb-8">
          If it didn&apos;t open,{' '}
          <a
            href="https://wa.me/918897072777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] font-semibold underline"
          >
            click here
          </a>
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', phone: '', service: '', location: '', budget: '', details: '' });
          }}
          className="text-[12px] text-slate-400 hover:text-navy-800 transition-colors font-body border border-slate-200 px-5 py-2 rounded-lg"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 md:p-10">
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-6 h-1 rounded-full bg-navy-800" />
        <span className="text-[11px] tracking-[3px] uppercase font-bold text-navy-800 font-body">Enquiry Form</span>
      </div>
      <h2 className="font-display font-bold text-navy-800 text-2xl mb-1">Send An Enquiry</h2>
      <p className="text-[13px] text-slate-500 mb-7 font-body flex items-center gap-2">
        <MessageCircle size={14} className="text-[#25D366] flex-shrink-0" />
        Your details will be sent directly via WhatsApp
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-navy-800 mb-1.5 font-body uppercase tracking-wider">
              Full Name *
            </label>
            <input
              type="text" name="name" value={form.name} onChange={set}
              required placeholder="Your full name"
              className={inputCls}
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-navy-800 mb-1.5 font-body uppercase tracking-wider">
              Phone Number *
            </label>
            <input
              type="tel" name="phone" value={form.phone} onChange={set}
              required placeholder="Mobile number"
              className={inputCls}
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="block text-[11px] font-bold text-navy-800 mb-1.5 font-body uppercase tracking-wider">
            Service Required *
          </label>
          <select name="service" value={form.service} onChange={set} required className={selectCls}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Location + Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-navy-800 mb-1.5 font-body uppercase tracking-wider">
              Project Location
            </label>
            <input
              type="text" name="location" value={form.location} onChange={set}
              placeholder="City / Area"
              className={inputCls}
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-navy-800 mb-1.5 font-body uppercase tracking-wider">
              Approx. Budget
            </label>
            <select name="budget" value={form.budget} onChange={set} className={selectCls}>
              <option value="">Select budget range</option>
              <option>Below ₹10 Lakhs</option>
              <option>₹10–25 Lakhs</option>
              <option>₹25–50 Lakhs</option>
              <option>₹50 Lakhs–1 Crore</option>
              <option>Above ₹1 Crore</option>
            </select>
          </div>
        </div>

        {/* Details */}
        <div>
          <label className="block text-[11px] font-bold text-navy-800 mb-1.5 font-body uppercase tracking-wider">
            Project Details
          </label>
          <textarea
            name="details" value={form.details} onChange={set}
            rows={4}
            placeholder="Tell us about your project — type of building, plot size, number of floors, special requirements, etc."
            className={`${inputCls} resize-none`}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-navy-800 hover:bg-navy-900 disabled:opacity-60 text-white py-4 rounded-xl text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 font-body group"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Preparing WhatsApp message...
            </>
          ) : (
            <>
              <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
              Submit Enquiry via WhatsApp
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-slate-400 font-body flex items-center justify-center gap-1.5">
          <MessageCircle size={12} className="text-[#25D366]" />
          Clicking submit will open WhatsApp with your details pre-filled
        </p>
      </form>
    </div>
  );
}
