import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "@/pages/ui/RequireAuth";
import { ROUTER_LINK } from "@/shared/config/router";

const Home = lazy(() => import("./home"));
const SignIn = lazy(() => import("./auth/sign-in"));
const OnbordingPage = lazy(() => import("./auth/onboarding"));
const WorkspacePage = lazy(() => import("./auth/workspace"));
const BoardsPage = lazy(() => import("./auth/boards"));
const Profile = lazy(() => import("./profile"));

export const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTER_LINK.MAIN} element={<Home />} />
      <Route path={ROUTER_LINK.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTER_LINK.ONBORDING_PAGE} element={<OnbordingPage />} />
      <Route path={ROUTER_LINK.WORKSPACE_PAGE} element={<WorkspacePage />} />
      <Route path={ROUTER_LINK.BOARDS_PAGE} element={<BoardsPage />} />
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
