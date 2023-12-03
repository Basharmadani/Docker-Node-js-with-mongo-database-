const express = require('express');
const mongoose = require('mongoose');

const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;

// ip for container mongo ex
const DB_HOST = 'mongodb';


const DATABASE_NAME = 'mydatabase';

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DATABASE_NAME}`;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to db .....'))
  .catch((err) => console.log('OPS failed', err));

const port = process.env.PORT || 4000;
const app = express();
app.get('/', (req, res) => res.send('<h1> hello</h1>'));
app.listen(port, () => console.log(`app is up on port :${port} `));
