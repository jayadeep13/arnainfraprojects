import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'sky';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  external?: boolean;
}

export default function Button({
  children, href, onClick, variant = 'primary',
  className = '', type = 'button', disabled, external,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-7 py-3.5 text-[12px] tracking-[1.5px] uppercase font-bold rounded-sm transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-orange-brand hover:bg-orange-light text-white hover:-translate-y-px hover:shadow-lg hover:shadow-orange-brand/20',
    sky:     'bg-sky-brand hover:bg-sky-light text-white hover:-translate-y-px hover:shadow-lg hover:shadow-sky-brand/20',
    outline: 'border border-white/30 text-white hover:border-sky-brand hover:text-sky-brand',
  };

  const classes = `${base} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return external
      ? <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>
      : <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
