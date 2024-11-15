import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { assets } from "../../assets/assets";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  price: yup
    .number()
    .required("Price is required")
    .positive("Price must be a positive number"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
  image: yup
    .mixed()
    .required("Image is required")
    .test("fileSize", "The file is too large or null", (value) => {
      return value && value[0] && value[0].size <= 2000000; // Giới hạn kích thước tệp là 2MB
    })
    .test("fileType", "Unsupported File Format", (value) => {
      return (
        value &&
        value[0] &&
        ["image/jpeg", "image/png", "image/gif"].includes(value[0].type)
      );
    }),
});
const Add = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [image, setImage] = useState(false);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", image);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    try {
      const response = await axios.post(`/api/food/add`, formData);
      console.log(response);

      if (!response.data.success) {
        toast.error(response.data.message);
        throw new Error("Network response was not ok");
      }
      toast.success(response.data.message);
      // Reset form sau khi submit
      reset();
      setImage(false);
    } catch (error) {
      toast.error(response.data.message);
      console.error("Error:", error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div
      className="w-7/10 mt-12 text-custom-gray-2 text-base"
      style={{ marginLeft: "max(5vw,25px" }}
    >
      <form className="flex gap-5 flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="add-img-upload flex gap-2.5 flex-col">
          <label>Upload Image</label>
          <label htmlFor="image">
            <img
              className="cursor-pointer w-30"
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Area"
            />
          </label>
          <input
            type="file"
            id="image"
            {...register("image", { onChange: handleImageChange })}
            hidden
          />
          <p className="text-red-500 text-base font-medium">
            {errors.image?.message}
          </p>
        </div>

        <div className="add-product-name w-custom-max-40 flex gap-2.5 flex-col">
          <label>Product name</label>
          <input
            className="p-2.5 border border-solid rounded"
            type="text"
            {...register("name", { onChange: handleInputChange })}
            placeholder="Type here"
          />
          <p className="text-red-500 text-base font-medium">
            {errors.name?.message}
          </p>
        </div>

        <div className="add-product-des w-custom-max-40 flex flex-col gap-2.5">
          <label>Description name</label>
          <textarea
            className="p-2.5 border border-solid rounded"
            rows="6"
            placeholder="Write content here"
            {...register("description", { onChange: handleInputChange })}
          />
          <p className="text-red-500 text-base font-medium">
            {errors.description?.message}
          </p>
        </div>

        <div className="add-category-price flex gap-7">
          <div className="add-category flex flex-col gap-2.5">
            <label>Product category</label>
            <select
              className="max-w-30 p-2.5 border border-solid rounded"
              {...register("category", { onChange: handleInputChange })}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
            <p className="text-red-500 text-base font-medium">
              {errors.category?.message}
            </p>
          </div>
          <div className="add-price flex flex-col gap-2.5">
            <label>Product price</label>
            <input
              className="max-w-30 p-2.5 border border-solid rounded"
              type="number"
              {...register("price", { onChange: handleInputChange })}
              placeholder="$10"
            />
            <p className="text-red-500 text-base font-medium">
              {errors.price?.message}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="add-button max-w-30 p-2.5 bg-black text-white cursor-pointer rounded-lg "
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
