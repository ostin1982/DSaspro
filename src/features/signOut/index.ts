import { store } from "@/entities";
import { api } from "@/shared/api";
import { logger } from "@/shared/lib/logger";

export const signOut = async () => {
  try {
    await api.auth.signOut();
    store.session.signOut;
  } catch (error) {
    logger.error("features.signOut", error);
  }
};
