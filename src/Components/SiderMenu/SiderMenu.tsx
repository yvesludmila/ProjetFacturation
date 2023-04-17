// import React from "react";
// import "./SiderMenu.scss";
// import { Link } from "react-router-dom";

// const SiderMenu = () => {
//   return (
//     <div className="sider">
//       <div className="content-sider">
//         <Link to="/Dashboard">
//           <h4>Dashboard</h4>
//         </Link>
//         <Link to="/Client">
//           {" "}
//           <h4>Client</h4>
//         </Link>
//         <h4>Article</h4>
//         <h4>Stock</h4>
//         <h4>Achat</h4>
//         <h4>Facture</h4>
//         <h4>Parametre</h4>
//       </div>
//     </div>
//   );
// };

// export default SiderMenu;
import { Menu } from "antd";
import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
const SiderMenu = () => {
  return (
    <div>
      <Menu
        items={[
          {
            key: "1",
            icon: <MdDashboardCustomize />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <FaUsers />,
            label: "Client",
          },
          {
            key: "3",
            icon: <RiBillFill />,
            label: "Facture",
          },
          {
            key: "3",
            icon: <AiFillSetting />,
            label: "configuration",
          },
        ]}
      />
    </div>
  );
};

export default SiderMenu;
