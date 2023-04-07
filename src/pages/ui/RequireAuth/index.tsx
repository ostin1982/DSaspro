import { FC } from "react";
import { Navigate } from "react-router";
import { observer } from "mobx-react-lite";

import { ROUTER_LINK } from "@/shared/config";

import { useModel } from "./model";

interface Props {
  children: JSX.Element;
}

export const RequireAuth: FC<Props> = observer(({ children }) => {
  const model = useModel();

  if (!model.isAuthenticated) {
    return <Navigate to={ROUTER_LINK.SIGN_IN} state={model.state} replace />;
  }

  return children;
});
