const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String, //displayName
    email: String, //email,
    googleId: String, //uid
    countries: [{
        type: Schema.Types.ObjectId,
        ref: 'Country'
    }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);