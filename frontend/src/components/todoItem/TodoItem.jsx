import './todoItem.css'

const TodoItem = ({ name, description }) => {
	return (
		<div className='todo_item'>
			<h3 className='todo_item_name'>{name}</h3>
			<h4 className='todo_item_description'>{description}</h4>
			<span className='todo_item_delete'>x</span>
		</div>
	)
}

export default TodoItem
