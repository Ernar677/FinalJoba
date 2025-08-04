const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  try {
    const { userId, psychologistId, comment, rating } = req.body;
    if (!userId || !psychologistId || !comment || !rating) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const review = await Review.create({ userId, psychologistId, comment, rating });
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ message: 'Review error', error: err.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const { psychologistId } = req.params;
    if (!psychologistId) {
      return res.status(400).json({ message: 'psychologistId is required' });
    }
    const reviews = await Review.findAll({ where: { psychologistId } });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error getting reviews', error: err.message });
  }
};
