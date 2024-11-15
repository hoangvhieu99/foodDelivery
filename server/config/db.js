import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://hoangvhieu99it:0241983@cluster0.prdnkpe.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB connected"));
};
