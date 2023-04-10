import User from "../Schema/userSchema.js ";
import Item from "../Schema/itemSchema.js";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import { Redis } from "ioredis";
import { sendMail } from "../Utils/sendMail.js";
import EmailValidator from "email-deep-validator";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  const { name, email, type, password } = req.body;
  
  const emailValidator = new EmailValidator();
  const { wellFormed, validDomain, validMailbox } = await emailValidator.verify(email);
  if(!wellFormed || !validDomain || !validMailbox) {
    return res.status(422).json({error: "Invalid email"});
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    name: name,
    email: email,
    type: type,
    password: hashedPassword,
  });
  await newUser.save();
  req.session.userId = newUser._id;
  res.send(newUser);
};

export const getCurrentUser = async (req, res) => {
  // console.log(req.session.userId);
  const user = await User.findById(req.session.userId);
  if (!user) {
    return res.status(422).json({ error: "User not found" });
  }
  // console.log("user", user);
  res.send(user);
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please add email or password" });
  }
  const user = await User.find({ email: email });
  if (!user) {
    return res.status(422).json({ error: "Invalid email or password" });
  }
  const isMatch = await bcrypt.compare(password, user[0].password);
  if (!isMatch) {
    return res.status(422).json({ error: "Invalid email or password" });
  }
  // console.log(user[0]._id);
  req.session.userId = user[0]._id;
  res.send(user);
};

export const logout = async (req, res) => {
  req.session.destroy();
  res.clearCookie("qid");
  res.send("Logged out");
};

export const getCart = (req, res) => {
    // if (!req.session.userId) {
    //   return res.status(422).json({ error: "Please login first" });
    // }
  const user = User.findById(req.session.userId);
  if (!user) {
    return res.status(422).json({ error: "User not found" });
  }
  let items = [];
  user.items.forEach((item) => {
    const itemList = Item.findById(item);
    items.push(itemList);
  });
  res.send(items);
};

// write function to update user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, type, password } = req.body;
  const user = await User.findById(id);
  if (!user) {
    return res.status(422).json({ error: "User not found" });
  }
  user.name = name;
  user.email = email;
  user.type = type;
  user.password = password;
  await user.save();
  res.send(user);
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(422).json({ error: "Invalid email" });
  }
  const token = v4();
  console.log(token);
  const redis = new Redis();
  await redis.set(token, user._id, "ex", 1000 * 60 * 60 * 24);
  const link = `http://localhost:3000/change-password/${token}`;
  console.log(link);
  sendMail(email, link);
  res.send("Email sent");
};

export const changePassword = async (req, res) => {
  const {token} = req.params;
  const {newPassword} = req.body;
  const redis = new Redis();
  const userId = await redis.get(token);
  if(!userId) {
    return res.status(422).json({error: "Token expired / invalid"});
  }
  const user = await User.findById(userId);
  if(!user) {
    return res.status(422).json({error: "User not found"});
  }
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  await user.save();
  await redis.del(token);
  req.session.userId = user._id;
  res.send(user);
}
