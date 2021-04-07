const Country = require('../models/country');

async function index(req, res) {
    try {
        const countries = await Country.find({});
        res.status(200).json(countries);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong'});
    }
}

async function create(req, res) {
    try {
        const country = await Country.create(req.body);
        res.status(201).json(country);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong'});
    }
}

module.exports = {
    index,
    create,
}