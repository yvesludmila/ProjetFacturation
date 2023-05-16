import {
  Breadcrumb,
  Button,
  Card,
  Divider,
  Drawer,
  Form,
  Input,
  Select,
  Table,
  Typography,
} from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import FactureCli from "./FactureCli";
import RecoveryFact from "./RecoveryFact";
import InvoiceFooter from "./InvoiceFooter";
import { BsFillPrinterFill } from "react-icons/bs";
const { Text } = Typography;
const Facture = () => {
  const [inputArray, setInputArray] = useState([]);
  const [state, setState] = useState({ numFact: "", lib: "" });
  const handleChange = (e: any) => {
    // e.preventDefault(e);
    setState({ ...state, [e.target.numFact]: e.target.value });
    setState({ ...state, [e.target.lib]: e.target.value });
  };
  const Change = () => {
    setInputArray([...inputArray]);
    console.log(inputArray);
    console.log(state);
  };

  //DRAWER
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
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
              <Input onChange={handleChange} value={state.numFact} /> <br />
            </Form.Item>
            <Form.Item label="Libelé">
              <Input onChange={handleChange} value={state.lib} /> <br />
            </Form.Item>
            <Form.Item label="Prix unitaire">
              <Input onChange={handleChange} /> <br />
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
          <div>
            <Button type="primary" htmlType="submit" onClick={Change}>
              Valider
            </Button>
            <Button
              type="primary"
              style={{ marginLeft: "20px" }}
              onClick={showDrawer}
            >
              Voir facture
            </Button>
          </div>
        </Card>

        <Drawer
          title="Fermer"
          placement="right"
          onClose={onClose}
          open={open}
          size="large"
        >
          <Card title="FACTURE">
            <Card
              style={{
                width: 300,
                border: "2px solid gray",
                borderRadius: "30px",
              }}
            >
              <Typography style={{ textAlign: "center" }}>
                <Title level={5}>MADA CREATIVE AGENCY</Title>
                <Typography.Paragraph style={{ margin: 0 }}>
                  Lot UV 178 Bis Miandrarivo
                </Typography.Paragraph>
                <Typography.Paragraph style={{ margin: 0 }}>
                  Tananarive 101, Madagascar
                </Typography.Paragraph>
                <Typography.Paragraph style={{ margin: 0 }}>
                  Mail: <a>madacreativeagency@gmail.com</a>
                </Typography.Paragraph>
                <Typography.Paragraph style={{ margin: 0 }}>
                  Gerant: Ambina HARISON
                </Typography.Paragraph>
                <Typography.Paragraph style={{ margin: 0 }}>
                  Tel: +261 33 09 193 89
                </Typography.Paragraph>
              </Typography>
            </Card>
            <Divider />
            <FactureCli />
            <RecoveryFact />
            <div style={{ marginTop: "40px" }}>
              <Typography>
                <Typography.Paragraph style={{ margin: 0 }}>
                  <strong>Arrétér a la somme de:</strong> un dollars
                </Typography.Paragraph>
                <Typography.Paragraph style={{ margin: 0 }}>
                  <strong>condition de réglement:</strong> par virement PayPal
                  au compte de <a href="/">madacreativeagency@gmail.com</a>
                </Typography.Paragraph>
              </Typography>
            </div>
            <InvoiceFooter />
          </Card>
          <div style={{ margin: "50px" }}>
            <Button
              style={{
                padding: "5px",
                alignItems: "center",
                width: "120px",
              }}
            >
              {" "}
              <BsFillPrinterFill style={{ marginRight: "12px" }} /> Imprimer
            </Button>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Facture;
