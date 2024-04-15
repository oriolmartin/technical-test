import React from "react";

import { UserOutlined } from "@ant-design/icons";
import { Layout, Avatar } from "antd";

import { useNavigate } from "react-router-dom";
import routes from "../routes";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout.Header className="header">
      <Avatar
        className="user-icon"
        icon={<UserOutlined />}
        onClick={() => {
          navigate(routes.logout());
        }}
      />
    </Layout.Header>
  );
};

export default Header;
