require('dotenv').config();
const express = require('express');
const app = express();
const connection = require('./db');
const cors = require('cors');

//database connection
connection()

//middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8083;
app.listen(port, () => console.log(`Listening on port ${port}`))