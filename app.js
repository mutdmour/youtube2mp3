const express = require('express')
const app = express()
const port = 3000

app.use((request, repsonse, next) => {
	console.log(request.headers)
	next()
})

app.use((request, response, next) => {
	request.chance = Math.random()
	next()
})

app.get('/', (request, response) => {
	response.json({
		chance:request.chance
	})
})

// app.get('/', (request,response) => {
// 	response.send('Hello from Express');
// })

app.listen(port)

// app.listen(port, (err) => {
// 	if (err) {
// 		return console.log('something\'s up', err)
// 	}
// 	console.log('server is listenign on ${port}')
// })
