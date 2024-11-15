import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-7">
      <h2 className="font-semibold text-4xl">Top dishes near you</h2>
      <div className="grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-7 gap-7 gap-y-12">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
