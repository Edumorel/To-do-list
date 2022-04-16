const express = require('express')
const app = express()
let todoList = require('./apis/todo.js')
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

app.post('/api/list/add', (req, res) => {
	const id = new Date().getTime().toString(36)
	const { name, description } = req.body

	todoList = [
		...todoList,
		{
			name: name,
			description: description,
			id: id,
			state: 'todo',
		},
	]

	res.json(todoList)
})

app.delete('/api/list/delete', (req, res) => {
	const { index } = req.body

	todoList.splice(index, 1)
})

//START SERVER
app.listen(PORT, () => {
	console.log('Server on port', PORT)
})
