// const { default: axios } = require("axios")

const result = document.querySelector('.result')


const fetchData=async()=>{
    try {
        
        const { data } =await axios.get('/api/1-hello')
        console.log(data)
       result.innerHTML=data
    } catch (error) {
        console.log(error.response.data)
    }
}

fetchData()

