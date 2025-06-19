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
    const products = await prisma.product.findMany({});

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
          select: {
            id: true,
            rating: true,
            comment: true,
            user: {
              select: {
                id: true,
                name: true,
              },
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

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, imageUrl } = req.body;

    await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        price,
        imageUrl,
      },
    });

    res.json({ message: "Update successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again!!!" });
    console.error(error);
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: { id },
    });

    res.json({ message: "Delete successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again!!!" });
    console.error(error);
  }
};
