import { BaseHTMLAttributes } from 'react';

/**
 * Props for the Button component
 *
 * @author Oleksii Medvediev
 */
interface ButtonProps
  extends Pick<
    BaseHTMLAttributes<HTMLButtonElement>,
    'onClick' | 'className' | 'children' | 'style'
  > {
  // Specifies Button component variant.
  // By default is 'filled'.
  readonly variant?: 'filled' | 'borderless';
}

export type { ButtonProps };
