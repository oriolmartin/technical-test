import React, { useEffect, useState } from "react";
import UsersList from "../components/users/usersList";
import { User } from "../models/user.model";
import { API } from "../api";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  // const [refresh, setRefresh] = useState<number>(0);

  useEffect(() => {
    API.users.get().then(setUsers);
  }, []);

  // const onRefresh = (): void => {
  //   setRefresh(Math.random());
  // };

  return <UsersList users={users} />;
};

export default UsersPage;
