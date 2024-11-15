import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);
  
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (!response.data.success) {
      toast.error("No Order data");
    }
    setOrders(response.data.data);
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (!response.data.success) {
      toast.error("No Change Status");
    }
    await fetchAllOrders();
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div
      className="order flex flex-col w-7/10 mt-12 text-custom-gray-2 text-base gap-2.5"
      style={{ marginLeft: "max(5vw,25px" }}
    >
      <h3 className="text-base font-bold">Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div
            key={index}
            className="order-item grid grid-cols-custom-order items-start gap-7 text-sm border border-solid border-red-400 p-5 my-7 text-custom-text-order rounded max-lg:grid-cols-custom-order-lg max-lg:text-xs max-lg:py-4 max-lg:px-2"
          >
            <img className="max-lg:w-10" src={assets.parcel_icon} alt="" />
            <div>
              <p className="font-semibold">
                {order.items.map((item, index) =>
                  index === order.items.length - 1
                    ? item.name + " x " + item.quantity
                    : item.name + " x " + item.quantity + ", "
                )}
              </p>
              <p className="font-semibold mt-7 mb-2">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-street mb-3">
                <p>{order.address.street + ", "}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipCode}
                </p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Item: {order.items.length}</p>
            <p>$ {order.amount}</p>
            <select
              className="max-w-52 p-2.5 border border-solid rounded border-red-400 bg-custom-white-bg max-lg:p-1.5 max-lg:text-xs"
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
            >
              <option value="Food Processing">
                Food Processing
              </option>
              <option value="Out For Delivery">
                Out For Delivery
              </option>
              <option value="Delivered">
                Delivered
              </option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
