const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    mobile: Number,
    role: String,
    score: Number,
    batch: String,
    gender: String,
}, {versionKey: false})

userSchema.plugin(mongoosePaginate);

const User = mongoose.model("user", userSchema)

module.exports = User