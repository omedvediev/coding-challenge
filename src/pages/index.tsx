import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import { UsersList } from '../components';
import { useAppContext } from '../context';

const Home: NextPage = () => {
  const { users } = useAppContext();

  return (
    <>
      <Head>
        <title>Github User Viewer - Coding Challenge</title>
        <meta
          name="description"
          content="View a list of Github users provided by the Github Users API"
        />
      </Head>

      <main>
        {users && (
          <UsersList
            cards={users.map(({ name, login, id, avatar_url }) => ({
              id,
              avatarUrl: avatar_url,
              name: name ?? 'Not provided',
              gitHubUserName: login,
              onViewProfileClick: () => '',
            }))}
          />
        )}
      </main>
    </>
  );
};

export default Home;
