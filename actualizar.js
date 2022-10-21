import materias from "./materias";
export const actualizar= materias.splice( 1,2, {id:2,
    nombre:"matematicas",
    instructor:"jose",
    tipo: "transversal",
    notas: [
     4.0,
     4.2,
     3.2]
    })
    