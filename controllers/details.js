const Country = require('../models/country');

async function index(req, res) {
    try {
        const country = await Country.findById(req.query.countryId);
        const city = country.cities.id(req.query.cityId);
        const details = city.details;
        res.status(200).json(details);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' });
    }
}

module.exports = {
    index,
}