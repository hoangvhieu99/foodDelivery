import React from "react";
const Header = () => {
  const imageUrl = "/header_img.png";
  return (
    <div
      className="h-34vw my-7 mx-auto bg-no-repeat relative bg-contain"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute flex flex-col items-start max-w-1/2 bottom-1/10 gap-1.5vw left-6vw animate-fade-in max-sm:max-w-11/20 ">
        <h2
          className="font-medium text-white "
          style={{ fontSize: "max(4.5vw,22px)" }}
        >
          Order your favorite food here
        </h2>
        <p className="text-white max-sm:hidden" style={{ fontSize: "1vw" }}>
          Choose from a divers menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission to satisfy your cravings elevate your dining experience, one
          delicious meat at a time.
        </p>
        <button
          className="border-none text-gray-400 font-medium bg-white rounded-full max-sm:py-2vw max-sm:px-4vw"
          style={{
            padding: "1vw 2.3vw",
            fontSize: "max(1vw,13px)",
          }}
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
