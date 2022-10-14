const needle = require('needle')

const url = "https://pokeapi.co/api/v2/type"
const f = async()=>{
    try {
       let response = await needle('get',url)
       response.body.results.forEach(tipo => {
        console.log(`Tipo:${tipo.name}`)
        console.log(`****************`)
    });
    } catch (error) {
        console.error(error)
    }
    }
    f()
    