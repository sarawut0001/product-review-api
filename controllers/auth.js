const prisma = require("../config/prisma");

exports.register = (req, res) => {
  try {
    res.json({ message: "Hello register!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again!!!" });
    console.error(error);
  }
};
