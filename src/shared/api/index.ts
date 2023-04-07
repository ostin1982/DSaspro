import { configure } from "@/shared/api/config";

import * as auth from "./rest/auth";

export const api = {
  auth,
};

export { configure };
