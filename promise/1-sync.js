let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/type'






const get_data=(endpoint)=>{
    //definir promesa para la conexion de api
    let promise = new Promise((resolve,reject)=>{
    //1. CREAMOS EL OBJETO DE CONEXION A LA API
    let http=new XMLHttpRequest()
    //2.abrir una conexion
    http.open('get',endpoint)
    //3.enviar la solicitud(request) a la api
    http.send()
    //4.hacer el tratamiento de la response
    http.onload = ()=>{
      if(http.status===200){
          resolve(http.responseText)
      }else{
          reject(http.status)
      }
  }
  
})
return promise
}
const exito = (response)=>{
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`Tipo:${tipo.name}`)
        console.log(`-----------------`)
    })
/*console.log(JSON.parse(response).results*/
}
const fallo =(status)=>{
    console.log(status)
}
//invocar funcion get_date
get_data(endpoint)
.then((response)=>{
    exito(response)
})
.catch(()=>{
    fallo(status)
})