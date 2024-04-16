import React from "react";
import { User } from "../../models/user.model";
import FormattedTable from "../shared/table";
import { Button, Space } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface Props {
  users: User[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

interface UserTableItem {
  id: string;
  key: string;
  name: string;
  surname: string;
  email: string;
}

const UsersList: React.FC<Props> = ({ users, onEdit, onDelete }: Props) => {
  const data: UserTableItem[] = users.map((user: User) => {
    return {
      id: user._id,
      key: user._id,
      email: user.email,
      name: user.name,
      surname: user.surname,
    };
  });

  const COLS = ["Name", "Surname", "Email"];

  const actions = (_: string, record: UserTableItem): React.ReactNode => (
    <Space>
      {!!onEdit && (
        <Button
          type="link"
          onClick={() => {
            onEdit(record.id);
          }}
        >
          <EditOutlined />
        </Button>
      )}
      {!!onDelete && (
        <Button
          type="link"
          onClick={() => {
            onDelete(record.id);
          }}
        >
          <DeleteOutlined />
        </Button>
      )}
    </Space>
  );

  return <FormattedTable data={data} columns={COLS} actions={actions} />;
};

export default UsersList;
