const result = document.querySelector('.result')

const fetchProduct = async () => {
	result.innerHTML = `<h1>Loading...</h1>`
	try {
		const id = window.location.search
		console.log(id)
		const {
			data: { fields },
		} = await axios.get(`/api/3-product${id}`)

		const { image, name, desc, price } = fields
		result.innerHTML = `<h1 class="title">${name}</h1>
        <article class="product"><img class="product-img"
		src="${image[0].url}"
		alt="${name}"
		/>
		<div class="product">
		  <h5 class="title">${name}</h5>
		  <h5 class="price">${price}</h5>
		  <p class="desc">${desc}</p>
		</div></article>`
	} catch (error) {
		result.innerHTML = `<h2>${error.response.data}</h2>`
	}
}

fetchProduct()
