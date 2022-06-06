const mongoose = require("mongoose");
const bcrypt= require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//hashing the password in the database
UserSchema.pre('save', async function(next){
  try {
    const salt=await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(this.password,salt)
    this.password= hashedPassword;
    next();
  } catch (error) {
    next(err);
  }
});


UserSchema.methods.comparePassword=async function(password){
 if(!password){throw new Error("password is missing can not compare")}
try {
  const result = await bcrypt.compare(password,this.password)
  return result;
} catch (error) {
  console.log("error while comparing message!" ,error.message)
}
}



const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
