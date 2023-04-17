import { Card, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { Typography, Breadcrumb } from "antd";
import "../Style/Dashboard.scss";
import SiderMenu from "../SiderMenu/SiderMenu";
import Dashboard from "../Dashboard/Dashboard";
const { Title } = Typography;
const App: React.FC = () => (
  <Layout className="container">
    <Header
      className="header"
      style={{ backgroundColor: "white", borderBottom: "1px solid grey" }}
    >
      <Title level={3}>Facturation</Title>
    </Header>
    <Layout>
      <Sider theme="light">
        <SiderMenu />
      </Sider>
      {/* <Breadcrumb>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb> */}
      <Content className="content">
        {/* affichage par defaut */}
        <Dashboard />
      </Content>
    </Layout>
  </Layout>
);
export default App;
