const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");

exports.authCheck = async (req, res, next) => {
  try {
    const headerToken = req.headers.authorization;

    if (!headerToken)
      return res.status(400).json({ message: "No token, authorization!!!" });

    const token = headerToken.split(" ")[1];
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;

    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    });

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Token invalid!!" });
  }
};
