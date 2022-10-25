
import pkg from 'colors'

const materias= [
    {id:"1",
    nombre:"php avanzado",
    instructor:"cristian",
    notas:[
    4.5,
    3.8,
    4.0] },

    {id:"2",
    nombre:"php basico",
    instructor:"hernando",
    notas:[
    4.5,
    3.8,
    4.0] },

    {
        id:3,
        nombre:"calidad",
        instructor:"tatiana",
        tipo: "tecnica",
        notas: [
         4.5,
         4.4,
         3.2
        ]
     }

]




// //console.log(materias);

// //metodos de los objetos Arreglo
// //foreach:recorre un arreglo
// materias.forEach((materias)=>{
//     if(materias.tipo==='transversal'){
//         console.log(`materias:${materias.nombre}`.yellow)
//         console.log(`materias:${materias.instructor}`.blue)
//     }
   
// })

// //map: construye un arreglo con base en otro
// const profesores = materias.map((materias)=>{
//     return materias.instructor
// })

// //find: encontrar la primera ocurrencia(elemento)
// //que cumpla con el criterio dado

// const PHP = materias.filter((materia)=>{
//     return materia.instructor==="yaneth castillo"
// })


// //push: agrega un elemento a un arreglo:
// materias.push(  {
//     id:4,
//     nombre:"diseño",
//     instructor:"julian urrea",
//     tipo: "tecnica",
//     notas: [
//      4.5,
//      4.4,
//      3.2
//     ]
//  })

//  //splice: delete
//  materias.splice(0,1)
//  console.log(materias);


const actualizar = materias.findIndex(materia => materia.tipo == "tecnica");
materias[actualizar].id="50"
materias[actualizar].nombre="psicologia"
materias[actualizar].instructor="jersson"
materias[actualizar].tipo="virtual"
console.log(materias[actualizar])


