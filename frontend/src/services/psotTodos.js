import axios from 'axios'

export default function postTodos(name, description) {
	axios
		.post('http://localhost:3001/api/list/add', {
			name: name,
			description: description,
		})
		.then((res) => console.log(res))
}
