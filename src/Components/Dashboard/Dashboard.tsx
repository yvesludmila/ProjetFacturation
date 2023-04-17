import { Card, Col, Divider, Row, Space, Typography } from "antd";
import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import Client from "../ClientList/Client";

// import "./Dasboard.scss";

const Dashboard = () => {
  return (
    <>
      <Space direction="horizontal" style={{ gap: "45px" }}>
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
      </Space>
      <Divider />

      <Row gutter={10}>
        <Col span={6}>
          <Card>
            <Typography.Title>card test</Typography.Title>
          </Card>
        </Col>
        <Col span={16}>
          <Card>
            <Typography.Title>card test</Typography.Title>
          </Card>
        </Col>
      </Row>

      {/* <Client /> */}
    </>
  );
};

export default Dashboard;
