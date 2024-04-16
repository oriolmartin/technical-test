import React, { useState } from "react";

import { Button, Modal } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { usePromiseTracker } from "react-promise-tracker";
import classNames from "classnames";
import LoadingSpinner from "../../layout/loadingSpinner";
import ConfirmationModal from "./confirmationModal";

interface Props {
  formModalTitle: string;
  isFormModalVisible: boolean;
  onFinish?: () => void;
  onCancel: () => void;
  children: React.ReactNode;
  formId?: string;
  readOnly?: boolean;
  className?: string;
  isFormTouched?: boolean;
}

const ModalForm: React.FC<Props> = ({
  formModalTitle,
  isFormModalVisible,
  onFinish,
  onCancel,
  children,
  formId,
  readOnly,
  className,
  isFormTouched,
}: Props) => {
  const { promiseInProgress } = usePromiseTracker();
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
    useState<boolean>(false);

  const onClose = () => {
    if (isFormTouched) {
      setIsConfirmationModalVisible(true);
    } else {
      onCancel();
    }
  };

  const footer: React.ReactNode[] = [
    <Button
      key="cancel"
      form={formId}
      onClick={onClose}
      disabled={promiseInProgress}
    >
      <CloseOutlined />
    </Button>,
    !readOnly && (
      <Button
        key="submit"
        form={formId}
        type="primary"
        htmlType="submit"
        disabled={promiseInProgress}
        onClick={onFinish}
      >
        <CheckOutlined />
      </Button>
    ),
  ];

  return (
    <>
      <Modal
        title={<span className="modal-title">{formModalTitle}</span>}
        centered
        open={isFormModalVisible}
        destroyOnClose
        footer={footer}
        onCancel={onClose}
        className={classNames("modal__form", className)}
        maskClosable={false}
        keyboard={false}
      >
        <LoadingSpinner>{children}</LoadingSpinner>
      </Modal>

      <ConfirmationModal
        isFormModalVisible={isConfirmationModalVisible}
        onCancel={() => {
          setIsConfirmationModalVisible(false);
        }}
        onFinish={onCancel}
        confirmationMessage="Hay cambios no guardados, ¿desea continuar?"
      />
    </>
  );
};

export default ModalForm;
