const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/users');
const noteRoutes = require('./routes/notes');

app.use('/', userRoutes, (req, res) => res.sendStatus(401));
app.use('/Notes', userRoutes, (req, res) => res.sendStatus(401));

app.listen(3001, () => {
  console.log("server running on port 3001");
});
