import { BaseHTMLAttributes } from 'react';
import { UserCardProps } from '../user-card/user-card.types';

/**
 * Prop for the UsersList component
 */
interface UsersListProps extends Pick<BaseHTMLAttributes<HTMLDivElement>, 'className'> {
  readonly cards: ReadonlyArray<UserCardProps>;
}

export type { UsersListProps };
