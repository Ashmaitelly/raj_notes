const express = require('express');

const UserModel = require('../models/users');

const router = express.Router();

// handle sign-in
router.get("/signIn", (req, res) => {
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
          console.log("found");
        } 
      }
    });
  });
  // handle sign-up
  router.post("/signUp", async (req, res) => {
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

module.exports = router;