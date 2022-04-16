import { useState, useEffect } from 'react'
import AddTodo from './containers/addTodo/AddTodo'
import ListOfTodos from './containers/listOfTodos/ListOfTodos'
import getList from './services/getList'

import './styles/App.css'

function App() {
	const [todos, setTodos] = useState([])
	const [state, setState] = useState('loading')

	useEffect(() => {
		getList().then((data) => {
			if (typeof data === 'object') {
				setTodos(data)
				setState('load')
			} else {
				setState('error')
			}
		})
	}, [])

	return (
		<>
			<AddTodo setTodos={setTodos} todos={todos} />

			{state == 'load' && <ListOfTodos todos={todos} setTodos={setTodos} />}
		</>
	)
}

export default App
