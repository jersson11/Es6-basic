const axios = require('axios')

let config = {
    method:'get',
    url:"https://isro.vercel.app/api/centres"

}
const f = async(config)=>{
try {
   let response = await axios(config)
    // console.log(response.data)
    response.data.centres.forEach((dato)=>{
        console.log(`Tipo:${dato.}`) ////////
//     console.log(`//////////`)
    })

} catch (error) {
    console.error(error)
}
}
f(config)