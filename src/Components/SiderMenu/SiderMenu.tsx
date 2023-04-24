import { Menu, Spin } from "antd";
import React, { useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const SiderMenu = () => {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
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
            key: "/acture",
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
