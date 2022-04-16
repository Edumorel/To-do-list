import axios from 'axios'

export default function deleteTodo(index) {
	axios.delete('http://localhost:3001/api/list/delete', {
		data: {
			index: index,
		},
	})
}
