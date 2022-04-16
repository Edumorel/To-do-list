import './todoItem.css'
import deleteTodo from '../../services/deleteTodo'

const TodoItem = ({ name, description, id, todos = [], setTodos }) => {
	const deleteItem = () => {
		const item = todos.find((todo) => todo.id === id)
		const index = todos.indexOf(item)
		deleteTodo(index)

		todos.splice(index, 1)
		setTodos([...todos])
	}

	return (
		<div className='todo_item'>
			<h3 className='todo_item_name'>{name}</h3>
			<h4 className='todo_item_description'>{description}</h4>
			<span className='todo_item_delete' onClick={deleteItem}>
				x
			</span>
		</div>
	)
}

export default TodoItem
