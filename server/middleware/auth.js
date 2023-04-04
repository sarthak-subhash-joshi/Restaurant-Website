// jwt auth middleware
const jwt = require("jsonwebtoken");

const Authenticated = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (token) {
      const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
      req.user = verifyUser.user_id;
      next();
    } else {
      res.status(401).send({ message: "Unauthorized: No token provided" });
    }
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

module.exports = Authenticated;
