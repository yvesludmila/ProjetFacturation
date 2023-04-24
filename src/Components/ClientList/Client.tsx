import { faker } from "@faker-js/faker";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Table,
  Tag,
  Typography,
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import React, { useState } from "react";
import { Breadcrumb } from "antd";
const generatData = () => {
  const dat = [];
  for (let i = 0; i < 8; i++) {
    dat.push({
      id: faker.datatype.number(50),
      name: faker.name.fullName(),
      address: faker.address.cityName(),
      produit: faker.commerce.product(),
      status: Math.random() > 0.5 ? true : false,
    });
  }
  return dat;
};

const data = generatData();
const Client = () => {
  const [ModalOpen, seModalOpen] = useState(false);
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Client</Breadcrumb.Item>
      </Breadcrumb>
      <Card>
        <Typography.Title>Liste des clients</Typography.Title>
      </Card>
      <Row gutter={10} style={{ marginTop: 10 }}>
        <Col span={18}>
          <Table
            dataSource={data}
            columns={[
              {
                dataIndex: "id",
                title: "id",
                key: "id",
                fixed: true,
              },
              {
                dataIndex: "name",
                title: "name",
                key: "name",
              },
              {
                dataIndex: "address",
                title: "address",
                key: "adress",
              },
              {
                dataIndex: "Produit",
                title: "Produit",
                key: "Produit",
              },
              {
                dataIndex: "status",
                title: "status",
                render: (val) =>
                  val ? <Tag>Activé</Tag> : <Tag>Non active</Tag>,
              },
              {
                title: "Action",
                render: () => (
                  <ButtonGroup>
                    <Button onClick={() => seModalOpen(true)}>Ajouter</Button>
                    <Button
                      type="primary"
                      danger
                      onClick={() => {
                        Modal.confirm({
                          title: "confirmation",
                          content: "vous etes vraiment supprimer?",
                        });
                      }}
                    >
                      Supprimer
                    </Button>
                  </ButtonGroup>
                ),
              },
            ]}
          />
        </Col>
      </Row>
      <Modal
        title="Ajouter un client"
        open={ModalOpen}
        onCancel={() => seModalOpen(false)}
      >
        <Form>
          <Form.Item label={"Nom"}>
            <Input />
          </Form.Item>
          <Form.Item label={"Adress"}>
            <Input />
          </Form.Item>
          <Form.Item label={"Produit"}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Client;
