import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const placeOrderHandler = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      toast.error("Error");
    }
  };

  const navigate = useNavigate()

  useEffect(()=> {
    if(!token){
      navigate("/cart")
    }
    else if(getTotalCartAmount()===0){
      navigate("/cart")
    }
  },[])

  return (
    <form
      onSubmit={placeOrderHandler}
      className="place-order flex items-start justify-between gap-12 mt-24 max-md:flex-col max-sm:flex-col"
    >
      <div
        className="place-order-left w-full max-sm:order-1"
        style={{ maxWidth: "max(30%,500px)" }}
      >
        <p className="title text-3xl font-semibold mb-12">
          Delivery Information
        </p>
        <div className="multi-fields flex gap-2">
          <input
            required
            className="mb-4 w-full p-2 rounded border border-solid border-gray-300 outline-red-400 "
            type="text"
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            placeholder="First name"
          />
          <input
            required
            className="mb-4 w-full p-2 rounded border border-solid border-gray-300 outline-red-400 "
            type="text"
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            placeholder="Last name"
          />
        </div>
        <input
          required
          className="mb-4 w-full p-2 rounded border border-solid border-gray-300 outline-red-400 "
          type="text"
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          placeholder="Email address"
        />
        <input
          required
          className="mb-4 w-full p-2 rounded border border-solid border-gray-300 outline-red-400 "
          type="text"
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          placeholder="Street"
        />
        <div className="multi-fields flex gap-2">
          <input
            required
            className="mb-4 w-full p-2 rounded border border-solid border-gray-300 outline-red-400 "
            type="text"
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            placeholder="City"
          />
          <input
            required
            className="mb-4 w-full p-2 rounded border border-solid border-gray-300 outline-red-400 "
            type="text"
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            placeholder="State"
          />
        </div>
        <div className="multi-fields flex gap-2">
          <input
            required
            className="mb-4 w-full p-2 rounded border border-solid border-gray-300 outline-red-400 "
            type="text"
            name="zipCode"
            onChange={onChangeHandler}
            value={data.zipCode}
            placeholder="Zip code"
          />
          <input
            required
            className="mb-4 w-full p-2 rounded border border-solid border-gray-300 outline-red-400 "
            type="text"
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            placeholder="Country"
          />
        </div>
        <input
          required
          className="mb-4 w-full p-2 rounded border border-solid border-gray-300 outline-red-400 "
          type="text"
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          placeholder="Phone"
        />
      </div>
      <div
        className="place-order-right w-full max-sm:order-1"
        style={{ maxWidth: "max(40%,500px)" }}
      >
        <div className="flex-1 flex flex-col gap-5 max-sm:order-2">
          <h2 className="text-3xl font-semibold">Cart Totals</h2>
          <div className="flex justify-between text-gray-600">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-gray-600">
            <p>Delivery Fee</p>
            <p>{2}</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-gray-600">
            <b>Total</b>
            <b>{getTotalCartAmount() + 2}</b>
          </div>
          <button
            className="text-white bg-red-400 py-3 rounded-lg mt-7"
            style={{ width: "max(15vw,200px)" }}
            type="submit"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </form>
  );
};
