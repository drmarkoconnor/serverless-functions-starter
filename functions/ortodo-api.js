require('dotenv').config()
const Airtable = require('airtable-node')

const airtable = new Airtable({
	apiKey: process.env.AIRTABLE_API_KEY,
	base: 'app9ECLf5u3nw5GKc',
	table: 'or-todo',
})

exports.handler = async (event, context, cb) => {
	try {
		const { records } = await airtable.list()
		console.log(records)
		const items = records.map((item) => {
			const { id } = item
			const { task, whose, status, contractor, datedone } = item.fields
			return { id, task, whose, status, contractor, datedone }
		})

		return {
			headers: { 'Access-Control-Allow-Origin': '*' },
			statusCode: 200,
			body: JSON.stringify(items),
		}
	} catch (error) {
		return {
			statusCode: 500,
			body: 'Server Error',
		}
	}
}
