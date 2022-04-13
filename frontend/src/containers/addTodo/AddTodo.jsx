import postTodos from '../../services/psotTodos'

const AddTodo = ({ setTodos, todos }) => {
	const handleSubmit = (e) => {
		e.preventDefault()

		const name = document.querySelector('.add_todos_input').value
		const id = new Date().getTime().toString(36)

		setTodos([
			...todos,
			{
				name: name,
				description: '',
				id: id,
				state: 'todo',
			},
		])

		postTodos(name, '')

		document.querySelector('.add_todos_input').value = ''
	}

	return (
		<form className='add_todos' onSubmit={handleSubmit}>
			<input
				type='text'
				className='add_todos_input'
				placeholder='Añade algo'
				required
			/>
			<button type='submit' className='add_todos_button'>
				Añadir
			</button>
		</form>
	)
}

export default AddTodo
