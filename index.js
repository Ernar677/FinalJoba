const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('./routes/authRoute');
const userRouter = require('./routes/userRouter');
const appointmentRouter = require('./routes/appointmentRouter');
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(helmet()); 
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api', appointmentRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
