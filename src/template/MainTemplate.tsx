import React from "react";
import SidebarView from "../features/Navigation/Sidebar/SidebarView";
import TopNavbarView from "../features/Navigation/TopNavbar/TopNavbarView";
import styles from "./MainTamplate.module.scss";
interface MainTemplate {
  children: React.ReactNode;
}
const MainTemplate = ({ children }: MainTemplate) => {
  return (
    <div className={styles.container}>
      <SidebarView />
      <div className={styles.inside_container}>
        <TopNavbarView />
        {children}
      </div>
    </div>
  );
};

export default MainTemplate;
