export const admin = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(422).json({ error: "Please login first" });
  }
  if (req.session.userType !== "admin") {
    return res
      .status(422)
      .json({ error: "You are not authorized to view this page" });
  }
  next();
};

export const protect = (req, res, next) => {
  if (!req.session.userId) {
    return res.json({
      errors: [
        {
          field: "email",
          message: "Please login first",
        },
      ],
    });
  }
  next();
};
