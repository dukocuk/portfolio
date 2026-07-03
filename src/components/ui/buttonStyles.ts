// Button style tokens, kept outside Button.tsx so non-anchor triggers
// (e.g. BookingButton) can share them without breaking fast refresh.
export type ButtonVariant = 'primary' | 'outline' | 'ghost';
export type ButtonSize = 'md' | 'sm';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-accent';

const sizes: Record<ButtonSize, string> = {
  md: 'px-5 py-3',
  sm: 'px-3.5 py-2',
};

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent-gradient text-white shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/25',
  outline: 'border border-border text-text hover:border-accent hover:text-accent',
  ghost: 'text-muted hover:text-text',
};

export function buttonClasses(variant: ButtonVariant = 'primary', size: ButtonSize = 'md'): string {
  return `${base} ${sizes[size]} ${variants[variant]}`;
}
