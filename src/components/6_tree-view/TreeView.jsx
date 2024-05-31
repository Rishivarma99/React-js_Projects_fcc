import { FaPlus, FaMinus } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import "./style.css";
import MenuList from "./MenuList";
import menus from "./data.js";
import { useState } from "react";
const TreeView = () => {
  const [showSideBar, setShow] = useState(true);
  const handleMene = () => {
    if (showSideBar) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  return (
    <>
      <div className={`tv-main ${showSideBar ? "show" : ""}`}>
        <h2>Tree View</h2>
        <MenuList list={menus}></MenuList>
      </div>
      <TiThMenu
        className="menu-btn"
        size={50}
        onClick={() => handleMene()}
      ></TiThMenu>
    </>
  );
};

export default TreeView;
