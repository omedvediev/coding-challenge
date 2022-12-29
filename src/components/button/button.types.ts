import { BaseHTMLAttributes } from 'react';

/**
 * Props for the Button component
 *
 * @author Oleksii Medvediev
 */
type ButtonProps = Pick<
  BaseHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'className' | 'children'
>;

export type { ButtonProps };
