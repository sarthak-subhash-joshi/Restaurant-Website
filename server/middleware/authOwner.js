// jwt
const jwt = require("jsonwebtoken");
// User model
const User = require("../models/User");

const AuthenticatedOwner = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (token) {
      const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findOne({ _id: verifyUser.user_id });
      if (user && user.isOwner) {
        req.user = verifyUser;
        next();
      } else {
        res
          .status(401)
          .send({ message: "Unauthorized: No owner token provided" });
      }
    } else {
      res
        .status(401)
        .send({ message: "Unauthorized: No owner token provided" });
    }
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};
