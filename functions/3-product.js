require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({
	apiKey: process.env.AIRTABLE_API_KEY,
	base: 'appMSD1bSlbbS2T20',
	table: 'products',
})

exports.handler = async (event, context, cb) => {
	const { id } = event.queryStringParameters
	if (id) {
		try {
			const product = await airtable.retrieve(id)
			if (product.error) {
				return { statusCode: 404, body: `There is no product with id of ${id}` }
			}
			return { statusCode: 200, body: JSON.stringify(product) }
		} catch (error) {
			return { statusCode: 500, body: `Server Error` }
		}
	}
	return {
		headers: { 'Access-Control-Allow-Origin': '*' },
		statusCode: 400,
		body: 'Please return valid Id',
	}
}
