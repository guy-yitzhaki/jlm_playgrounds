var config = {
	geocoder_api_key: process.env['GEOCODER_API_KEY'],
	service_account_email: process.env['SERVICE_ACCOUNT_EMAIL'],
	service_account_key: process.env['SERVICE_ACCOUNT_KEY'],
	city: 'ירושלים',
	filteredPlaceIds: ['ChIJTyput9bXAhUR0T1Zr16JAZ4'],
	allowedCities: ['Jerusalem', 'ירושלים']
}

module.exports = config; 