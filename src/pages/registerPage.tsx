import React from "react";

import { API } from "../api";
import Register from "../components/register/register";
import routes from "../routes";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const submitForm = async (
    email: string,
    password: string,
    name: string,
    surname: string
  ): Promise<void> => {
    try {
      await API.session.register({ email, password, name, surname });
      navigate(routes.home());
    } catch (ex) {
      //TODO: mostrar error al loguearse
    }
  };

  return <Register onSubmitForm={submitForm} />;
};

export default RegisterPage;
