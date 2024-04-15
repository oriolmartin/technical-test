import { Button, Input, Form } from "antd";
import React, { useState } from "react";

interface Props {
  onSubmitForm: (email: string, password: string) => void;
}

const Login: React.FC<Props> = ({ onSubmitForm }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onFinish = (form: Record<string, string>) => {
    onSubmitForm(form.email, form.password);
  };

  return (
    <div className="login">
      <Form onFinish={onFinish}>
        <span className="login__hint">Email</span>
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

        <span className="login__hint">Password</span>
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

        <Form.Item>
          <Button type="primary" key="submit" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
