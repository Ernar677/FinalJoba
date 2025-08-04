const express = require('express');
const { getAllPsychologists } = require('../controllers/userController');
const router = express.Router();

router.get('/psychologists', getAllPsychologists);

module.exports = router;
