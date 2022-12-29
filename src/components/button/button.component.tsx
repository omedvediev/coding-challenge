import React, { forwardRef } from 'react';

import { ButtonProps } from './button.types';
import classNames from 'classnames';
import styles from './button.module.scss';

/**
 * Button component.
 *
 * @author Oleksii Medvediev
 * @category Components
 * @param { ButtonProps } props - ButtonProps defined in the './button.types.ts'
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, className, children }, ref) => (
    <button
      ref={ref}
      type={'button'}
      tabIndex={0}
      onClick={onClick}
      className={classNames(styles.wrapper, className)}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export { Button };
