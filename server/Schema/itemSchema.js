import mongoose from "mongoose";

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgUrls: {
    type: Array,
    required: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;