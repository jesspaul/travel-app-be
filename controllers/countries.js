const Country = require('../models/country');

async function index(req, res) {
    try {
        const countries = await Country.find({uid: req.query.uid}).sort('name');
        res.status(200).json(countries);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong'});
    }
}

async function create(req, res) {
    try {
        const country = await Country.create(req.body);
        req.query.uid = country.uid;
        index(req, res);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong'});
    }
}

async function deleteCountry(req, res) {
    try {
        const deletedCountry = await Country.findByIdAndDelete(req.params.id);
        req.query.uid = deletedCountry.uid;
        index(req, res);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong'});
    }
}

async function update(req, res) {
    try {
        const updatedCountry = await Country.findByIdAndUpdate(req.params.id, req.body, { new: true});
        req.query.uid = updatedCountry.uid;
        index(req, res);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong'});
    }
}

module.exports = {
    index,
    create,
    delete: deleteCountry,
    update,
}