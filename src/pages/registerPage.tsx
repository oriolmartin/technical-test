import React from "react";

import routes from "../routes";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/users/userForm";
import { Button } from "antd";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const submitForm = (): void => {
    navigate(routes.home());
  };

  // return <Register onSubmitForm={submitForm} />;
  return (
    <div className="register">
      <UserForm onFinishRegister={submitForm} />

      <Button key="submit" form="user-form" type="primary" htmlType="submit">
        Register
      </Button>

      <a
        onClick={() => {
          navigate(routes.login());
        }}
      >
        Login
      </a>
    </div>
  );
};

export default RegisterPage;
