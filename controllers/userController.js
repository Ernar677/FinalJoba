const pool = require('../models/db');

exports.getAllPsychologists = async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, email FROM users WHERE role = 'psychologist'");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching psychologists' });
  }
};