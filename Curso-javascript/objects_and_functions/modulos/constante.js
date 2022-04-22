export const PI = Math.PI;//!para decirle que esta constante se exporte, colocamos al inicio export

export let usuario = "sergiopin22";
  let contraseña = "ciber2020";//_si queremos agregarle el default a una constante o variable hacemos primero una asignacion y luego le cedemos el export y default a la variable o constante esto para que no nos lance un error sintantico ya luego si es para una funcion o un clase es normal   
//   export default contraseña;

export const sergio = {
    nombre: "sergio",
    apellido: "pinzon"
};

export default function saludar (){
    console.log("hola modulos emascript");
}

//EL DEFAULT LO QUE HACE ES QUE CUANDO SE EXPORTE ESTE ARCHIVO, CUANDO SE MANDE A LLAMAR SE AUTOCOMPLETE Y SE LLAME ASI MISMA 

// !OJO: EN UN MISMO ARCHIVO JS NO SE PUEDE TENER YA SEA 2 METODOS, 2 VARIABLES, 2 OBJETOS CON DEFAULT NOS ES PERMITIDO Y NOS LANZA EN CONSOLA QUE ESTO NO ES PERIMITIDO 

// export default function saludar2 (){
//     console.log("hola modulos emascript");
// }

// ALGO CURIOSO QUE TIENE EL DEFAULT SOBRE LAS FUNCIONES EXPRESADAS ES QUE NO FUNCIONAN NOS MANDA UN ERROR DE SINTAXIS, UTILICEN LAS DECLARADAS O LAS ARROW FUNCTION CUANDO TRABAJEN CON DEFAULT

// export default let myfunction = function(){

// }

export class Saludar{
    constructor(){
        console.log("Hola clases +ES6");
    }
}




