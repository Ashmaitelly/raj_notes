const router = require('express').Router();

const UserModel = require('../models/user');

// handle sign-in
router.get("/SignIn", (req, res) => {
    const user = req.body;

    UserModel.findOne({username : user.username, password: user.password})
    .then(result => {
      if(!result){
        //404 if user not found
        res.status(404).json('Invalid username or password');
      }
      else{
        res.json(result.username);
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
        res.json('User successfully created');
      }
      else{
        //403 if user already exists
        res.status(403).json('User already exists');
      } 
    })
    .catch(err => res.status(500).json({ error: err }));
  });

module.exports = router;