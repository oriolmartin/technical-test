import React from "react";

import useCurrentAccount from "../hooks/useCurrentAccount";
import { CurrentAccount } from "../models/current-account.model";
import LoginForm from "../components/login/loginForm";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import routes from "../routes";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setAccount } = useCurrentAccount();

  const submitForm = (currentAccount?: CurrentAccount): void => {
    try {
      if (!!currentAccount) {
        setAccount(currentAccount);
      }
    } catch (ex) {
      //TODO: mostrar error al loguearse
    }
  };

  return (
    <div className="login">
      <LoginForm onFinishLogin={submitForm} />

      <Button key="submit" form="login-form" type="primary" htmlType="submit">
        Login
      </Button>

      <a
        onClick={() => {
          navigate(routes.register());
        }}
      >
        Register
      </a>
    </div>
  );
};

export default LoginPage;
