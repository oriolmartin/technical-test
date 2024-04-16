import React, { useEffect, useState } from "react";
import UsersList from "../components/users/usersList";
import { User } from "../models/user.model";
import { API } from "../api";
import UserForm from "../components/users/userForm";
import ModalForm from "../components/shared/modalForm";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<User>();
  const [isFormModalVisible, setIsFormModalVisible] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<number>(0);
  const [isFormTouched, setIsFormTouched] = useState<boolean>(false);

  useEffect(() => {
    API.users.get().then(setUsers);
  }, [refresh]);

  const onRefresh = (): void => {
    setRefresh(Math.random());
  };

  const onClose = (): void => {
    setIsFormModalVisible(false);
    setIsFormTouched(false);
  };

  const onEdit = (selectedId: string): void => {
    API.users.show(selectedId).then((user: User) => {
      setSelected(user);
      setIsFormModalVisible(true);
    });
  };

  return (
    <>
      <UsersList users={users} onEdit={onEdit} />

      {!!isFormModalVisible && (
        <ModalForm
          formModalTitle={"Editar usuario"}
          isFormModalVisible={isFormModalVisible}
          onCancel={onClose}
          formId="user-form"
          isFormTouched={isFormTouched}
        >
          <UserForm
            user={selected}
            onCloseForm={() => {
              onClose();
              onRefresh();
            }}
            setIsFormTouched={setIsFormTouched}
          />
        </ModalForm>
      )}
    </>
  );
};

export default UsersPage;
