import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { buttonClasses, type ButtonVariant } from './buttonStyles';

// Omit the DOM drag/animation handlers that clash with framer-motion's own.
type ButtonProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onDrag' | 'onDragStart' | 'onDragEnd'
> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

export function Button({ variant = 'primary', children, className = '', ...rest }: ButtonProps) {
  return (
    <a className={`${buttonClasses(variant)} ${className}`} {...rest}>
      {children}
    </a>
  );
}
