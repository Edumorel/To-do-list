export default function getList() {
	return fetch('http://localhost:3001/api/list')
		.then((res) => res.json())
		.catch((err) => {
			console.log(err)
		})
}
