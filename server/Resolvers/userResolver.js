import User from "../Schema/userSchema.js ";

export const register = async (req, res) => {
  const { name, email, type, password } = req.body;
  password = await bcrypt.hash(password, 10);
  const newUser = new User({
    name,
    email,
    type,
    password,
  });
  await newUser.save();
  res.send(newUser);
}

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  password = await bcrypt.hash(password, 10);
  if(!email || !password){
    return res.status(422).json({error:"Please add email or password"})
  }
  const user = await User.find({email:email})
  if(!user){
    return res.status(422).json({error:"Invalid email or password"})
  }
  const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch){
    return res.status(422).json({error:"Invalid email or password"})
  }
  res.send(user)
}

