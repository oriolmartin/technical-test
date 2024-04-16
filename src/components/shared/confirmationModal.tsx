import React from "react";

import { Modal } from "antd";

interface Props {
  isFormModalVisible: boolean;
  onFinish?: () => void;
  onCancel: () => void;
  confirmationMessage: string;
}

const ConfirmationModal: React.FC<Props> = ({
  isFormModalVisible,
  onFinish,
  onCancel,
  confirmationMessage,
}: Props) => {
  return (
    <Modal
      title="Confirmación"
      centered
      open={isFormModalVisible}
      destroyOnClose
      onCancel={onCancel}
      onOk={onFinish}
      maskClosable={false}
      keyboard={false}
    >
      {confirmationMessage}
    </Modal>
  );
};

export default ConfirmationModal;
