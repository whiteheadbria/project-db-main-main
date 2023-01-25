const Provider = require('../models/providerModel');

// get all providers
exports.getAllProvider = (req, res) => {
	Provider.find()
		.then((provider) => res.json(provider))
		.catch((err) =>
			res
				.status(404)
				.json({ message: 'Provider not found', error: err.message }),
		);
};

// get provider by zip code
exports.getProviderZip = (req, res) => {
	const zip = req.query.zip;
	console.log('zip', zip);
	Provider.find({ zip: zip })
		// cursor()
		.then((provider) => res.json(provider))
		.catch((err) =>
			res
				.status(404)
				.json({ message: 'Zip Code not found', error: err.message }),
		);
};
