const Chat = require('../models/Chat');

exports.sendMessage = async (req, res) => {
  const { senderId, receiverId, message } = req.body;
  if (!senderId || !receiverId || !message) {
    return res.status(400).json({ message: 'senderId, receiverId и message обязательны' });
  }
  try {
    const chat = await Chat.create({ senderId, receiverId, message });
    res.status(201).json(chat);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при отправке сообщения', error: err.message });
  }
};

exports.getMessages = async (req, res) => {
  const { senderId, receiverId } = req.query;
  if (!senderId || !receiverId) {
    return res.status(400).json({ message: 'senderId и receiverId обязательны' });
  }
  try {
    const chats = await Chat.findAll({
      where: {
        $or: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId }
        ]
      },
      order: [['createdAt', 'ASC']]
    });
    res.json(chats);
  } catch (err) {
    res.status(500).json({ message: 'Ошибка при получении сообщений', error: err.message });
  }
};
