const result = document.querySelector('.result')
const article = document.querySelector('.article')
const body = document.querySelector('body')
const fetchData=async()=>{
    
     try {
         const{ data }=await axios.get('/api/2-basic-api')
         result.innerHTML=""
         data.forEach(element => {
             const{url,name,price}=element
             const prodEL=document.createElement('prodEL')
             prodEL.innerHTML=`<article class="product"><img src="${url}"/><div class+"info"><h5>${name}</h5><h5 class="price">${price}</h5></div></article>`
             result.appendChild(prodEL)
             
         })
         
      
         
//          const{ data }=await axios.get('/api/2-basic-api')
//          const products = data.map((product)=>{
//              const{image:{url},name,price}=product
// return `<article class="product"><img src="${url}"/><div class+"info"><h5>${name}</h5><h5 class="price">${price}</h5></div></article>`
//          }).join('')
//          result.innerHTML=products
         
        
         
     } catch (error) {
         result.innerHTML=`<h2>There was an error</h2>`
     }
    
    
}
fetchData()


 

