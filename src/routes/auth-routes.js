const express = require("express");
const router = express.Router();
const {signin, signup} = require("../controllers/auth-controller");
const User = require("../models/user");
const bcrypt = require('bcryptjs')

//router.post("/signin", authControllers.signIn);
router.post("/signup", signup);

router.post('/signin', signin);

//router.post('/signup', async function(req, res){
//    const { name, mail, password } = req.body
//    const newUser = new User({
//        name,
//        mail,
//        password
//    });
//    console.log(name, mail, password);
//    try {
//        const savedUser = await newUser.save();
//        res.status(200).json({savedUser})
//    } catch (error) {
//        res.status(400)
//    }
//    
//  })
//
module.exports = router;
