interface Props {
  label: string;
  className?: string;
  variant?: 'dark' | 'light';
}

export default function SectionTag({ label, className = '', variant = 'light' }: Props) {
  return (
    <div className={`inline-flex items-center gap-2 mb-3 ${className}`}>
      <span className={`w-5 h-1 rounded-full ${variant === 'dark' ? 'bg-orange-brand' : 'bg-navy-800'}`} />
      <span className={`text-[11px] tracking-[3px] uppercase font-bold ${variant === 'dark' ? 'text-orange-brand' : 'text-navy-800'}`}>
        {label}
      </span>
    </div>
  );
}
