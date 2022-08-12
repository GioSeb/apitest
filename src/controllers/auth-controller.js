const User = require("../models/user");
require("dotenv").config();


const signup = async (req, res) => {
    const { name, mail, password } = req.body
    const newUser = new User({
        name,
        mail,
        password
    });
    try {
        const savedUser = await newUser.save();
    } catch (error) {
        res.status(400)
    }
};

//userctrl.signin = (req, res) => {
//    res.send('signin');
//};
//
//userctrl.logout = (req, res) => {
//    res.send('logout');
//};

module.exports = {signup};