import { useLocalObservable } from "mobx-react-lite";
import { useLocation } from "react-router";

import { useStore } from "@/app/provaiders/withStore";

export const useModel = () => {
  const store = useStore();
  const location = useLocation();

  return useLocalObservable(() => {
    return {
      get isAuthenticated(): boolean {
        return store.session.isAuthenticated;
      },
      get state() {
        return { from: location };
      },
    };
  });
};
