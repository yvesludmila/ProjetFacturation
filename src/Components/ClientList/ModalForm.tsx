import { Form, Input, Modal } from "antd";
import React, { useState } from "react";

const ModalForm = () => {
  const [FormState, setFormState] = useState({
    Nom: "",
    Responsable: "",
    Adress: "",
    Ville: "",
  });

  const handleChange = (e: any) => {
    setFormState({ ...FormState, [e.target.Nom]: e.target.value });
  };
  console.log(FormState);
  return (
    <div>
      <Form>
        <Form.Item label="Nom">
          <Input value={FormState.Nom} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Responsable">
          <Input value={FormState.Responsable} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Adress">
          <Input value={FormState.Adress} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Ville">
          <Input value={FormState.Ville} onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Mail">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ModalForm;
