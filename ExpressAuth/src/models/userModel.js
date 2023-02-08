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
    role: {
        type: String,
        enum: ["user", "admin"],
    },
    tokens: Array,
}, {versionKey: false})


const User = mongoose.model("user", userSchema)

module.exports = User



// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2UzY2YwNWEwMjcxZmRiMGU3NTQzZGQiLCJpYXQiOjE2NzU4NzQ4MDUsImV4cCI6MTY3NTg3ODQwNX0.NZ7dGF7pMHa_tG21Rs-3scWtQmMpHz8YKw2jXcKlsJ0  --> mobile
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2UzY2YwNWEwMjcxZmRiMGU3NTQzZGQiLCJpYXQiOjE2NzU4NzQ4NzYsImV4cCI6MTY3NTg3ODQ3Nn0.WbdIOS0yfyh8s2bIKIL7LuyGFMmQcEDgApM1BNrJZk0 --> laptop


// log me out of all devices