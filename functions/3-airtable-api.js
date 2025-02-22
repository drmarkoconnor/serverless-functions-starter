require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({
	apiKey: process.env.AIRTABLE_API_KEY,
	base: 'appMSD1bSlbbS2T20',
	table: 'products',
})
//   .base('appMSD1bSlbbS2T20')
//   .table('products')

exports.handler = async (event, context, cb) => {
	try {
		const { records } = await airtable.list({
			sort: [{ field: 'price', direction: 'asc' }],
		})
		const products = records.map((product) => {
			const { id } = product
			const { name, image, price } = product.fields
			const url = image[0].url
			return { id, name, url, price }
		})

		return {
			headers: { 'Access-Control-Allow-Origin': '*' },
			statusCode: 200,
			body: JSON.stringify(products),
		}
	} catch (error) {
		return {
			statusCode: 500,
			body: 'Server Error',
		}
	}
}
