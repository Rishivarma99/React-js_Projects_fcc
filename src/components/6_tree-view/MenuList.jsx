import { getItem } from "localforage";
import MenuItem from "./MenuItem";

// menu items are created for every list

const MenuList = ({ list = [] }) => {
  return (
    <ul className="main-list ">
      {list && list.length
        ? list.map((item) => {
            return <MenuItem item={item} key={item.label}></MenuItem>;
          })
        : null}
    </ul>
  );
};

export default MenuList;
