import React from "react";
import { CountryFlags } from "./components/CountryFlags";
import styles from "./Sidebar.module.scss";
const SidebarView = () => {
  return (
    <div className={styles.container}>
      <CountryFlags />
    </div>
  );
};

export default SidebarView;
