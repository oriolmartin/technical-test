import React from "react";
import { User } from "../../models/user.model";
import FormattedTable from "../shared/table";

interface Props {
  users: User[];
}

const UsersList: React.FC<Props> = ({ users }: Props) => {
  const data = users.map((user: User) => {
    return {
      id: user._id,
      key: user._id,
      email: user.email,
      name: user.name,
      surname: user.surname,
    };
  });

  const COLS = ["Name", "Surname", "Email"];

  return <FormattedTable data={data} columns={COLS} />;
};

export default UsersList;
