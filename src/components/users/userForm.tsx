import React from "react";

import { Form, message } from "antd";

import { API } from "../../api";
import UserFormBasic from "./userFormBasic";
import { User } from "../../models/user.model";

function getUserInitialValues(user?: User): Record<string, any> {
  if (!user) {
    return {};
  }

  const { ...userProps } = user;

  return { ...userProps, password: undefined };
}

interface Props {
  user?: User;
  onCloseForm?: () => void;
  setIsFormTouched?: (isFormTouched: boolean) => void;
  onFinishRegister?: () => void;
}
const UserForm: React.FC<Props> = ({
  user,
  onCloseForm,
  setIsFormTouched,
  onFinishRegister,
}: Props) => {
  const [form] = Form.useForm();

  const initialValues = getUserInitialValues(user);

  const onFinish = async (values: Record<string, any>) => {
    const userFormParams = {
      ...initialValues,
      ...values,
      id: user?._id,
    };

    try {
      await (!!user
        ? API.users.edit(userFormParams)
        : API.session.register(userFormParams)
      ).then(() => {
        onCloseForm?.();
        onFinishRegister?.();
      });

      message.success("Formulario guardado con éxito");
    } catch (response) {
      message.error(`Error al guardar el formulario ${response}`);
    }
  };

  return (
    <Form
      id="user-form"
      form={form}
      initialValues={initialValues}
      onFinish={onFinish}
      className="user__form form"
      onValuesChange={() => {
        setIsFormTouched?.(true);
      }}
    >
      <UserFormBasic user={user} />
    </Form>
  );
};

export default UserForm;
