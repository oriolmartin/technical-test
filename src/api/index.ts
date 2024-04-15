import { getCurrentAccount } from "./current-account";
import { login } from "./login";
import { getUsers } from "./users";

export const API = {
  currentAccount: {
    get: getCurrentAccount,
  },
  session: {
    login,
  },
  users: {
    get: getUsers,
  },
};
