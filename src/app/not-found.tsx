import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-8 bg-navy-950">
      <div className="font-display text-[120px] font-bold text-sky-brand/10 leading-none select-none">404</div>
      <h1 className="font-display text-4xl font-light text-white mb-4 -mt-4">Page Not Found</h1>
      <p className="text-[14px] text-white/40 mb-8 max-w-sm">
        This page doesn&apos;t exist. Let&apos;s take you back to building something great.
      </p>
      <Link
        href="/"
        className="bg-sky-brand hover:bg-sky-light text-white px-8 py-3.5 rounded-sm text-[12px] tracking-[1.5px] uppercase font-bold transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}
