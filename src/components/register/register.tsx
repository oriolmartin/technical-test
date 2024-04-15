import { Button, Input, Form } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";

interface Props {
  onSubmitForm: (
    email: string,
    password: string,
    name: string,
    surname: string
  ) => void;
}

const Register: React.FC<Props> = ({ onSubmitForm }: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };
  const onFinish = (form: Record<string, string>) => {
    onSubmitForm(form.email, form.password, form.name, form.surname);
  };

  return (
    <div className="register">
      <Form onFinish={onFinish}>
        <span className="register__hint">Email</span>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "El email es obligatorio",
            },
          ]}
        >
          <Input
            value={email}
            onChange={onEmailChange}
            id="email"
            type="text"
            name="email"
            autoComplete="username"
            placeholder="Email"
            aria-required="true"
          />
        </Form.Item>

        <span className="register__hint">Password</span>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "El password es obligatorio",
            },
          ]}
        >
          <Input
            value={password}
            onChange={onPasswordChange}
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
            aria-required="true"
          />
        </Form.Item>

        <span className="register__hint">Name</span>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "El nombre es obligatorio",
            },
          ]}
        >
          <Input
            value={name}
            onChange={onNameChange}
            id="name"
            type="name"
            name="name"
            placeholder="Name"
            aria-required="true"
          />
        </Form.Item>

        <span className="register__hint">Surname</span>
        <Form.Item
          name="surname"
          rules={[
            {
              required: true,
              message: "El apellido es obligatorio",
            },
          ]}
        >
          <Input
            value={surname}
            onChange={onSurnameChange}
            id="surname"
            type="surname"
            name="surname"
            placeholder="Surname"
            aria-required="true"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" key="submit" htmlType="submit">
            Register
          </Button>
        </Form.Item>

        <a
          onClick={() => {
            navigate(routes.login());
          }}
        >
          Login
        </a>
      </Form>
    </div>
  );
};

export default Register;
