import { Button, Form } from "antd";
import React from "react";

interface Props {
  onSubmitForm: () => void;
}

const Logout: React.FC<Props> = ({ onSubmitForm }: Props) => {
  const onFinish = () => {
    onSubmitForm();
  };

  return (
    <div className="logout">
      <Form onFinish={onFinish}>
        <Form.Item>
          <Button type="primary" key="submit" htmlType="submit">
            Logout
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Logout;
