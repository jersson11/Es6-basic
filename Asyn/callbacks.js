let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let endpoint='https://isro.vercel.app/api/launchers'

function exito(response){
console.log(JSON.parse(response))
}

function fallo(status){
    console.log(status)
}

function  get_data(endpoint,exito,fallo){
    //2 creamosel objeto de conexion
    let http =new XMLHttpRequest()
    // abrir conexion a api
    http.open('get',endpoint)
    //4enviar la solicitud
    http.send()
    //5 hacer el tratamiento
    http.onload = function(){
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