import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { Typography } from "antd";
import "../Style/Dashboard.scss";
import SiderMenu from "../SiderMenu/SiderMenu";
import AppRoutes from "../AppRoutes/AppRoutes";
import NavBar from "./NavBar";
import FooterBar from "./FooterBar";
const App: React.FC = () => (
  <Layout className="container">
    <NavBar />
    <Layout>
      <Sider theme="light">
        <SiderMenu />
      </Sider>
      <Content className="content">
        <AppRoutes />
      </Content>
    </Layout>
    <FooterBar />
  </Layout>
);
export default App;
