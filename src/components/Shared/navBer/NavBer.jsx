import React from "react";
import Logo from "../Logo";
import Search from "./Search";
import MenuDropdown from "./MenuDropdown";

const NavBer = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px] container">
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo/>
            <Search/>
            <MenuDropdown/>
        </div>
      </div>
    </div>
  );
};

export default NavBer;
