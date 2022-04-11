const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001

//MIDDLEWARES
app.use(express.json())

//ROUTS
app.get('/', (req, res) => {
	res.send('hola')
})

//START SERVER
app.listen(PORT, () => {
	console.log('Server on port', PORT)
})
