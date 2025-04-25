const mongoose = require('mongoose');
const { timeStamp } = require('node:console');

const userSchema = mongoose.Schema({
    name: { type: String},
    email: {type: String},
    password: {type: String}
},{timeStamp: true})

const User = mongoose.model("Users",userSchema)

module.exports = User;