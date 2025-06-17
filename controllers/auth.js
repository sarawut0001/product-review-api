const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) return res.status(400).json({ message: "User not found!!!" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Email or Password invalid!!!" });

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    jwt.sign(
      payload,
      process.env.SECRET_KEY,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) return res.status(400).json({ message: "Token invalid!!!" });
        res.json({ payload, token });
      }
    );
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again!!!" });
    console.error(error);
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    const user = await prisma.user.findFirst({
      where: { email: req.user.email },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
      },
    });

    res.json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again!!!" });
    console.error(error);
  }
};
