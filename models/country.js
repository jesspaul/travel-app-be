const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    text: String,
}, { timestamps: true });

const citySchema = new Schema({
    name: String,
    date: String,
    details: [detailSchema]
}, { timestamps: true });

const countrySchema = new Schema({
    uid: String,
    name: String,
    date: String,
    visited: Boolean,
    flagPath: String,
    imagePath: String,
    cities: [citySchema],
}, { timestamps: true });

module.exports = mongoose.model('Country', countrySchema);