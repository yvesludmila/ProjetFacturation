import React from "react";
import "./Sider.scss";
import { AiOutlineSetting } from "react-icons/ai";
const Sider = () => {
  return (
    <div className="Sider">
      <div className="menu">
        <div className="List-menu">
          <h4>Tableau de bord</h4>
        </div>
        <div className="List-menu">
          <h4>Clients</h4>
        </div>
        <div className="List-menu">
          <h4>Poste</h4>
        </div>
        <div className="List-menu">
          <h4>Facture</h4>
        </div>
        <div className="List-menu">
          {/* <AiOutlineSetting
            style={{
              width: "35px",
              position: "absolute",
              margin: "15px",
              alignItems: "center",
            }}
          /> */}
          <h4>Paramètre</h4>
        </div>
      </div>
    </div>
  );
};

export default Sider;
