const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user)
      return res.status(400).json({ message: "Email already exist!!!" });

    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: { name, email, password: hashPassword },
    });

    res.json({ message: "Register successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again!!!" });
    console.error(error);
  }
};
