import { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Loading } from "@/shared/ui/Loading";

export const withRouter = (component: () => ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>{component()}</Suspense>
    </BrowserRouter>
  );
