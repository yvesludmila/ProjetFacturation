import {
  Anchor,
  Breadcrumb,
  Card,
  Col,
  Descriptions,
  Divider,
  Row,
  Space,
  Steps,
  Typography,
} from "antd";
import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import ChartBar from "../ChartBar/ChartBar";

const Dashboard = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Space direction="horizontal" style={{ gap: "60px", marginTop: "20px" }}>
        <Card style={{ borderLeft: "3px solid green" }}>
          <Space direction="horizontal">
            <FaMoneyCheckAlt />
            <small>Total budget</small>
          </Space>
          <Typography.Title>$4567600</Typography.Title>
        </Card>
        <Card style={{ borderLeft: "3px solid blue" }}>
          <Space direction="horizontal">
            <FaUsers />
            <small>Client</small>
          </Space>
          <Typography.Title>+400prs</Typography.Title>
        </Card>
        <Card style={{ borderLeft: "3px solid red" }}>
          <Space direction="horizontal">
            <small>Stock</small>
          </Space>
          <Typography.Title>$4567600</Typography.Title>
        </Card>
        <Card style={{ borderLeft: "3px solid yellow" }}>
          <Space direction="horizontal">
            <small>Produit</small>
          </Space>
          <Typography.Title>+456700pdts</Typography.Title>
        </Card>
      </Space>
      <Divider />
      <Steps
        current={0}
        items={[
          {
            title: "SignUp",
            description: "please complete your field of the sign up",
          },
          {
            title: "buy subscribe",
            description: "some buy",
          },
          {
            title: "AutoComplete",
            description: "successfuly",
          },
        ]}
      />
      <ChartBar />
    </>
  );
};

export default Dashboard;
