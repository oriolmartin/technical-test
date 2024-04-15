import React from "react";

import useCurrentAccount from "../hooks/useCurrentAccount";
import { API } from "../api";
import Logout from "../components/logout/logout";

const LogoutPage: React.FC = () => {
  const { setAccount } = useCurrentAccount();

  const submitForm = () => {
    setAccount(undefined);
    API.session.logout();
  };

  return <Logout onSubmitForm={submitForm} />;
};

export default LogoutPage;
