const result = document.querySelector('.result')

const fetchData = async () => {
	try {
		const { data } = await axios.get('/api/3-airtable-api')
		//  result.innerHTML=""
		data.forEach((element) => {
			const { id, url, name, price } = element
			// console.log(url, name, price)
			const prodEL = document.createElement('prodEL')
			prodEL.innerHTML = `<article class="product"><a href="product.html?id=${id}"><img src="${url}"/></a><div class+"info"><h5>${name}</h5><h5 class="price">${price}</h5></div></article>`
			result.appendChild(prodEL)
		})
	} catch (error) {}
}

fetchData()
