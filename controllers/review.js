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
