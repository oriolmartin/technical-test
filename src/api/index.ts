import { getCurrentAccount } from "./current-account";
import { login, logout } from "./login";
import { getUsers } from "./users";

export const API = {
  currentAccount: {
    get: getCurrentAccount,
  },
  session: {
    login,
    logout,
  },
  users: {
    get: getUsers,
  },
};
