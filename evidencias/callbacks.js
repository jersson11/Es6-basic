//callback
//npm i axios

const request = require('request')

let endpoint = 'https://restcountries.com/v3.1/all'

const r=request(endpoint, {json: true}, function(err,response,data){
    
    response.body.forEach(element => {
        console.log(`Pais:${element.name.common}`)
       
    });

})