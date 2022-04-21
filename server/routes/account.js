const express = require('express');

const UserModel = require('../models/users');

const router = express.Router();

// handle sign-in
router.get("/signIn", (req, res) => {
    const user = req.body;
    
    UserModel.findOne(user)
    .then(result => {
      if(!result){
        res.status(404).json();
      }
      else{
        res.json(result);
      } 
    })
    .catch(err => res.status(500).json({ error: err }));
  });
  // handle sign-up
  router.post("/signUp", async (req, res) => {
    const user = req.body;

    UserModel.findOne({username : user.username})
    .then( async result => {
      if(!result){
        const newUser = new UserModel(user);
        await newUser.save();
        res.json(user);
      }
      else{
        res.status(403).json();
      } 
    })
    .catch(err => res.status(500).json({ error: err }));
  });

module.exports = router;