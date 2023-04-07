import React from "react";
import ReactDOM from "react-dom/client";

import "@/shared/lib/sentry";

import { App } from "@/app";
import { configure } from "./shared/api";

const renderApp = () => {
  return ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  ).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

Promise.all([
  configure({
    errorHandler: (errorsWithData) => {
      console.error("Errors", errorsWithData);
    },
  }),
]).then(renderApp);
