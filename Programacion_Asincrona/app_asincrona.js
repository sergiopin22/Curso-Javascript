
// **¿Qué significa la palabra Asincronia?

// __El término asíncrono se refiere al concepto de que más de una cosa ocurre al mismo tiempo, o múltiples cosas relacionadas ocurren sin esperar a que la previa se haya completado

// !Asincronía. La asincronía es uno de los pilares fundamentales de Javascript, ya que es un lenguaje de programación de un sólo subproceso o hilo (single thread), lo que significa que sólo puede ejecutar una cosa a la vez

// ***(setTimeout & setInterval) TEMA DE HOY TEMPORIZADORES

// !estos dos metodos reciben funciones 

// *setTimeout = 
// _establece un temporizador que ejecuta una función o una porción de código después de que transcurre un tiempo establecido.

// setTimeout(() =>{ esta es la estructura normal 
    //console.log("ejecutando un setimeout esto se ejecuta una sola vez cada segundo")
// }, 1000); todo lo que este dentro de la funcion se va ejecutar despues de 1000 milisegundo / 1 segundo 



// setTimeout(() =>{
//     console.log("ejecutando un Setimeout esto se ejecuta una sola vez cada segundo")
//  }, 10000); // si necesitas que se ejecute en 10 segundo son el milisegundo 10000

// setInterval(() => {
//     console.log("ejecutando un SetInterval esto se ejecuta cada cierto intervalo de tiempo ")
// },1000);


// let temporizador = setTimeout(() =>{
//     console.log(new Date().toLocaleTimeString())
// },1000)

// clearTimeout(temporizador);//_el cleartimeout sirve para cancelar los temporizadores y como parametro pide una variable por eso guarde el temporizador en una variable para hacer uso de esta funcion clearTimeout();
// console.log("despues del clear");


let temporizador = setInterval(() =>{
    console.log(new Date().toLocaleTimeString())
},1000)

clearInterval(temporizador)//cancela el temporizador de tipo interval y no settimeout 
console.log("despues del clear");


