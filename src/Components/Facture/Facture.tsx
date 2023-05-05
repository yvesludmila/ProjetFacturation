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
  // const [inputValue, setinputValue] = useState([]);
  // const [inputData, setInputData] = useState({
  //   numFact: "",
  //   lib: "",
  //   ref: "",
  // });

  // const Change = () => {
  //   setinputValue({ ...inputValue });
  // };
  const [state, setState] = useState({
    numFact: "",
    lib: "",
    ref: "",
  });

  const handleChange = (e: any) => {
    setState(e.target.value);
    // setState({ ...state, [e.target.numFact]: e.target.value });
    // setState({ ...state, [e.target.lib]: e.target.value });
    // setState({ ...state, [e.target.ref]: e.target.value });

    // setInputData({ ...inputData, [e.target.numFact]: e.target.value });
    // setInputData({ ...inputData, [e.target.lib]: e.target.value });
    // setInputData({ ...inputData, [e.target.ref]: e.target.value });
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
              <Input onChange={handleChange} value={state.numFact} />
            </Form.Item>
            <Form.Item label="Libelé">
              <Input onChange={handleChange} value={state.lib} />
            </Form.Item>
            <Form.Item label="Reférence">
              <Input onChange={handleChange} value={state.ref} />
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
          <Button type="primary" htmlType="submit">
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
            <Typography.Paragraph>N°: {state.numFact}</Typography.Paragraph>
            <Typography.Paragraph>Libélé: {state.lib} </Typography.Paragraph>
            <Typography.Paragraph>Reference: {state.ref} </Typography.Paragraph>
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
