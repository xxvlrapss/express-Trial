const MongoClient = require('mongodb').MongoClient
const connection = 'mongodb://127.0.0.1:27017/db_latihan'

const db = new MongoClient(connection, { useUnifiedTopology: true })
;(async () => {
	try {
		await db.connect()
	} catch (err) {
		console.log(err)
	}
})()

module.exports = db
