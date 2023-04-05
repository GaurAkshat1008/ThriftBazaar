import User from "../Schema/userSchema.js ";
// import isAuth from "../middlewares/isAuth";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  // console.log(req.body);
  const { name, email, type, password } = req.body;
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
  // isAuth(req, res);
  const user = await User.findById(req.session.userId);
  if (!user) {
    return res.status(422).json({ error: "User not found" });
  }
  console.log("user", user);
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
  console.log(user[0]._id);
  req.session.userId = user[0]._id;
  res.send(user);
};

export const logout = async (req, res) => {
  req.session.destroy();
  res.send("Logged out");
};
