import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  return (
    <div className="w-full m-auto rounded-2xl shadow-md transition delay-100 animate-fade-in-1s">
      <div className="relative">
        <img
          src={url + "/images/" + image}
          alt={name}
          className="rounded-t-2xl w-full"
        />
        {!cartItems[id] ? (
          <img
            className="w-9 absolute bottom-4 right-4 cursor-pointer rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="flex items-center gap-2 p-1 bottom-4 right-4 absolute bg-white rounded-full">
            <img
              className="w-8"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-8"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-5 ">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xl font-medium">{name}</p>
          <img className="w-70" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
        <p className="text-red-400 text-2xl font-medium my-2 mx-0">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
