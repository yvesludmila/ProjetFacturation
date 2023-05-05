// import { faker } from "@faker-js/faker";
// import {
//   Button,
//   Card,
//   Col,
//   Form,
//   Input,
//   Modal,
//   Row,
//   Table,
//   Tag,
//   Typography,
// } from "antd";
// import ButtonGroup from "antd/es/button/button-group";
// import React, { useState } from "react";
// import { Breadcrumb } from "antd";
// const generatData = () => {
//   const dat = [];
//   for (let i = 0; i < 8; i++) {
//     dat.push({
//       id: faker.datatype.number(50),
//       name: faker.name.fullName(),
//       address: faker.address.cityName(),
//       produit: faker.commerce.product(),
//       status: Math.random() > 0.5 ? true : false,
//     });
//   }
//   return dat;
// };

// const data = generatData();
// const Client = () => {
//   const [ModalOpen, seModalOpen] = useState(false);
//   return (
//     <div>
//       <Breadcrumb>
//         <Breadcrumb.Item>Clients</Breadcrumb.Item>
//       </Breadcrumb>
//       <Card style={{ marginTop: "20px" }}>
//         <Typography.Title style={{ fontSize: "16px" }}>
//           Liste des clients
//         </Typography.Title>
//       </Card>
//       <Row gutter={10} style={{ marginTop: 10 }}>
//         <Col span={18}>
//           <Table
//             dataSource={data}
//             columns={[
//               {
//                 dataIndex: "id",
//                 title: "id",
//                 key: "id",
//                 fixed: true,
//               },
//               {
//                 dataIndex: "name",
//                 title: "name",
//                 key: "name",
//               },
//               {
//                 dataIndex: "address",
//                 title: "address",
//                 key: "adress",
//               },
//               {
//                 dataIndex: "Produit",
//                 title: "Produit",
//                 key: "Produit",
//               },
//               {
//                 dataIndex: "status",
//                 title: "status",
//                 render: (val) =>
//                   val ? <Tag>Activé</Tag> : <Tag>Non active</Tag>,
//               },
//               {
//                 title: "Action",
//                 render: () => (
//                   <ButtonGroup>
//                     <Button onClick={() => seModalOpen(true)}>Ajouter</Button>
//                     <Button
//                       type="primary"
//                       danger
//                       onClick={() => {
//                         Modal.confirm({
//                           title: "confirmation",
//                           content: "vous etes vraiment supprimer?",
//                         });
//                       }}
//                     >
//                       Supprimer
//                     </Button>
//                   </ButtonGroup>
//                 ),
//               },
//             ]}
//           />
//         </Col>
//       </Row>
//       <Modal
//         title="Ajouter un client"
//         open={ModalOpen}
//         onCancel={() => seModalOpen(false)}
//       >
//         <Form>
//           <Form.Item label={"Nom"}>
//             <Input />
//           </Form.Item>
//           <Form.Item label={"Adress"}>
//             <Input />
//           </Form.Item>
//           <Form.Item label={"Produit"}>
//             <Input />
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default Client;

import { EditOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Card, Form, Input, Modal, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { GoDiffAdded } from "react-icons/go";

const Client = () => {
  // interface DataType {
  //   id: any;
  //   nom: string;
  //   Adress: string;
  // }

  const [isEditing, setIsEditing] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [dataSource, setdataSource] = useState([
    {
      id: "1",
      nom: "TEST",
      Adress: "TEST",
    },
    {
      id: "2",
      nom: "abab",
      Adress: "add",
    },
    {
      id: "3",
      nom: "azerty",
      Adress: "add",
    },
  ]);
  const columns = [
    {
      key: "id",
      title: "id",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "nom",
      dataIndex: "nom",
    },
    {
      key: "3",
      title: "Adress",
      dataIndex: "Adress",
    },
    {
      key: "4",
      title: "Actions",
      render: (record: any) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                editClient(record);
              }}
            />
            <MdDeleteOutline
              onClick={() => {
                DeleteClient(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  const addClient = () => {
    const randomNumber = Math.random() * 1000;
    const newClient = {
      id: randomNumber,
      nom: "nom",
      Adress: "add",
    };
    setdataSource((pre): any => {
      return [...pre, newClient];
    });
  };
  const DeleteClient = (record: any) => {
    Modal.confirm({
      title: "êtes-vous vraiment supprimer?",
      okText: "yes",
      onOk: () => {
        setdataSource((pre): any => {
          return pre.filter((CLIENT) => CLIENT.id !== record.id);
        });
      },
    });
  };
  const editClient = (record: any) => {
    setIsEditing(true);
    setEditingClient({ ...record });
  };
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Clients</Breadcrumb.Item>
      </Breadcrumb>
      <Card
        title="Géstion clients"
        style={{ marginTop: "20px", borderTop: "3px solid gray" }}
      >
        <Table bordered columns={columns} dataSource={dataSource}></Table>
        <GoDiffAdded
          onClick={addClient}
          style={{ width: 25, height: 25, margin: "10px" }}
        />
        {/* <Button onClick={addClient}>Ajouter</Button> */}
        <Modal
          title="Ajouter un nouveau client"
          visible={isEditing}
          onCancel={() => {
            setIsEditing(false);
          }}
          onOk={() => {
            setIsEditing(false);
          }}
        >
          <Form>
            <Form.Item label="Nom">
              <Input />
            </Form.Item>
            <Form.Item label="Adress">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </div>
  );
};

export default Client;
