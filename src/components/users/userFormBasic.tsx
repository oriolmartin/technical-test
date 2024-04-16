import React from "react";

import { Row, Col, Input, Form } from "antd";

import FormLabel from "../shared/formLabel";
import { User } from "../../models/user.model";

interface Props {
  user?: User;
}

const UserFormBasic: React.FC<Props> = ({ user }: Props) => {
  return (
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
          <FormLabel label={"password"} required={!!!user} />
          <Form.Item rules={[{ required: !!!user }]} name="password">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <FormLabel label={"name"} required />
          <Form.Item rules={[{ required: true }]} name="name">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <FormLabel label={"surname"} required />
          <Form.Item rules={[{ required: true }]} name="surname">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default UserFormBasic;
