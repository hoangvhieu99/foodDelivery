import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="m-auto mt-24 items-center font-medium text-center max-sm:mt-20"
      style={{ fontSize: "max(3vw,20px)" }}
      id="app-download"
    >
      <p className="font-semibold ">
        For Better Experience Download <br />
        Tomato App
      </p>
      <div
        className="flex justify-center mt-10"
        style={{ gap: "max(2vw,10px" }}
      >
        <img
          className="transition cursor-pointer hover:scale-105"
          style={{ width: "max(30vw,120px)", maxWidth: "180px" }}
          src={assets.play_store}
          alt=""
        />
        <img
          className="transition cursor-pointer hover:scale-105"
          style={{ width: "max(30vw,120px)", maxWidth: "180px" }}
          src={assets.app_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;
