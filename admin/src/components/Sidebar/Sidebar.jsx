import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/5 min-h-screen border-1.5 border-solid border-custom-gray border-t-0">
      <div className="pt-12 pl-0.2 flex flex-col gap-5">
        <NavLink
          to="/add"
          className="flex items-center gap-3 border border-solid border-custom-gray border-r-0 rounded-custom-1 cursor-pointer py-2 px-2.5 item-custom
        "
        >
          <img src={assets.add_icon} alt="" />
          <p className="max-md:hidden">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex items-center gap-3 border border-solid border-custom-gray border-r-0 rounded-custom-1 cursor-pointer py-2 px-2.5
          item-custom"
        >
          <img src={assets.order_icon} alt="" />
          <p className="max-md:hidden">List Items</p>
        </NavLink>
        <NavLink
          to="orders"
          className="flex items-center gap-3 border border-solid border-custom-gray border-r-0 rounded-custom-1 cursor-pointer py-2 px-2.5 
          item-custom"
        >
          <img src={assets.order_icon} alt="" />
          <p className="max-md:hidden">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
