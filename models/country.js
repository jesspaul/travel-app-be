const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: String,
    date: String,
    details: [String]
}, { timestamps: true });

const countrySchema = new Schema({
    userId: String,
    name: String,
    date: String,
    visited: Boolean,
    mapImagePath: String,
    scenicImagePath: String,
    cities: [citySchema],
}, { timestamps: true });

module.exports = mongoose.model('Country', countrySchema);