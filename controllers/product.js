const prisma = require("../config/prisma");

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;

    await prisma.product.create({
      data: { name, description, price, imageUrl },
    });

    res.json({ message: "Create successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again!!!" });
    console.error(error);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();

    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again!!!" });
    console.error(error);
  }
};

exports.getProductWithReview = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        review: {
          include: {
            user: {
              select: { id: true, name: true },
            },
          },
        },
      },
    });

    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again!!!" });
    console.error(error);
  }
};
