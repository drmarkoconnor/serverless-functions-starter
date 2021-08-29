// domain/.netlify/functions/1-hello

// exports.handler=(event,context,callback)=>{
//     callback(null,{statusCode:200,body: 'Hello World!'})
// }

exports.handler=async(event,context,cb)=>{
    console.log(event)
    console.log(context)
    return{
statusCode:200,
body:'Our First Netlify Function'
    }
}