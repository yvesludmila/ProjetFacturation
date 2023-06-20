import React, { useState } from 'react';
import { Table, Space, Button, Modal, Form, Input } from 'antd';

interface Client {
  id: number;
  société: string;
  résponsable: string;
  adresse: string;
  ville: string;
  email: string;
  nif: number;
}

const ClientTable: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);
  const [form] = Form.useForm();

  const handleAddClient = () => {
    form.validateFields().then((values) => {
      const newClient: Client = {
        id: clients.length + 1,
        société: values.société,
        résponsable: values.résponsable,
        adresse: values.adresse,
        ville: values.ville,
        email: values.email,
        nif: values.nif,
      };

      setClients([...clients, newClient]);
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const handleDeleteClient = (clientId: number) => {
    const updatedClients = clients.filter((client) => client.id !== clientId);
    setClients(updatedClients);
  };

  const handleEditClient = (clientId: number) => {
    const client = clients.find((c) => c.id === clientId);
    if (client) {
      form.setFieldsValue({
        société: client.société,
        résponsable: client.résponsable,
        adresse: client.adresse,
        ville: client.ville,
        email: client.email,
        nif: client.nif,
      });
      setSelectedClientId(clientId);
      setIsModalVisible(true);
    }
  };

  const handleUpdateClient = () => {
    form.validateFields().then((values) => {
      const updatedClients = clients.map((client) => {
        if (client.id === selectedClientId) {
          return {
            ...client,
            société: values.société,
            résponsable:values.résponsable,
            adresse:values.adresse,
            ville:values.ville,
            email: values.email,
            nif:values.nif,
          };
        }
        return client;
      });

      setClients(updatedClients);
      form.resetFields();
      setSelectedClientId(null);
      setIsModalVisible(false);
    });
  };

  const columns = [
    {
      title: 'Société',
      dataIndex: 'société',
      key: 'société',
    },
    {
      title: 'Résponsable',
      dataIndex: 'résponsable',
      key: 'résponsable',
    },
    {
      title: 'Adresse',
      dataIndex: 'adresse',
      key: 'adresse',
    },
    {
      title: 'Ville',
      dataIndex: 'ville',
      key: 'ville',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Nif',
      dataIndex: 'nif',
      key: 'nif',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, client: Client) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEditClient(client.id)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDeleteClient(client.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Add Client
      </Button>

      <Modal
        title={selectedClientId ? 'Edit Client' : 'Add Client'}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setSelectedClientId(null);
        }}
        onOk={selectedClientId ? handleUpdateClient : handleAddClient}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Société" name="société" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Résponsable" name="résponsable" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Adresse" name="adresse" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Ville" name="ville" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Nif" name="nif" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Table columns={columns} dataSource={clients} />
    </div>
  );
};

export default ClientTable
