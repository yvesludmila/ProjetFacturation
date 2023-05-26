import { Button, Drawer, Typography } from "antd";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const { Text, Link } = Typography;

const FooterBar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ textAlign: "center", backgroundColor: "white" }}>
      <MdOutlineKeyboardArrowUp
        onClick={showDrawer}
        style={{ width: "25px", height: "25px" }}
      />
      <Drawer
        placement="bottom"
        onClose={onClose}
        closable={false}
        open={open}
        style={{ textAlign: "center" }}
        height={120}
      >
        <Text strong>Contact: +261 89 536 34</Text>
        <div>
          <Link href="https://mada-creative-agency.com/" target="_blank">
            https://mada-creative-agency.com/
          </Link>
        </div>
        <div>
          <Link
            href="https://www.facebook.com/MadaCreativeAgency/"
            target="_blank"
          >
            https://www.facebook.com/MadaCreativeAgency/
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default FooterBar;
