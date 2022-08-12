const mongoose = require('mongoose')
const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 25,
        required: true
    }
});

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
//return boolean if hash = pass
UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
};

const user = mongoose.model("user", UserSchema);

module.exports = user;