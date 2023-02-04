const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    batch: {
        type: String,
        enum: ["macos", "linux", "ubuntoo"],
    },
}, {versionKey: false})


const User = mongoose.model("user", userSchema)

module.exports = User