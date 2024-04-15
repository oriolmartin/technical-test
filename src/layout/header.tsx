import React from "react";

import { UserOutlined } from "@ant-design/icons";
import { Layout, Avatar } from "antd";

const Header: React.FC = () => {
  return (
    <Layout.Header className="header">
      <Avatar icon={<UserOutlined />} />
    </Layout.Header>
  );
};

export default Header;
