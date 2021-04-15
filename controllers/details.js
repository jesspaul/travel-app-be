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

async function create(req, res) {
    try {
        console.log('req.body: ', req.body)
        const country = await Country.findById(req.query.countryId);
        let city = country.cities.id(req.query.cityId);
        city.details.push(req.body);
        await country.save();
        index(req, res);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' });
    }
}

async function deleteDetail(req, res) {
    try {
        const country = await Country.findById(req.query.countryId);
        let city = country.cities.id(req.query.cityId);
        let editDetail = city.details.id(req.params.id);
        city.details.pull(editDetail);
        await country.save();
        req.query.uid = country.uid;
        index(req, res);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong'});
    }
}

async function update(req, res) {
    try {
        const country = await Country.findById(req.query.countryId);
        let city = country.cities.id(req.query.cityId);
        let editDetail = city.details.id(req.params.id);
        editDetail.set(req.body);
        await country.save();
        req.query.uid = country.uid;
        index(req, res);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong'});
    }
}

module.exports = {
    index,
    create,
    delete: deleteDetail,
    update
}