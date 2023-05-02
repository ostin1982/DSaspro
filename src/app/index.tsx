import "./styles/index.css";

import React from "react";

import { Routing } from "@/pages";
import { withProviders } from "./provaiders";

function Component() {
  return <Routing />;
}

export const App = withProviders(Component);
