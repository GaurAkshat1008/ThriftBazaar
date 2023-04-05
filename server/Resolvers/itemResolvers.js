import Item from "../Schema/itemSchema.js";
import User from "../Schema/userSchema.js";
import fs from "fs";
import isAuth from "../middlewares/isAuth.js";



export const addItem = async (req, res) => {

  if(!req.session.userId) {
    return res.status(422).json({ error: "Please login first" });
  }
  const { name, price, description, imgUrls } = req.body;
  if(!name || !price || !description || !imgUrls) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  const newItem = new Item({
    name,
    price,
    description,
    imgUrls,
    user: req.session.userId,
  });

  await newItem.save();
  res.send(newItem);
};

export const getItems = async (req, res) => {
  const items = await Item.find();
  res.send(items);
};

export const searchItems = async (req, res) => {
  const { keyword } = req.params;
  const items = await Item.find({
    $or: [
      { name: { $regex: keyword, $options: "i" } },
      { description: { $regex: keyword, $options: "i" } },
    ],
  });
  res.send(items);
};

export const getItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findById(id);
  res.send(item);
};

export const createJsonFile = async () => {
  const items = await Item.find();
  const data = JSON.stringify(items.map((item) => item.name));
  fs.writeFileSync("../web/items.json", data);
};

export const deleteItem = async (req, res) => {
  isAuth(req, res);
  const { id } = req.params;
  const item = await Item.findByIdAndDelete(id);
  res.send(item);
};

export const updateItem = async (req, res) => {
  isAuth(req, res);
  const { id } = req.params;
  const item = await Item.findById(id);
  if (!item) {
    return res.status(422).json({ error: "Item not found" });
  }
  const { name, price, description, imgUrls } = req.body;
  item.name = name;
  item.price = price;
  item.description = description;
  item.imgUrls = imgUrls;
  await item.save();
  res.send(item);
};

export const addItemToCart = async (req, res) => {
  if(!req.session.userId) {
    return res.status(422).json({ error: "Please login first" });
  }
  const { id } = req.params;
  const user = await User.findById(req.session.userId);
  if (!user) {
    return res.status(422).json({ error: "User not found" });
  }
  user.items.push(id);
  await user.save();
  res.send(user);
};
