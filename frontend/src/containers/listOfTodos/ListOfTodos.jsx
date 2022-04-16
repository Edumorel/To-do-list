import TodoItem from '../../components/todoItem/TodoItem'

import './listOfTodos.css'

const ListOfTodos = ({ todos = [], setTodos }) => {
	return (
		<div className='list_of_todos'>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					name={todo.name}
					description={todo.description}
					id={todo.id}
					todos={todos}
					setTodos={setTodos}
				/>
			))}
		</div>
	)
}

export default ListOfTodos
