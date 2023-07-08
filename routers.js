const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send('Hello World!')
})

router.get('/users/:id', (req, res) => {
	const id = req.params.id
	if (Number(id) === 1) {
		const user = {
			id: 1,
			name: 'Dimas Prayoga',
			age: 21,
		}
		res.send(user)
	} else {
		const user = {
			id: 2,
			name: 'Agung Tri',
			age: 17,
		}
		res.send(user)
	}
})

router.get('/users', (req, res) => {
	const name = req.query.name
	const age = req.query.age
	res.send(name + ' ' + age)
})

router.post('/users', (req, res) => {
	res.send('Got a POST request')
})

router.put('/user', (req, res) => {
	res.send('Got a PUT request at /user')
})

router.delete('/user', (req, res) => {
	res.send('Got a DELETE request at /user')
})

module.exports = router
