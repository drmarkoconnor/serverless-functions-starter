const tasks = document.querySelector('.tasks')

const fetchData = async () => {
	try {
		const { data } = await axios.get('/api/ortodo-api')

		data.forEach((element) => {
			const { task, whose, status, contractor, datedone } = element
			console.log(task, whose, status, contractor, datedone)
			const prodEL = document.createElement('prodEL')

			prodEL.innerHTML = `<div class="task-card">
					<p class="task">
						${task}
					</p>
					<div class="details">
						<div class="whose pill">${whose}</div>
						<div class="contractor-name pill">${contractor}</div>
						<div class="status pill">${status}</div>
						<div class="date-done pill">${datedone}</div>
					</div>
				</div>`
			tasks.appendChild(prodEL)
		})
	} catch (error) {}
}

fetchData()
