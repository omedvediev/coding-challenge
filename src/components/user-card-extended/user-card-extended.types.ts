import { BaseHTMLAttributes, ReactNode } from 'react';

import { UserCardProps } from '../user-card/user-card.types';

/**
 * Props for the UserCardExtended component
 *
 * @author Oleksii Medvediev
 */
interface UserCardExtendedProps
  extends Pick<BaseHTMLAttributes<HTMLDivElement>, 'className'>,
    Pick<UserCardProps, 'name' | 'gitHubUserName' | 'avatarUrl' | 'id'> {
  readonly address: string;
  readonly email?: string;
  readonly publicRepos: number;
  readonly publicGists: number;
  readonly followers: number;
  readonly following: number;
  readonly biography: ReactNode;
  readonly company: string;
  readonly twitter: string;
}

type DetailedUser = {
  avatar_url: string;
  bio: ReactNode;
  company: string | null;
  email: string | null;
  followers: number;
  following: number;
  id: number;
  location: string | null;
  login: string;
  name: string;
  public_gists: number;
  public_repos: number;
  twitter_username: string | null;
};

export type { UserCardExtendedProps, DetailedUser };
