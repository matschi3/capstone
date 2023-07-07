import mongoose from "mongoose";

const { Schema } = mongoose;

const partSchema = new Schema({
  uuid: { type: String, required: true },
  name: { type: String, required: true },
  dateBuy: { type: String, required: true },
  dateAssembled: { type: String, required: false },
  dateSold: { type: String, required: false },
  category: { type: String, required: true },
  currency: { type: String, required: true },
  purchasingPrice: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  partOrigin: { type: String, required: false },
  inAssembler: { type: Boolean, required: true },
  isAssembled: { type: Boolean, required: true },
  isSold: { type: Boolean, required: true },
});

const Part = mongoose.models.Part || mongoose.model("Part", partSchema);

export default Part;
