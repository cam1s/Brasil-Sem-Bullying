const express = require('express');
const dotenv = require ('dotenv');
const cors = require('cors');
const router = require('./routes/taskRouter');
const loginRouter = require('./routes/userRouter');
const post = require('./routes/salvarRouter');
const app = express();

app.set('port', process.env.PORT || 3306);
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use('/api', loginRouter)
app.use('/api', post)
module.exports = app;