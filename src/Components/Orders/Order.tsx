import React, { useState } from 'react';
import { Table, Space, Button, Modal,  Input } from 'antd';
import { Form, Select } from 'antd';
import { InputNumber } from 'antd';

interface Client {
  id: number;
  objet: string;
  quantité: number;
  prix: number;
  devise:string;
  total: number;

  
 
}

const ClientTable: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState<number | null>(null);
  const [form] = Form.useForm();
  const { Option } = Select;
    let prixTotal: number = 0;
    let sousTotal: number = 0;
  
  const handleAddClient = () => {
    form.validateFields().then((values) => {
      const sousTotal: number = values.quantité * values.prix;
      const newClient: Client = {
        id: clients.length + 1,
        objet: values.objet,
        quantité: values.quantité,
        prix: values.prix,
        devise:values.devise,
        total:  prixTotal += sousTotal,
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
    const columns = [
    {
      title: 'Objet',
      dataIndex: 'objet',
      key: 'objet',
    },
    {
      title: 'Quantité',
      dataIndex: 'quantité',
      key: 'quantité',
    },
    {
      title: 'prix',
      dataIndex: 'prix',
      key: 'prix',
    },
    {
      title: 'Devise',
      dataIndex: 'devise',
      key: 'devise',
    },

    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },

    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, client: Client) => (
        <Space size="middle">
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
        Ajouter Votre Commande
      </Button>

      <Modal
        title={selectedClientId ? 'Edit Client' : 'Nouveau Commande'}
        visible={isModalVisible}
        
        onOk={selectedClientId ? handleAddClient : handleAddClient}
      >

      <Form form={form} layout="vertical">
      <Form.Item label="Objet" name="objet" rules={[{ required: true }]}>
      <Select>
     <Select.Option value="Création et Refonte site web">Création et Refonte site web</Select.Option>
      <Select.Option value="Création et Contenu Web">Création et Contenu Web</Select.Option>
       <Select.Option value="Réferencement SEO">Réferencement SEO</Select.Option>
       <Select.Option value="Ads-SEA & Social">Ads-SEA & Social</Select.Option>
     </Select>
    </Form.Item>

    
        <Form.Item label="Quantité" name="quantité" rules={[{ required: true }]}>
        <InputNumber min={1} max={100} />
        </Form.Item>
        <Form.Item label="Prix" name="prix" rules={[{ required: true }]}>
        <Input/>
        </Form.Item>
        <Form.Item label="Devise" name="devise" rules={[{ required: true }]}>
        <Select>
          <Select.Option value="EUR">EUR</Select.Option>
          <Select.Option value="USD">USD</Select.Option>
          <Select.Option value="ARIARY">ARIARY</Select.Option>
        </Select>
      </Form.Item>
       </Form>
      </Modal>
<Table columns={columns} dataSource={clients} />
  </div>
  );
};

export default ClientTable
