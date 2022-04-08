const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    name: String,
    age: Number,
    email: String,
    gender: String
}, {
    timestamps: true,
});


module.exports = mongoose.model("User", userSchema);