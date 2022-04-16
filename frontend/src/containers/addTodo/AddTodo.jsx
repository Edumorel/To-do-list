import postTodos from '../../services/psotTodos'

import './addTodo.css'

const AddTodo = ({ setTodos, todos }) => {
	const handleSubmit = (e) => {
		e.preventDefault()

		const name = document.querySelector('#add_todos_name')
		const description = document.querySelector('#add_todos_description')
		const id = new Date().getTime().toString(36)

		setTodos([
			...todos,
			{
				name: name.value,
				description: description.value,
				id: id,
				state: 'todo',
			},
		])

		postTodos(name.value, description.value)

		name.value = ''
		description.value = ''
	}

	return (
		<form className='add_todos' onSubmit={handleSubmit}>
			<input
				type='text'
				className='add_todos_input'
				id='add_todos_name'
				placeholder='Añade un nombre'
				required
			/>
			<textarea
				placeholder='Añadele una description'
				className='add_todos_input'
				id='add_todos_description'
			></textarea>
			<button type='submit' className='add_todos_button'>
				Añadir
			</button>
		</form>
	)
}

export default AddTodo
