import mongoose from "mongoose";
import "./Part.js";

const { Schema } = mongoose;

const itemSchema = new Schema({
  uuid: { type: String, required: true },
  name: { type: String, required: false },
  dateAssembled: { type: String, required: true },
  parts: { type: [Schema.Types.ObjectId], ref: "Part" },
  totalPurchasingPrice: { type: Number, required: true },
  targetPrice: { type: Number, required: false },
  soldForPrice: { type: Number, required: false },
  currency: { type: String, required: true },
  dateSold: { type: String, required: false },
  imgUrl: { type: String, required: true },
  isSold: { type: Boolean, required: true },
});

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
