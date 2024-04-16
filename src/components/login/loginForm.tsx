import React from "react";

import { Col, Form, Input, Row, message } from "antd";

import { API } from "../../api";
import { CurrentAccount } from "../../models/current-account.model";
import FormLabel from "../shared/formLabel";

interface Props {
  onFinishLogin: (currentAccount?: CurrentAccount) => void;
}
const LoginForm: React.FC<Props> = ({
  onFinishLogin: onFinishRegister,
}: Props) => {
  const [form] = Form.useForm();

  const onFinish = async (values: Record<string, any>) => {
    try {
      const currentAccount = await API.session.login(
        `${values.email}`,
        `${values.password}`
      );

      onFinishRegister(currentAccount);
      message.success("Login realizado correctamente");
    } catch (response) {
      message.error(`Error al realizar el login ${response}`);
    }
  };

  return (
    <Form
      id="login-form"
      form={form}
      onFinish={onFinish}
      className="login__form form"
    >
      <>
        <Row gutter={16}>
          <Col span={24}>
            <FormLabel label={"email"} required />
            <Form.Item rules={[{ required: true }]} name="email">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <FormLabel label={"password"} required />
            <Form.Item rules={[{ required: true }]} name="password">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </>
    </Form>
  );
};

export default LoginForm;
