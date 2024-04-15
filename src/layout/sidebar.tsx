import React, { useMemo } from "react";

import { Menu, Layout } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";

import { UserOutlined } from "@ant-design/icons";

import { useLocation, useNavigate } from "react-router-dom";
import routes from "../routes";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedMenu = useMemo(() => {
    const paths = location.pathname.split("/");
    const mainPathName = paths?.[1] || "home";

    return mainPathName;
  }, [location.pathname]);

  const items: ItemType[] = [
    {
      key: routes.users().substring(1),
      label: "Usuarios",
      icon: <UserOutlined />,
      onClick: () => {
        navigate(routes.users());
      },
    },
  ];

  return (
    <Layout.Sider className="sider">
      <Menu theme="dark" selectedKeys={[selectedMenu]} items={items} />
    </Layout.Sider>
  );
};

export default Sidebar;
