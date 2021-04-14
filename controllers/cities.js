const Country = require('../models/country');

async function index(req, res) {
    try {
        const country = await Country.findById(req.query.countryId);
        const cities = country.cities;
        res.status(200).json(cities);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' });
    }
}

async function create(req, res) {
    try {
        const country = await Country.findById(req.query.countryId);
        country.cities.push(req.body);
        await country.save();
        index(req, res);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' });
    }
}

module.exports = {
    index,
    create,
}