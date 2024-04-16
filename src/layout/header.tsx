import React from "react";

import { UserOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Avatar } from "antd";

import { useNavigate } from "react-router-dom";
import routes from "../routes";
import useEnvironment from "../hooks/useEnvironment";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile, setIsMenuOpen } = useEnvironment();

  return (
    <Layout.Header className="header">
      {isMobile && (
        <MenuUnfoldOutlined
          className="menu-icon"
          onClick={() => {
            setIsMenuOpen(true);
          }}
        />
      )}
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
