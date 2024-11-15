import React from "react";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="font-medium lg:text-5xl text-4xl text-gray-700">
        Explore our menu
      </h1>
      <p className="lg:max-w-3/5" style={{ columns: "#808080" }}>
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your craving and elevate your dining experience,
        one delicious meat at a time.
      </p>
      <div
        className="flex justify-between items-center lg:gap-7 text-center my-5 mx-0 overflow-x-scroll explore-menu-list 
      gap-8 max-lg:max-w-full max-lg:text-sm  max-md:max-w-full max-md:text-sm max-sm:max-w-full max-sm:text-sm"
      >
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`w-7.5 min-w-20 cursor-pointer rounded-full transition delay-100 ${
                  category === item.menu_name
                    ? "border-solid border-4  border-red-400 p-0.5"
                    : ""
                }`}
              />
              <p
                className="mt-2 text-gray-500 cursor-pointer"
                style={{ fontSize: "max(1.4vw,16px)" }}
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2 mx-0 bg-gray-50" />
    </div>
  );
};

export default ExploreMenu;
