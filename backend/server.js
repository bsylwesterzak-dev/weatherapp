const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const widgetRoutes = require('./routes/widgetRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors())

// database connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(result => app.listen(port, () => {
        console.log(`I am listening a port ${port}`)
    }))
    .catch(err => console.log(err))

app.use(authRoutes);
app.use(weatherRoutes);
app.use(widgetRoutes);

