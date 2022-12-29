import React, { FC } from 'react';

import { Button } from '../button';
import { PaginationProps } from './pagination.types';
import styles from './pagination.module.scss';

/**
 * Pagination component.
 *
 * @author Oleksii Medvediev
 * @category Components
 * @param { PaginationProps } props - PaginationProps defined in the './pagination.types.ts'
 */
const Pagination: FC<PaginationProps> = ({ onBackButtonClick, onNextButtonClick }) => (
  <div className={styles.wrapper}>
    {onBackButtonClick && (
      <Button variant={'borderless'} onClick={onBackButtonClick}>
        {'<'}&nbsp;Back
      </Button>
    )}
    <span className={styles.divider}>|</span>
    {onNextButtonClick && (
      <Button variant={'borderless'} onClick={onNextButtonClick}>
        Next&nbsp;{'>'}
      </Button>
    )}
  </div>
);

export { Pagination };
