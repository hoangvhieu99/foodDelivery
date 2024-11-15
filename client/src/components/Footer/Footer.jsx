import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      className="text-slate-200 bg-slate-700 flex flex-col items-center gap-5 pt-20 pb-5 px-8vw mt-20"
      id="footer"
    >
      <div className="w-full grid grid-cols-custom-3 gap-20 max-sm:flex max-sm:flex-col max-sm:gap-7">
        <div className="flex flex-col gap-5 items-start">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
            augue sed sapien convallis laoreet sed quis leo. Cras efficitur
            turpis vel faucibus ultrices.
          </p>
          <div className="w-10 mr-4 flex gap-5">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start">
          <h2 className="text-white">COMPANY</h2>
          <ul>
            <li className="mb-2 list-none">Home</li>
            <li className="mb-2 list-none">About us</li>
            <li className="mb-2 list-none">Delivery</li>
            <li className="mb-2 list-none">Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 items-start">
          <h2 className="text-white">GET IN TOUCH</h2>
          <ul>
            <li className="mb-2 list-none">+1-212-456-7890</li>
            <li className="mb-2 list-none">contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr
        className="w-full h-0.5 my-5 bg-gray-500 border-none
      "
      />
      <p className="max-sm:text-center">
        Copyright 2024 @ Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
