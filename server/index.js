require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.MONGO_URI);

app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/users");
const noteRoutes = require("./routes/notes");
const deletedRoutes = require("./routes/deleted");
const sharedRoutes = require("./routes/shared");

app.use("/", userRoutes);
app.use("/notes", noteRoutes);
app.use("/deleted", deletedRoutes);
app.use("/shared", sharedRoutes);

app.listen(3001, () => {
  console.log("server running on port 3001");
});
