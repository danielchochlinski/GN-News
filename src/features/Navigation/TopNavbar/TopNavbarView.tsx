import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import styles from "./TopNavbar.module.scss";
import ReorderIcon from "@mui/icons-material/Reorder";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  setNewsOutlet,
  setViewToggle,
  toggleHeaderModal,
  toggleNavigation,
} from "../../../redux/slices/appSlice";
import ModalComponent from "../../../components/Modals/ModalComponent";
import { Link } from "react-router-dom";
import { MyStruggleModal } from "../../../components/Modals/MyStruggleModal";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
const TopNavbarView = () => {
  const dispatch = useAppDispatch();
  const headerToggle: boolean = useAppSelector(
    (state) => state.appState.viewToggle
  );
  const headerModal: boolean = useAppSelector(
    (state) => state.appState.headerModal
  );
  const newsLenght = useAppSelector((state) => state.appState.newsLenght);
  const [hey, setHey] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setHey(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const optionValue = useAppSelector((state) => state.appState.newsOutlet);
  const handleChange = (option: string) => {
    dispatch(setNewsOutlet(option));
  };
  const navigation = useAppSelector((state) => state.appState.navigation);

  return (
    <div className={styles.container}>
      <div className={styles.hamburger}>
        <MenuOpenIcon onClick={() => dispatch(toggleNavigation(!navigation))} />
      </div>
      <div className={navigation ? styles.nav_hide : styles.nav}>
        <div>
          <Link to={"/"}>gnNews</Link>
        </div>
        <div>
          <select
            name="news"
            id="news"
            onChange={(e) => handleChange(e.target.value)}
            value={optionValue}
          >
            <option value="cnn">CNN</option>
            <option value="fox">Fox News</option>
            {/* <option value="msnbc">MSNBC</option> */}
            <option value="abc">ABC</option>
            <option value="bbc">BBC</option>
          </select>
        </div>
        <div onClick={() => dispatch(setViewToggle(!headerToggle))}>
          {headerToggle ? <ReorderIcon /> : <ViewModuleIcon />}
        </div>

        <div onClick={() => dispatch(toggleHeaderModal(!headerModal))}>
          <HelpOutlineIcon />
        </div>
        <div className={styles.footer_info}>
          <span>{hey.toString().split(" ")[4]}</span>
          <span># of news{newsLenght}</span>
        </div>
      </div>

      {headerModal && (
        <ModalComponent
          modal={headerModal}
          close={() => dispatch(toggleHeaderModal(false))}
        >
          <MyStruggleModal />
        </ModalComponent>
      )}
    </div>
  );
};

export default TopNavbarView;
