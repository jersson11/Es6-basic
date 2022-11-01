//npm i needle
const needle = require('needle')

const url = "https://restcountries.com/v3.1/all"


needle('get',url)
    .then((response)=>{
        console.log(response.body)
    })
    .catch((error)=>{
    console.error(error)
    })