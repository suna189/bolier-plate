const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlangth: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: Number
    }
});

const User = mongoose.model('User', userSchema);

//Model을 다른 곳에서 쓸 수 있도록 export
module.exports = { User } 