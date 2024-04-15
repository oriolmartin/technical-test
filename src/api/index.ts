import { getCurrentAccount } from "./current-account";
import { login } from "./login";

export const API = {
  currentAccount: {
    get: getCurrentAccount,
  },
  session: {
    login,
  },
};
