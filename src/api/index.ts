import { getCurrentAccount } from "./current-account";
import { login, logout, register } from "./login";
import { createUser, editUser, getUsers, showUser } from "./users";

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
    show: showUser,
    new: createUser,
    edit: editUser,
  },
};
