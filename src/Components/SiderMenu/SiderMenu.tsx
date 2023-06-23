import { Avatar, Menu, Divider, Typography } from "antd";
import React from "react";
import { MdArticle, MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsFillBasket3Fill } from "react-icons/bs";
import { RiBillFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { BsBorderStyle } from "react-icons/bs";
import { BsFillHandbagFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const { Title } = Typography;
const SiderMenu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Avatar
        style={{
          backgroundColor: "#87d068",
          left: 80,
        }}
        size={"large"}
        icon={<UserOutlined />}
      />
      <Title level={4} style={{ textAlign: "center" }}>
        user Admin
      </Title>
      <Divider style={{ margin: 0 }} />
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
            label: "Commandes",
          },
          {
            key: "/Projects",
            icon: <BsFillHandbagFill />,
            label: "Projets",
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
