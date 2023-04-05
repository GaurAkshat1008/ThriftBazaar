const isAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.json({ error: "Please login first" });
  }
  return;
};

export default isAuth;