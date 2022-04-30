// _JavaScript Object Notation o Notación de Objetos de JavaScript, es un formato ligero de intercambio de datos. Leerlo y escribirlo es simple para humanos, mientras que para las máquinas es fácil de interpretar y generar. Todos los lenguajes de programación lo soportan.

// vamos a crear un objeto con todos los datos que recibe json 

const datos = {
    cadena :"sergio",
    numero :25,
    booleano :true,
    arreglo :["correr", "programar", "cocinar"],
    objeto: {
        telefono: 3112459351,
        correo: "sergiopin2220@gmail.com"
    },
    nulo: null
}

console.log(datos)

// Dato importante de la sintaxis de json
// el formato json empieza con las llaves toda propiedad y valor de un objeto van con comillas
// json no acepta comillas simples ni template string 
// todos los valores desde los numeros valores bool van con comillas en json


// !METODOS DE JSON

//? JSON.parse() = analiza una cadena de texto como JSON, transformando opcionalmente a un valor que sea valido en javascript 

console.log("{}")//aca ya javascript lo reconoce como unas llaves pero en string
console.log(JSON.parse("{}"))//aca ya javascript lo reconoce como un objeto
console.log("true")//aca ya javascript lo reconoce como un booleano pero en string
console.log(JSON.parse("true"))//aca ya javascript lo reconoce como un booleano
//console.log(JSON.parse("undefined"))//!no es valido como dato para javascript 

//? JSON.stringify() = El método JSON.stringify()convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante una matriz de reemplazo.

// EN SI ES LO CONTRARIO DEL METODO ANTERIOR MIENTRAS QUE PARSE CONVERTIA UN STRING A UN OBJETO, ESTE METODO
// CONVIERTE A UN OBJETO O DATO EN CADENA DE TEXTO 

// EJEMPLO 

console.log(JSON.stringify({}))//aca ya javascript lo reconoce como unas llaves dentro de un string es un string !!
console.log(JSON.stringify([1,5,6])) 
// !!Esto es lo que me vota la consola de la linea anterior, en resumen paso array u objeto en string cadena de texto
// typeof JSON.stringify([5,8,9])
// 'string'

console.log(JSON.stringify(datos))
// EL OBJETO VALIDO PARA JAVASCRIPT ME LO PASO VALIDO PARA FORMATO JSON
// {
//     "cadena":"sergio",
//     "numero":25,
//     "booleano":true,
//     "arreglo":["correr","programar","cocinar"],
//     "objeto":{"telefono":3112459351,"correo":"sergiopin2220@gmail.com"},
//     "nulo":null
// }