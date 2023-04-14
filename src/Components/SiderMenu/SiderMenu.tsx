import React from "react";
import "./SiderMenu.scss";
import { Link } from "react-router-dom";

const SiderMenu = () => {
  return (
    <div className="sider">
      <div className="content-sider">
        <Link to="/Dashboard">
          <h4>Dashboard</h4>
        </Link>
        <Link to="/Client">
          {" "}
          <h4>Client</h4>
        </Link>
        <h4>Article</h4>
        <h4>Stock</h4>
        <h4>Achat</h4>
        <h4>Facture</h4>
        <h4>Parametre</h4>
      </div>
    </div>
  );
};

export default SiderMenu;
