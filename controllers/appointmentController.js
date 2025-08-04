const pool = require('../models/db');

exports.createAppointment = async (req, res) => {
  const { psychologist_id, date_time } = req.body;
  const client_id = req.user && req.user.id;
  if (!client_id) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  if (!psychologist_id || !date_time) {
    return res.status(400).json({ message: 'psychologist_id and date_time are required' });
  }
  try {
    const result = await pool.query(
      'INSERT INTO appointments (client_id, psychologist_id, date_time) VALUES ($1, $2, $3) RETURNING *',
      [client_id, psychologist_id, date_time]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create appointment' });
  }
};

exports.getAppointments = async (req, res) => {
  const user_id = req.user && req.user.id;
  if (!user_id) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const result = await pool.query(
      'SELECT * FROM appointments WHERE client_id = $1 OR psychologist_id = $1',
      [user_id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get appointments' });
  }
};
