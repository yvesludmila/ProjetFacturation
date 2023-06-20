import { Form, Input } from "antd";
import React, { useState } from "react";

const ModalEditForm = () => {
  return (
    <div>
      <Form>
        <Form.Item label="Nom">
          <Input />
        </Form.Item>
        <Form.Item label="Responsable">
          <Input />
        </Form.Item>
        <Form.Item label="Adress">
          <Input />
        </Form.Item>
        <Form.Item label="Ville">
          <Input />
        </Form.Item>
        <Form.Item label="Mail">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ModalEditForm;
