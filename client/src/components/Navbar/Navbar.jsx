import React, { useContext, useState } from "react";
import { assets } from "./../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";

export const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    toast.success("Logout Success");
    navigate("/");
  };

  return (
    <div className="flex py-5 px-0 justify-between items-center">
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="w-40 max-lg:w-36 max-md:w-30 max-sm:w-30"
        />
      </Link>
      <ul className="flex list-none gap-5 text-xl text-gray-500 max-sm:hidden max-md:gap-4 max-md:text-base">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={
            menu === "home"
              ? "pb-1 border-b-2 border-solid border-gray-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={
            menu === "menu"
              ? "pb-1 border-b-2 border-solid border-gray-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={
            menu === "mobile-app"
              ? "pb-1 border-b-2 border-solid border-gray-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={
            menu === "contact-us"
              ? "pb-1 border-b-2 border-solid border-gray-500 cursor-pointer"
              : "cursor-pointer"
          }
        >
          contact-us
        </a>
      </ul>
      <div className="flex items-center gap-10 max-lg:gap-7 max-md:gap-5 max-sm:gap-5">
        <img
          src={assets.search_icon}
          alt="search"
          className="max-md:w-5 max-sm:w-5 max-lg:w-6"
        />
        <div className="relative ">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt="icon"
              className="max-md:w-5 max-sm:w-5 max-lg:w-6 cursor-pointer"
            />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "absolute min-w-2 min-h-2 bg-red-400 rounded -top-2 -right-2"
            }
          ></div>
        </div>
        {!token ? (
          <button
            className="text-base bg-transparent text-gray-500 border border-solid border-red-400 px-7 py-2 rounded-full cursor-pointer hover:bg-red-50 transition delay-100 max-md:px-5 max-lg:px-6 max-sm:px-5"
            onClick={() => setShowLogin(true)}
          >
            sign in
          </button>
        ) : (
          <div className="nav-profile relative group/item">
            <img src={assets.profile_icon} alt=""/>
            <ul className="nav-profile-dropdown absolute hidden right-0 z-10 group/edit group-hover/item:flex group-hover/item:flex-col group-hover/item:gap-2.5 group-hover/item:bg-custom-white group-hover/item:py-3 group-hover/item:px-6 group-hover/item:rounded group-hover/item:border group-hover/item:solid group-hover/item:border-red-400 group-hover/item:outline group-hover/item:outline-white group-hover/item:outline-2 w-32">
              <li
                onClick={() => navigate("/myOrders")}
                className="flex items-center gap-2.5 cursor-pointer hover:text-red-400"
              >
                <img className="w-5" src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li
                onClick={logout}
                className="flex items-center gap-2.5 cursor-pointer hover:text-red-400"
              >
                <img className="w-5" src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
