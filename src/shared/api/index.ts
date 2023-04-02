import { configure, setAccessToken } from "@/shared/api/config";

import * as auth from "./rest/auth";

export const api = {
  auth,
};

export { setAccessToken, configure };
