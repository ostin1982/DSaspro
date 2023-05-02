import compose from "compose-function";

import { withStore } from "./withStore";
import { withRouter } from "./withRouter";
import { withHead } from "./withHead";

export const withProviders = compose(withStore, withRouter, withHead);
