import { Card, Breadcrumb, Divider } from "antd";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import React from "react";

const Product = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Produits</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <div style={{ marginTop: "20px", display: " flex", gap: 24 }}>
        <Card
          style={{
            width: 300,
            borderBottom: "3px solid blue",
          }}
        >
          {" "}
          <h4>
            Titre: <span>Lait en poudre</span>{" "}
          </h4>
          <p>
            {" "}
            <h4>Quantité: 12kg </h4>
          </p>
          <h4>Prix: 5000$ </h4>
          <div style={{ display: "flex", margin: "10px" }}>
            <MdDelete />
            <FaRegEdit />
          </div>
        </Card>
        <Card
          style={{
            width: 300,
            borderBottom: "3px solid blue",
          }}
        >
          {" "}
          <h4>
            Titre: <span>materiel de bureau</span>{" "}
          </h4>
          <p>
            {" "}
            <h4>Quantité: 12 piéces </h4>
          </p>
          <h4>Prix: 16000$ </h4>
        </Card>
      </div>
    </div>
  );
};
export default Product;
