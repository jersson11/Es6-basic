let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let endpoint='https://pokeapi.co/api/v2/type'


const exito =(response)=>{
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`tipo:${tipo.name}`)  
        console.log("-------------")
    })
//console.log(JSON.parse(response.results))
}




const fallo=(status) =>{
    console.log(status)
}

const  get_data=(endpoint,exito,fallo)=>{
    //2 creamosel objeto de conexion
    let http =new XMLHttpRequest()
    // abrir conexion a api
    http.open('get',endpoint)
    //4enviar la solicitud
    http.send()
    //5 hacer el tratamiento
    http.onload = ()=>{
        if(http.status ===200){
            exito(http.responseText)  
        }
        
        else{
            fallo(http.status)
        }
    }
}

//invocamos la funcion 
get_data(endpoint,exito,fallo)