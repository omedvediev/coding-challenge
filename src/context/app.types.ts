type State = {
  readonly users?: ReadonlyArray<User>;
};

type User = {
  readonly name?: string;
  readonly email?: string;
  readonly login: string;
  readonly id: number;
  readonly node_id: string;
  readonly avatar_url: string;
  readonly gravatar_id?: string;
  readonly url: string;
  readonly html_url: string;
  readonly followers_url: string;
  readonly following_url: string;
  readonly gists_url: string;
  readonly starred_url: string;
  readonly subscriptions_url: string;
  readonly organizations_url: string;
  readonly repos_url: string;
  readonly events_url: string;
  readonly received_events_url: string;
  readonly type: string;
  readonly site_admin: boolean;
  readonly starred_at: Date;
};

type Action = {
  readonly type: 'SET_USERS';
  readonly payload: State['users'];
};

export type { Action, State, User };
