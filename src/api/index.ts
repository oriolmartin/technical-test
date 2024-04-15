import { getCurrentAccount } from "./current-account";
import { login, logout, register } from "./login";
import { getUsers } from "./users";

export const API = {
  currentAccount: {
    get: getCurrentAccount,
  },
  session: {
    login,
    logout,
    register,
  },
  users: {
    get: getUsers,
  },
};
