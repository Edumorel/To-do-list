import { useEffect, useState } from 'react'
import Load from '../../components/Load/Load'
import TodoItem from '../../components/todoItem/TodoItem'

import getList from '../../services/getList'

const ListOfTodos = () => {
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

	if (state === 'loading') {
		return <Load />
	} else if (state === 'error') {
		return <span>Ha habido un error</span>
	}

	return (
		<div className='list_of_todos'>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					name={todo.name}
					description={todo.description}
				/>
			))}
		</div>
	)
}

export default ListOfTodos
