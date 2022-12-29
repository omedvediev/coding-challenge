import { BaseHTMLAttributes } from 'react';

/**
 * Props for the UserCard component.
 *
 * @author Oleksii Medvediev
 */
interface UserCardProps extends Pick<BaseHTMLAttributes<HTMLDivElement>, 'className'> {
  readonly name: string;
  readonly gitHubUserName: string;
  readonly id: number;
  readonly avatarUrl?: string;
  readonly address?: string;
  readonly email?: string;
}

export type { UserCardProps };
