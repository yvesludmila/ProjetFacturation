import {
  Breadcrumb,
  Button,
  Card,
  Form,
  Input,
  Select,
  Typography,
} from "antd";
import React from "react";

const Facture = () => {
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
            //   labelCol={{ span: 4 }}
            //   wrapperCol={{ span: 14 }}
          >
            <Form.Item label="N° Facture">
              <Input type="number" />
            </Form.Item>
            <Form.Item label="Libelé">
              <Input />
            </Form.Item>
            <Form.Item label="Reférence">
              <Input />
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
                <Select.Option value="mode">Espéce</Select.Option>
                <Select.Option value="mode">Chéque</Select.Option>
                <Select.Option value="mode">Banque</Select.Option>
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
            <Typography.Paragraph>N°: 0004</Typography.Paragraph>
            <Typography.Paragraph>Libélé: meuble</Typography.Paragraph>
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
