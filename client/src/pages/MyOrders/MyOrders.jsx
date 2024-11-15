import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userOrders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-14">
      <h2 className="font-semibold text-lg">My Orders</h2>
      <div className="flex flex-col gap-5 mt-8">
        {data.map((order, index) => {
          return (
            <div key={index} className="grid grid-cols-custom-order items-center gap-7 text-sm py-3 px-5 text-gray-600 border border-solid border-red-400 screen-md:grid-cols-custom-order-md screen-md:gap-1 screen-md:text-xs">
              <img src={assets.parcel_icon} alt="" className="w-12"/>
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span className="text-red-400">&#x25cf;</span>
                <b className="font-medium text-gray-600 pl-1">{order.status}</b>
              </p>
              <button onClick={fetchOrders} className="py-3 rounded bg-red-100 cursor-pointer text-gray-600 screen-md:text-xs">Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
