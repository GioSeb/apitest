const User = require("../models/user");
require("dotenv").config();
const jwt = require('jsonwebtoken');
const logger = require("../logger/logger");


const signup = async (req, res) => {
    const { name, mail, password } = req.body
    const newUser = new User({
        name,
        mail,
        password
    });
    console.log(name, mail, password);
    try {
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.status(200).json({
            savedUser
        })
    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }
};


const signin = async (req, res) => {
    const { name, password } = req.body;
    const user = await User.findOne({ name: name });
    if (!user) {
      logger.error('User not Found');
      return res.status(400).json({ msg: "User not found" });
    }
    const matchPassword = await User.comparePassword(password, user.password);
   if (!matchPassword) {
       return res.status(401).json({ token: null, msg: "Invalid password" });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT, {
        expiresIn: 86400,
      });
      res.json({ token: token });
    }
  };
module.exports = {signup, signin};