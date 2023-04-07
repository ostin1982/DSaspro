import { store } from "@/entities";
import { api } from "@/shared/api";
import { Email } from "@/shared/api/rest/auth";
import { logger } from "@/shared/lib/logger";

export const signIn = async ({ email }: { email: Email }) => {
  try {
    const { user } = await api.auth.signInWithEmail({ email });

    store.session.update(user);
  } catch (error) {
    logger.error("features.signIn", { error });
  }
};
