import Item from '../Schema/itemSchema.js'
import fs from "fs";

export const addItem = async (req, res) => {
  const { name, price, description, imgUrls } = req.body
  const newItem = new Item({
    name,
    price,
    description,
    imgUrls,
  })
  await newItem.save()
  res.send(newItem)
}

export const getItems = async (req, res) => {
  const items = await Item.find()
  res.send(items)
}

export const searchItems = async (req, res) => {
  const { keyword } = req.params
  const items = await Item.find({
    $or: [
      { name: { $regex: keyword, $options: 'i' } },
      { description: { $regex: keyword, $options: 'i' } },
    ],
  })
  res.send(items)
}

export const createJsonFile = async () => {
  const items = await Item.find();
  const data = JSON.stringify(items.map((item) => item.name));
  fs.writeFileSync("../web/items.json", data);
};
