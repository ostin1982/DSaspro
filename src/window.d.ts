import { store } from "./entities";

declare global {
  interface Window {
    _store_: typeof store;
  }
}
