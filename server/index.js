const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Raj_notes:MEC-Horizons123@cluster0.vzwl8.mongodb.net/rajnotes?retryWrites=true&w=majority"
);

// handle sign-in
app.get("/signIn", (req, res) => {
  const user = req.body;
  UserModel.findOne({username: user.username, password: user.password}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      if(!result){
        res.sendStatus(404);
      }
      else{
        res.json(result);
      } 
    }
  });
});
// handle sign-in
app.post("/signUp", async (req, res) => {
  const user = req.body;
  
  UserModel.findOne({username: user.username}, async (err, result) => {
    if (err) {
      res.json(err);
    } else {
      if(!result){
        const newUser = new UserModel(user);
        await newUser.save();
        res.json(user);
      }
      else{
        res.sendStatus(403);
      } 
    }
  });
  
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
