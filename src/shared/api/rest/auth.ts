import { client } from "@/shared/api/client";

export type Email = string;
export type Password = string;
export type UserName = string;

type Uuid = string;
export type UserId = Uuid;

interface User {
  id: UserId;
  email: Email;
  name: UserName | null;
}

type AccessToken = string;

interface Session {
  user: User;
  accessToken: AccessToken;
}

export const signInWithEmail = async ({
  email,
}: {
  email: Email;
}): Promise<Session> => {
  const { data, error } = await client.auth.signInWithOtp({
    email,
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    user: {
      id: data.session?.user.id as string,
      email,
      name: data.session?.user.user_metadata.name as string,
    },

    accessToken: data.session?.access_token as string,
  };
};

export const signOut = async (): Promise<void> => {
  const { error } = await client.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};

export const getMe = async (): Promise<User> => {
  const {
    data: { user },
  } = await client.auth.getUser();

  return {
    id: user?.id as string,
    email: user?.email as string,
    name: user?.user_metadata.name,
  };
};
