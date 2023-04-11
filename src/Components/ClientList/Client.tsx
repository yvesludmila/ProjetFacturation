import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  contact: number;
  codeCli: string;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "contat",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "codeCli",
    dataIndex: "codeCli",
    key: "codeCli",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    codeCli: "CL-001",
    contact: 345600000,
    address: "New York",
    tags: ["developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    codeCli: "CL-002",
    contact: 345600000,
    address: "London",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    codeCli: "CL-003",
    contact: 345600000,
    address: "Sydney",
    tags: ["teacher"],
  },
];

const Client: React.FC = () => <Table columns={columns} dataSource={data} />;

export default Client;
