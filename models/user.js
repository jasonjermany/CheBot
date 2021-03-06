const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    userID: String,
    wordCount: Number
});

module.exports = mongoose.model('User', userSchema, 'users');
