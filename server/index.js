require('dotenv').config();
const express = require('express');
const app = express();
const connection = require('./db');
const cors = require('cors');

// routes imports
const songRoutes = require('./routes/song');

// database connection
connection()

// middlewares
app.use(express.json());
app.use(cors());

// routes exports
app.use('/api/songs', songRoutes);

const port = process.env.PORT || 8083;
app.listen(port, () => console.log(`Listening on port ${port}`))