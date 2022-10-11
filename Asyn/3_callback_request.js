const request = require('request')
let endpoint='https://pokeapi.co/api/v2/type'


const r = request(endpoint, {json:true} , function(err,response,data){
    data.results.array.forEach(element =>{
        console.log(`tipo: $(element.name)`)
        console.log(`+++++++++++++`)
    })
console.log(data)
})