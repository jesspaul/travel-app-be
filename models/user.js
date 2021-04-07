const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    // countries: []
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);