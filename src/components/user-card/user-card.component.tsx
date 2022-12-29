import React, { FC } from 'react';

import { Button } from '../button';
import Image from 'next/image';
import Link from 'next/link';
import { UserCardProps } from './user-card.types';
import classNames from 'classnames';
import styles from './user-card.module.scss';

/**
 * UserCard component
 *
 * @author Oleksii Medvediev
 * @category Components
 * @param { UserCardProps } props - UserCardProps defined in the './user-card.types.ts'
 */
const UserCard: FC<UserCardProps> = ({
  avatarUrl,
  address,
  email,
  name,
  gitHubUserName,
  className,
}) => (
  <div className={classNames(styles.wrapper, className)}>
    {avatarUrl && (
      <Image
        width={200}
        height={200}
        alt={gitHubUserName}
        className={styles.avatar}
        src={avatarUrl}
      />
    )}
    <div className={styles.info}>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.gitHubUsername}>{gitHubUserName}</span>
    </div>
    {email && address ? (
      <div className={styles.contacts}>
        <span className={styles.address}>{address}</span>
        <a href={`mailto:${email}`} className={styles.email}>
          {email}
        </a>
      </div>
    ) : (
      <Link href={`/profile?userName=${gitHubUserName}`}>
        <Button>view profile</Button>
      </Link>
    )}
  </div>
);

export { UserCard };
