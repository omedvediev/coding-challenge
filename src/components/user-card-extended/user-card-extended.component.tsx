import React, { FC } from 'react';

import { UserCard } from '../user-card/user-card.component';
import { UserCardExtendedProps } from './user-card-extended.types';
import classNames from 'classnames';
import styles from './user-card-extended.module.scss';

/**
 * UserCardExtended component.
 *
 * @author Oleksii Medvediev
 * @category Components
 * @param {UserCardExtendedProps} props - UserCardExtendedProps defined in the './user-card-extended.types.ts'
 */
const UserCardExtended: FC<UserCardExtendedProps> = ({
  address,
  biography,
  company,
  email,
  name,
  followers,
  following,
  gitHubUserName,
  id,
  publicGists,
  publicRepos,
  twitter,
  avatarUrl,
  className,
}) => (
  <div className={classNames(styles.wrapper, className)}>
    <UserCard
      name={name}
      gitHubUserName={gitHubUserName}
      id={id}
      avatarUrl={avatarUrl}
      className={styles.card}
      address={address}
      email={email}
    />
    <div className={styles.details}>
      <div className={styles.row}>
        <div className={styles.col}>
          <span className={styles.number}>{publicRepos}</span>
          <span className={styles.label}>Public Repos</span>
        </div>
        <div className={styles.col}>
          <span className={styles.number}>{publicGists}</span>
          <span className={styles.label}>Public Gists</span>
        </div>
        <div className={styles.col}>
          <span className={styles.number}>{followers}</span>
          <span className={styles.label}>Followers</span>
        </div>
        <div className={styles.col}>
          <span className={styles.number}>{following}</span>
          <span className={styles.label}>Following</span>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.subRow}>
          <b>Biography:</b>
          {biography}
        </div>
        <div className={styles.subRow}>
          <b>Company:</b>
          {company}
        </div>
        <div className={styles.subRow}>
          <b>Twitter:</b>
          <a
            target={'_blank'}
            rel="noreferrer"
            href={twitter}
            className={styles.twitterLink}
          >
            {twitter}
          </a>
        </div>
      </div>
    </div>
  </div>
);

export { UserCardExtended };
