import TodoItem from '../../components/todoItem/TodoItem'

const ListOfTodos = ({ todos = [] }) => {
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
