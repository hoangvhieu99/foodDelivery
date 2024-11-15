import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);
  const url = "http://localhost:4000";
  const dataList = async () => {
    const response = await axios.get("/api/food/list");
    if (!response.data.success) {
      toast.error("error");
    }
    setList(response.data.data);
  };
  const removeFood = async (foodId) => {
    try {
      const response = await axios.post("/api/food/remove", { id: foodId });
      await dataList();
      if (!response.data.success) {
        toast.error("Remove failed");
      }
      toast.success("Remove successful");
    } catch (error) {
      toast.error("Remove failed");
      console.log("error", error);
    }
  };
  useEffect(() => {
    dataList();
  }, []);
  return (
    <div
      className="list flex flex-col w-7/10 mt-12 text-custom-gray-2 text-base gap-2.5"
      style={{ marginLeft: "max(5vw,25px" }}
    >
      <p className="text-base font-bold">All Foods List</p>
      <div className="list-table">
        <div className="grid grid-cols-custom-5 items-center gap-2.5 px-4 py-3 border border-solid border-custom-white-1 text-sm max-sm:grid-cols-custom-3 max-sm:gap-4 max-sm:hidden bg-custom-white-2">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-custom-5 items-center gap-2.5 px-4 py-3 border border-solid border-custom-white-1 text-sm max-sm:grid-cols-custom-3 max-sm:gap-4"
            >
              <img
                className="w-12"
                src={`${url}/images/` + item.image}
                alt=""
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p
                className="cursor-pointer"
                onClick={() => removeFood(item._id)}
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
