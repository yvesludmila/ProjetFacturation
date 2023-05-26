import { EditOutlined } from "@ant-design/icons";
import { Breadcrumb, Card, Input, Modal, Table } from "antd";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { GoDiffAdded } from "react-icons/go";
import ModalForm from "./ModalForm";
import ModalEditForm from "./ModalEditForm";

const Client = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");
  const [editingClient, setEditingClient] = useState(null);
  const [dataSource, setdataSource] = useState([
    {
      id: "1",
      nom: "TEST",
      Responsable: "TEST",
      Adress: "TEST",
      Ville: "TEST",
    },
    {
      id: "2",
      nom: "Stiler",
      Responsable: "AdminStyler",
      Adress: "london",
      Ville: "london",
    },
    {
      id: "3",
      nom: "Generi Stiler",
      Responsable: "AdminStyler",
      Adress: "france",
      Ville: "Paris",
    },
    {
      id: "4",
      nom: "ludyRK",
      Responsable: "Admin",
      Adress: "Mada",
      Ville: "tananarive",
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
      filteredValue: [search],
      onFilter: (value: any, record: any) => {
        return (
          record.id.toLowerCase().includes(value.toLowerCase()) ||
          record.nom.toLowerCase().includes(value.toLowerCase()) ||
          record.Responsable.toLowerCase().includes(value.toLowerCase()) ||
          record.Adress.toLowerCase().includes(value.toLowerCase()) ||
          record.Ville.toLowerCase().includes(value.toLowerCase())
        );
      },
    },
    {
      key: "4",
      title: "Responsable",
      dataIndex: "Responsable",
    },
    {
      key: "5",
      title: "Adress",
      dataIndex: "Adress",
    },
    {
      key: "6",
      title: "Ville",
      dataIndex: "Ville",
    },
    {
      key: "7",
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
  // const creatNewClient = (record: any) => {
  //   setIsEditing(true);
  //   setEditingClient({ ...record });
  // };

  const { Search } = Input;
  const onSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Clients</Breadcrumb.Item>
      </Breadcrumb>
      <Card
        title="Géstion clients"
        style={{ marginTop: "20px", borderTop: "3px solid #3ba0e9" }}
      >
        <Search
          placeholder="Rechercher un client"
          onSearch={onSearch}
          enterButton
          style={{ width: "20.2rem" }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Table
          bordered
          columns={columns}
          dataSource={dataSource}
          style={{ marginTop: "20px" }}
        >
          {dataSource.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.nom}</td>
                <td>{row.Responsable}</td>
              </tr>
            );
          })}
        </Table>
        <GoDiffAdded
          // onClick={creatNewClient}
          onClick={() => setModal2Open(true)}
          style={{ width: 25, height: 25, margin: "10px" }}
        />
        <Modal
          title="Ajouter un nouveau client"
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <ModalForm />
        </Modal>
        <Modal
          title="Modifier le client"
          visible={isEditing}
          onCancel={() => {
            setIsEditing(false);
          }}
          onOk={() => {
            setIsEditing(false);
          }}
        >
          <ModalEditForm />
        </Modal>
      </Card>
    </div>
  );
};

export default Client;
