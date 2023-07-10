const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/db_latihan', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', async function () {
	console.log('server database connect ')
})
