import { Button, Pagination, UserCardExtended } from '../components';
import React, { useEffect, useState } from 'react';

import { DetailedUser } from '../components/user-card-extended/user-card-extended.types';
import Head from 'next/head';
import { NextPage } from 'next';
import { httpRequest } from '../services';
import { toast } from 'react-toastify';
import { useAppContext } from '../context';
import { useRouter } from 'next/router';

const Profile: NextPage = () => {
  const { query, back, replace } = useRouter();
  const { users } = useAppContext();

  const [user, setUser] = useState<DetailedUser>();
  const [isLoading, setIsLoading] = useState(false);

  const currentUser = users?.find(({ id }) => id === user?.id);
  const previousUser =
    user && users && currentUser
      ? users.find((_, index) => index === users.indexOf(currentUser) - 1)
      : undefined;
  const nextUser =
    user && users && currentUser
      ? users.find((_, index) => index === users.indexOf(currentUser) + 1)
      : undefined;

  useEffect(() => {
    const getCurrentUser = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };

    (!user || user.login !== query.userName) && getCurrentUser();
  }, [query, user]);

  return (
    <>
      <Head>
        <title>User Profile - Coding Challenge</title>
      </Head>

      <main>
        <Button onClick={() => back()} style={{ marginBottom: '1rem' }}>
          Back
        </Button>
        {user && !isLoading && (
          <UserCardExtended
            address={user.location ?? 'Not provided'}
            biography={user.bio ?? 'Not provided'}
            company={user.company ?? 'Not provided'}
            email={user.email ?? undefined}
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
        {users && user && !isLoading && (
          <Pagination
            onBackButtonClick={
              previousUser
                ? () => replace(`/profile?userName=${previousUser.login}`)
                : undefined
            }
            onNextButtonClick={
              nextUser ? () => replace(`profile?userName=${nextUser.login}`) : undefined
            }
          />
        )}
      </main>
    </>
  );
};

export default Profile;
