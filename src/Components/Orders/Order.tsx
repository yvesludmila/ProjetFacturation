import { Breadcrumb, Card, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";

interface DataType {
  numero: number;
  designation: string;
  Quantite: number;
  Date: string;
  Prix: number;
  Total: number;
}
const sharedOnCell = (_: DataType, index: number) => {
  if (index === 1) {
    return { colSpan: 0 };
  }

  return {};
};
const columns: ColumnsType<DataType> = [
  {
    title: "N°",
    dataIndex: "num",
    rowScope: "row",
  },
  {
    title: "Date",
    dataIndex: "Date",
    rowScope: "row",
  },
  {
    title: "Désignation",
    dataIndex: "designation",
    rowScope: "row",
  },
  {
    title: "Qauntité",
    dataIndex: "Quantite",
    // onCell: sharedOnCell,
  },
  {
    title: "Prix unitaire",
    dataIndex: "Prix",
  },
  {
    title: "Total",
    dataIndex: "Total",
  },
];

const Order = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>commandes</Breadcrumb.Item>
      </Breadcrumb>
      <Card
        title="Gestion des commandes"
        style={{ marginTop: "20px", borderTop: "3px solid gray" }}
      >
        <Table columns={columns} bordered />
      </Card>
    </div>
  );
};

export default Order;
