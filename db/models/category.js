import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: false },
});

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
