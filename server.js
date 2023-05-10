const express = require('express');

const dotenv = require('dotenv');


const connectDB = require('./config/db.config');

const app = express();
dotenv.config();
connectDB();

// LAUNCH
const port = process.env.PORT;
app.listen(5001, () => {
    console.log(`🚀 Server ready at http://0.0.0.0:${port}`);
});

