import { useState } from "react";
import MenuList from "./MenuList";
import { FaPlus, FaMinus } from "react-icons/fa";
const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handlePlusIcon = () => {
    setOpen(true);
  };
  const handleMinusIcon = () => {
    setOpen(false);
  };

  return (
    <li className="list-item">
      <p>
        {item.label}{" "}
        {item && item.children && item.children.length ? (
          <FaPlus
            onClick={() => handlePlusIcon()}
            className={` icon icon-plus ${open ? "hide" : ""}`}
          >
            {" "}
          </FaPlus>
        ) : null}
        {item && item.children && item.children.length ? (
          <FaMinus
            onClick={() => handleMinusIcon()}
            className={` icon icon-minus ${open ? "" : "hide"}`}
          >
            {" "}
          </FaMinus>
        ) : null}
      </p>
      {open && item && item.children && item.children.length > 0 ? (
        <MenuList list={item.children}></MenuList>
      ) : null}
    </li>
  );
};

export default MenuItem;
