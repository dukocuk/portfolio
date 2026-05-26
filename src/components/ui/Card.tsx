import type { HTMLAttributes, ReactNode } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: boolean;
};

// Surface card. With `hover`, it lifts and accents the border without
// mousemove-driven gradients, keeping hover cheap in Brave.
export function Card({ children, hover = false, className = '', ...rest }: CardProps) {
  if (!hover) {
    return (
      <div className={`rounded-2xl border border-border bg-surface p-6 ${className}`} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-black/15 ${className}`}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
