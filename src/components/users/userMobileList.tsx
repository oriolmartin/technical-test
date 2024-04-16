import React from "react";
import { User } from "../../models/user.model";
import { List, SwipeAction } from "antd-mobile";
import { Action } from "antd-mobile/es/components/swipe-action";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface UserMobileItemProps {
  user: User;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const UserMobileItem: React.FC<UserMobileItemProps> = ({
  user,
  onEdit,
  onDelete,
}: UserMobileItemProps) => {
  const rightActions: Action[] = [
    {
      key: "edit",
      text: <EditOutlined />,
      onClick: () => {
        onEdit?.(user._id);
      },
    },
    {
      key: "delete",
      text: <DeleteOutlined />,
      onClick: () => onDelete?.(user._id),
    },
  ];

  return (
    <SwipeAction
      key={user._id}
      rightActions={!!onEdit || !!onDelete ? rightActions : undefined}
    >
      <List.Item
        key={user._id}
        onClick={() => {
          onEdit?.(user._id);
        }}
      >
        <div>
          {user.name} {user.surname}
        </div>
        <div>{user.email}</div>
      </List.Item>
    </SwipeAction>
  );
};

interface UserListProps {
  users: User[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const UserMobileList: React.FC<UserListProps> = ({
  users,
  onEdit,
  onDelete,
}: UserListProps) => {
  return (
    <List>
      {users.map((user: User) => (
        <UserMobileItem
          key={user._id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default UserMobileList;
