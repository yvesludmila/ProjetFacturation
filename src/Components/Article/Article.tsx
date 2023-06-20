import { Breadcrumb, Card, Form, Input, Select } from "antd";
import React from "react";

const Article = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Article</Breadcrumb.Item>
      </Breadcrumb>
      <Card
        title="Gestion article"
        style={{
          marginTop: "20px",
          borderTop: "3px solid #3ba0e9",
        }}
      >
        <Form
          style={{ maxWidth: 1000, display: "flex", gap: "20px" }}
          layout="vertical"
        >
          <Form.Item label="Type article">
            <Input />
          </Form.Item>
          <Form.Item label="Reférence">
            <Input />
          </Form.Item>
          <Form.Item label="Désignetion">
            <Input />
          </Form.Item>
          <Form.Item label="Unité de gestion">
            <Select style={{ width: "185px" }}>
              <Select.Option value="carton">Carton</Select.Option>
              <Select.Option value="boite">Boite</Select.Option>
              <Select.Option value="piece">Piéce</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Card>
      <div style={{ display: "flex", gap: "100px", marginTop: "50px" }}>
        <Card
          title="Prix/unité"
          style={{
            width: "550px",
            borderTop: "3px solid #3ba0e9",
          }}
        ></Card>
        <Card
          title="Condition de vente et achat"
          style={{
            width: "550px",
            borderTop: "3px solid #3ba0e9",
          }}
        ></Card>
      </div>
    </div>
  );
};

export default Article;
