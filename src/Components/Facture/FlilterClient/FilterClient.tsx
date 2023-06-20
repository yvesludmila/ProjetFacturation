import { Input, List, Typography } from "antd";
import React, { useState } from "react";
// import Client from "../../ClientList/Client"

const data = [
  { id: 1, Name: "styler" },
  { id: 2, Name: "YVES RK" },
  { id: 3, Name: " GENERI styler" },
  { id: 4, Name: " durkey" },
  { id: 5, Name: " gabri" },

  // "Racing car sprays burning fuel.",
  // "Japanese princess to wed commoner.",
  // "Australian walks 100km after outback crash.",
  // "Man charged over missing wedding girl.",
  // "Los Angeles battles huge wildfires.",
];

const FilterClient = () => {
  const [names, setName] = useState(data);
  const [search, setSearch] = useState("");
  const { Search } = Input;
  const onSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <List
        style={{
          backgroundColor: "white",
          borderTop: "3px solid #3ba0e9",
          width: 300,
        }}
        header={
          <div>
            <Search
              placeholder="Rechercher un client"
              onSearch={onSearch}
              enterButton
              style={{ width: "15.5rem" }}
              onChange={(e) => {
                setSearch(e.target.value.toLowerCase());
              }}
            />
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>
              {names.map((name) => {
                return <li key={name.id}>{name.Name}</li>;
              })}
            </Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
};

export default FilterClient;
