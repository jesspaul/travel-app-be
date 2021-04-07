const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: String,
    date: String,
    details: [String]
})

const countrySchema = new Schema({
    name: String,
    date: String,
    mapImagePath: String,
    scenicImagePath: String,
    cities: [citySchema],
});

module.exports = mongoose.model('Country', countrySchema);