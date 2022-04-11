const express = require('express')
const app = express()
const todoList = require('./apis/todo.js')
const cors = require('cors')

const PORT = process.env.PORT || 3001

//MIDDLEWARES
app.use(express.json())
app.use(cors())

//ROUTS
app.get('/', (req, res) => {
	res.send('hola')
})

app.get('/api/list', (req, res) => {
	res.json(todoList)
})

//START SERVER
app.listen(PORT, () => {
	console.log('Server on port', PORT)
})
