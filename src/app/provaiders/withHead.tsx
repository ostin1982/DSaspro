import type { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";

export const withHead = (component: () => ReactNode) => () =>
  <HelmetProvider>{component()}</HelmetProvider>;
