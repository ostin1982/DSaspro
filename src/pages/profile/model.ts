import { useNavigate } from "react-router-dom";
import { useLocalObservable } from "mobx-react-lite";

import { useStore } from "@/app/provaiders/withStore";
import { signOut } from "@/features/signOut";

export const useModel = () => {
  const store = useStore();
  const navigate = useNavigate();
  const model = useLocalObservable(() => {
    return {
      async handleSignOut() {
        await signOut();
        navigate("/auth/sign-in");
      },

      get name() {
        return store.session.user?.name;
      },

      get email() {
        return store.session.user?.email;
      },
    };
  });

  return model;
};
