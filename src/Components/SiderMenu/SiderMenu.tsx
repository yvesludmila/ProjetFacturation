import { Menu, Spin } from "antd";
import React, { useState } from "react";
import { MdArticle, MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsFillBasket3Fill } from "react-icons/bs";
import { RiBillFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { BsBorderStyle } from "react-icons/bs";
import { BsFillHandbagFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const SiderMenu = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            key: "/",
            icon: <MdDashboardCustomize />,
            label: "Dashboard",
          },
          {
            key: "/Client",
            icon: <FaUsers />,
            label: "Client",
          },
          {
            key: "/Article",
            icon: <MdArticle />,
            label: "Article",
          },
          {
            key: "/Commande",
            icon: <BsBorderStyle />,
            label: "Commande",
          },
          {
            key: "/Produit",
            icon: <BsFillHandbagFill />,
            label: "Produit",
          },
          {
            key: "/Achat",
            icon: <BsFillBasket3Fill />,
            label: "Achat",
          },
          {
            key: "/Facture",
            icon: <RiBillFill />,
            label: "Facture",
          },
          {
            key: "/configuration",
            icon: <AiFillSetting />,
            label: "configuration",
          },
        ]}
      />
    </div>
  );
};

export default SiderMenu;
