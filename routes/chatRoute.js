const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/chat/send', chatController.sendMessage);
router.get('/chat/:senderId/:receiverId', chatController.getMessages);

module.exports = router;