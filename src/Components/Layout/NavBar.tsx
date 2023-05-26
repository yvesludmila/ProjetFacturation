import { Header } from "antd/es/layout/layout";
import React from "react";
import { Typography } from "antd";

const NavBar = () => {
  return (
    <div>
      <Header
        className="header"
        style={{
          backgroundColor: "white",
        }}
      >
        <Typography>
          <Typography.Title>MCA-FACT</Typography.Title>
        </Typography>
      </Header>
    </div>
  );
};

export default NavBar;
