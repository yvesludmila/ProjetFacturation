import { Button, Modal } from "antd";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const DescriptionModals = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h5
        onClick={() => setOpen(true)}
        style={{ textAlign: "end", color: "#FF164D" }}
      >
        En savoir plus{" "}
        <AiOutlineArrowRight style={{ position: "absolute", margin: 5 }} />
      </h5>

      <Modal
        title="LoveCoder"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>
          LoveCoder est un projet créer pour facilite la rencontre entre les
          Employeur et des socités ou personnels qui à envie de realiser ces
          projets.Par contre, si personne à chercher un emplois corresponde à sa
          profil, LoveCoder eté la pour vous.
        </p>
      </Modal>
    </div>
  );
};

export default DescriptionModals;
