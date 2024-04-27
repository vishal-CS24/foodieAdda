import React, { useState } from "react";
import MenuItems from "./MenuItems";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
const MenuAllItems = ({ element }) => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      {element.title && (
        <div
          className="items d-flex justify-content-between my-3 p-2"
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <h5>
            {element?.title}({element?.itemCards?.length})
          </h5>
          {!showMenu ? (
            <IoIosArrowDropdown
              size={30}
              onClick={() => setShowMenu(true)}
              className="cursor-pointer"
            />
          ) : (
            <IoIosArrowDropup
              size={30}
              onClick={() => setShowMenu(false)}
              className="cursor-pointer"
            />
          )}
        </div>
      )}
      {showMenu && <MenuItems items={element?.itemCards} />}
    </>
  );
};
export default MenuAllItems;
