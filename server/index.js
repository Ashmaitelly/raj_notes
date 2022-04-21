const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/users");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const accountRoutes = require('./routes/account');

app.use('/', accountRoutes, (req, res) => res.sendStatus(401));

app.listen(3001, () => {
  console.log("server running on port 3001");
});
