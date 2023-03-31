import * as React from "react";

import Modal from "@mui/material/Modal";

import { Box } from "@mui/material";
import styles from "./ModalComponent.module.scss";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  outline: "none",
};

interface ModalTypes {
  children: React.ReactNode;
  close: (el: boolean) => {};
  modal: boolean;
}

export default function ModalComponent({ children, close, modal }: ModalTypes) {
  return (
    <Modal open={modal} onClose={close}>
      <Box sx={style}>
        <div className={styles.container}>{children}</div>
      </Box>
    </Modal>
  );
}
