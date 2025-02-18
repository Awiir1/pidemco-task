"use client";

import { Button, Modal, Result } from "antd";

interface PopUpProps {
  status: "success" | "error" | "info" | "warning" | "404" | "403" | "500";
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PopUp({
  status,
  title,
  description,
  isOpen,
  onClose,
}: PopUpProps) {
  if (!isOpen) return null;

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      className="text-center"
    >
      <Result
        status={status}
        title={title}
        extra={[
          <p key="description">{description}</p>,
          <Button className="text-2xl font-semibold mt-3 px-10 py-5" type="primary" key="console" onClick={onClose}>
           Confirm
          </Button>,
        ]}
        className="text-center"
      />
    </Modal>
  );
}
