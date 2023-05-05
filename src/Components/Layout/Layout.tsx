import { Card, Layout, Menu, Spin } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { Typography, Breadcrumb } from "antd";
import "../Style/Dashboard.scss";
import SiderMenu from "../SiderMenu/SiderMenu";
import AppRoutes from "../AppRoutes/AppRoutes";

const { Title } = Typography;

const App: React.FC = () => (
  <Layout className="container">
    <Header className="header" style={{ backgroundColor: "white" }}>
      <Title level={3}>Facturation</Title>
    </Header>
    <Layout>
      <Sider theme="light">
        <SiderMenu />
      </Sider>
      <Content className="content">
        <AppRoutes />
      </Content>
    </Layout>
  </Layout>
);
export default App;
