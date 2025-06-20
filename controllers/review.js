const prisma = require("../config/prisma");

exports.createReview = async (req, res) => {
  try {
    const productId = req.params.id;
    const { rating, comment } = req.body;

    await prisma.review.create({
      data: { rating, comment, productId, userId: req.user.id },
    });

    res.json({ message: "Review added!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again!!!" });
    console.error(error);
  }
};

exports.getUserReviews = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        review: {
          select: {
            id: true,
            rating: true,
            comment: true,
            product: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    res.json({
      userId: user.id,
      name: user.name,
      reviews: user.review,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again!!!" });
    console.error(error);
  }
};

exports.updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { rating, comment } = req.body;

    await prisma.review.update({
      where: { id },
      data: { rating, comment },
    });

    res.json({ message: "Update successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong, Please try again!!!" });
    console.error(error);
  }
};

exports.removeReview = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.review.delete({
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
