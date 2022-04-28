const express = require('express');

const UserModel = require('../models/user');

const router = express.Router();

// handle sign-in
router.get("/SignIn", (req, res) => {
    const user = req.body;

    UserModel.findOne(user)
    .then(result => {
      if(!result){
        //404 if user not found
        res.status(404).json();
      }
      else{
        res.json(result);
      } 
    })
    .catch(err => res.status(500).json({ error: err }));
  });
  // handle sign-up
  router.post("/SignUp", async (req, res) => {
    const user = req.body;

    UserModel.findOne({username : user.username})
    .then( async result => {
      if(!result){
        const newUser = new UserModel(user);
        await newUser.save();
        res.json(user);
      }
      else{
        //403 if user already exists
        res.status(403).json();
      } 
    })
    .catch(err => res.status(500).json({ error: err }));
  });

module.exports = router;