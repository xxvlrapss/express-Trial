const MongoClient = require('mongodb').MongoClient

MongoClient.connect(
	'mongodb://127.0.0.1:27017',
	{ useUnifiedTopology: true },
	function (err, client) {
		if (err) throw err

		console.log('database berhasil connect')

		const db = client.db('db_latihan')

		db.collection('users')
			.find()
			.toArray((err, result) => {
				if (err) throw err

				console.log(result)
			})
	}
)
