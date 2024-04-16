import React, { useEffect, useState } from "react";
import UsersList from "../components/users/usersList";
import { User } from "../models/user.model";
import { API } from "../api";
import UserForm from "../components/users/userForm";
import ModalForm from "../components/shared/modalForm";
import ConfirmationModal from "../components/shared/confirmationModal";
import useEnvironment from "../hooks/useEnvironment";
import UserMobileList from "../components/users/userMobileList";

const UsersPage: React.FC = () => {
  const { isMobile } = useEnvironment();
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<User>();
  const [isFormModalVisible, setIsFormModalVisible] = useState<boolean>(false);
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    useState<boolean>(false);
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

  const onDelete = (selectedId: string): void => {
    setSelected(users.find((user: User) => user._id === selectedId));
    setIsConfirmationModalVisible(true);
  };

  return (
    <>
      {isMobile ? (
        <UserMobileList users={users} onEdit={onEdit} onDelete={onDelete} />
      ) : (
        <UsersList users={users} onEdit={onEdit} onDelete={onDelete} />
      )}

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

      <ConfirmationModal
        isFormModalVisible={isConfirmationModalVisible}
        onCancel={() => {
          setIsConfirmationModalVisible(false);
        }}
        onFinish={async () => {
          if (!!selected) {
            await API.users.delete(selected._id);
            setIsConfirmationModalVisible(false);
            onRefresh();
          }
        }}
        confirmationMessage="Se va a eliminar el registro seleccionado, ¿continuar?"
      />
    </>
  );
};

export default UsersPage;
