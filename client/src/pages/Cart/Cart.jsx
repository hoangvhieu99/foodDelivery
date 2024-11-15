import React, { useContext } from "react";
import { StoreContext } from "./../../context/StoreContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigation = useNavigate();
  return (
    <div className="mt-14">
      <div className="cart-items">
        <div
          className="grid grid-cols-custom-6 items-center text-gray-500"
          style={{ fontSize: "max(1vw,14px)" }}
        >
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div
                  key={index}
                  className="grid grid-cols-custom-6 items-center my-3 text-black"
                  style={{ fontSize: "max(1vw,14px)" }}
                >
                  <img
                    src={url + "/images/" + item.image}
                    alt=""
                    className="w-14"
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
        <div
          className="flex justify-between mt-20 max-sm:flex-col"
          style={{ gap: "max(12vw,20px)" }}
        >
          <div className="flex-1 flex flex-col gap-5 max-sm:order-2">
            <h2 className="text-3xl font-semibold">Cart Totals</h2>
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-gray-600">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
            <button
              className="text-white bg-red-400 py-3 rounded-lg"
              style={{ width: "max(15vw,200px)" }}
              onClick={() => navigation("/order")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="flex-1 max-sm:order-1">
            <div>
              <p className="text-gray-600">
                If you have a promotion code, Enter it here
              </p>
              <div className="mt-3 flex justify-between items-center bg-slate-200 rounded">
                <input
                  type="text"
                  placeholder="Promotion Code"
                  className="bg-transparent border-none outline-none pl-3"
                />
                <button
                  className="py-3 px-1.5 bg-black text-white rounded"
                  style={{ width: "max(10vw,150px)" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
