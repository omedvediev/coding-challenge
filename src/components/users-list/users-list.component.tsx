import React, { FC } from 'react';

import { UserCard } from '../user-card';
import { UsersListProps } from './users-list.types';
import classNames from 'classnames';
import styles from './users-list.module.scss';

/**
 * UsersList component
 *
 * @author Oleksii Medvediev
 * @category Components
 * @param { UsersListProps} props - UsersListProps defined in the './users-list.types.ts'
 */
const UsersList: FC<UsersListProps> = ({ cards, className }) => (
  <div className={classNames(styles.wrapper, className)}>
    {cards.map((card, index) => (
      <UserCard {...card} key={index.toString()} />
    ))}
  </div>
);

export { UsersList };
