import React from "react";

import Login from "../components/login/login";
import useCurrentAccount from "../hooks/useCurrentAccount";
import { API } from "../api";

const LoginPage: React.FC = () => {
  const { setAccount } = useCurrentAccount();

  const submitForm = async (
    loginName: string,
    password: string
  ): Promise<void> => {
    try {
      const currentAccount = await API.session.login(loginName, password);
      if (currentAccount) {
        setAccount(currentAccount);
      }
    } catch (ex) {
      //TODO: mostrar error al loguearse
    }
  };

  return <Login onSubmitForm={submitForm} />;
};

export default LoginPage;
