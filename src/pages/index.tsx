import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./home"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
