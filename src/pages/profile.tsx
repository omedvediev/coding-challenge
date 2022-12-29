import React, { useCallback, useEffect, useState } from 'react';

import { DetailedUser } from '../components/user-card-extended/user-card-extended.types';
import Head from 'next/head';
import { NextPage } from 'next';
import { UserCardExtended } from '../components';
import { httpRequest } from '../services';
import { toast } from 'react-toastify';
import { useAppContext } from '../context';
import { useRouter } from 'next/router';

const Profile: NextPage = () => {
  const { query } = useRouter();
  const { users } = useAppContext();

  const [user, setUser] = useState<DetailedUser>();

  const getCurrentUser = useCallback(async () => {
    if (query.userName) {
      try {
        const { userName } = query;
        const response = await httpRequest({ url: `/${userName}` });

        response && setUser(response);
      } catch (error) {
        toast.error('Something went wrong...');
        console.info(error);
      }
    }
  }, []);

  useEffect(() => {
    !user && getCurrentUser();
  }, [query, user, getCurrentUser]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <Head>
        <title>User Profile - Coding Challenge</title>
      </Head>

      <main>
        {user && (
          <UserCardExtended
            address={user.location ?? 'Not provided'}
            biography={user.bio}
            company={user.company ?? 'Not provided'}
            email={user.email ?? 'Not provided'}
            name={user.name}
            followers={user.followers}
            following={user.following}
            gitHubUserName={user.login}
            id={user.id}
            publicRepos={user.public_repos}
            publicGists={user.public_gists}
            twitter={user.twitter_username ?? 'Not provided'}
            avatarUrl={user.avatar_url}
          />
        )}
        {users && <></>}
      </main>
    </>
  );
};

export default Profile;
