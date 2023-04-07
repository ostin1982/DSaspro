import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "@/pages/ui/RequireAuth";
import { ROUTER_LINK } from "@/shared/config/router";

const Home = lazy(() => import("./home"));
const SignIn = lazy(() => import("./auth/sign-in"));
const Profile = lazy(() => import("./profile"));

export const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTER_LINK.MAIN} element={<Home />} />
      <Route path={ROUTER_LINK.SIGN_IN} element={<SignIn />} />
      <Route
        path={ROUTER_LINK.PROFILE}
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
    </Routes>
  );
};
