import React from "react";

import { Modal } from "antd";

interface Props {
  isFormModalVisible: boolean;
  onFinish?: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<Props> = ({
  isFormModalVisible,
  onFinish,
  onCancel,
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
      Hay cambios no guardados, ¿desea continuar?
    </Modal>
  );
};

export default ConfirmationModal;
