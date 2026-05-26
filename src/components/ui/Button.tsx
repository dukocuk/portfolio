import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost';

// Omit the DOM drag/animation handlers that clash with framer-motion's own.
type ButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onDrag' | 'onDragStart' | 'onDragEnd'
> & {
  variant?: Variant;
  children: ReactNode;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-accent';

const variants: Record<Variant, string> = {
  primary: 'bg-accent-gradient text-white shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/25',
  outline: 'border border-border text-text hover:border-accent hover:text-accent',
  ghost: 'text-muted hover:text-text',
};

export function Button({ variant = 'primary', children, className = '', ...rest }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
