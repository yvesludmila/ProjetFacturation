import {
  Breadcrumb,
  Button,
  Card,
  Form,
  Input,
  Select,
  Typography,
} from "antd";
import React, { useState } from "react";

const Facture = () => {
  const [inputValue, setinputValue] = useState([]);
  const [inputData, setInputData] = useState({
    numFact: "",
    lib: "",
    ref: "",
  });

  const Change = () => {
    setinputValue({ ...inputValue });
  };
  console.log(inputData);
  console.log(inputValue);

  const handleChange = (e: any) => {
    e.preventDefault(e);
    setInputData({ ...inputData, [e.target.numFact]: e.target.value });
    setInputData({ ...inputData, [e.target.lib]: e.target.value });
    setInputData({ ...inputData, [e.target.ref]: e.target.value });
  };

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Facture</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ display: "flex" }}>
        <Card
          title="Géstion des facture"
          style={{
            marginTop: "20px",
            borderTop: "3px solid gray",
            width: "650px",
            height: "320px",
          }}
        >
          <Form
            style={{ maxWidth: 1000, display: "flex", gap: "20px" }}
            layout="vertical"
          >
            <Form.Item label="N° Facture">
              <Input value={inputData.numFact} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Libelé">
              <Input value={inputData.lib} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Reférence">
              <Input value={inputData.ref} onChange={handleChange} />
            </Form.Item>
          </Form>

          <Form
            style={{ maxWidth: 1000, display: "flex", gap: "20px" }}
            layout="vertical"
          >
            <Form.Item label="Condition de paiment">
              <Input />
            </Form.Item>
            <Form.Item label="Date">
              <Input type="date" style={{ width: "185px" }} />
            </Form.Item>

            <Form.Item label="Mode de paiment">
              <Select style={{ width: "185px" }}>
                <Select.Option value="ESPECE">Espéce</Select.Option>
                <Select.Option value="CHEQUE">Chéque</Select.Option>
                <Select.Option value="BANQUE">Banque</Select.Option>
              </Select>
            </Form.Item>
          </Form>
          <Button type="primary" htmlType="submit" onClick={Change}>
            Valider
          </Button>
        </Card>
        <Card
          title="Resumé de facture"
          style={{
            width: "300px",
            margin: "20px",
            height: "380px",
            borderTop: "3px solid gray",
          }}
        >
          <Typography>
            <Typography.Paragraph>N°: {inputData.numFact}</Typography.Paragraph>
            <Typography.Paragraph>Libélé: {inputData.lib}</Typography.Paragraph>
            <Typography.Paragraph>Reference: 003acd</Typography.Paragraph>
            <Typography.Paragraph>Condition: 3 mois</Typography.Paragraph>
            <Typography.Paragraph>Date: 00/04/23</Typography.Paragraph>
            <Typography.Paragraph>Paiment: éspece</Typography.Paragraph>
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default Facture;
