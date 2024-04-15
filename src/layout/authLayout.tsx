import React from "react";

import { Layout } from "antd";

import Header from "./header";
import Sidebar from "./sidebar";

interface Props {
  children?: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }: Props) => (
  <Layout>
    <Header />
    <Layout>
      <Sidebar />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  </Layout>
);

export default AuthLayout;
