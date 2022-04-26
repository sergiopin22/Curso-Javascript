// Las promesas son un concepto para resolver el problema de asincronía de una forma mucho más elegante y práctica que, por ejemplo, utilizando funciones callbacks directamente.

// Como su propio nombre indica, una promesa es algo que, en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas:

// La promesa se cumple (promesa resuelta)
// La promesa no se cumple (promesa se rechaza)
// La promesa se queda en un estado incierto indefinidamente (promesa pendiente)

// Con estas sencillas bases, podemos entender el funcionamiento de una promesa en Javascript. Antes de empezar, también debemos tener claro que existen dos partes importantes de las promesas: como consumirlas (utilizar promesas) y como crearlas (preparar una función para que use promesas y se puedan consumir).

// Las promesas en Javascript se representan a través de un , y cada promesa estará en un estado concreto: pendiente, aceptada o rechazada. Además, cada promesa tiene los siguientes métodos, que podremos utilizar para utilizarla:

//_ .then(FUNCTION resolve)	Ejecuta la función callback resolve cuando la promesa se cumple.
//_ .catch(FUNCTION reject)	Ejecuta la función callback reject cuando la promesa se rechaza.
//_ .then(FUNCTION resolve,reject)	Método equivalente a las dos anteriores en el mismo .then().
//_ .finally(FUNCTION end)	Ejecuta la función callback end tanto si se cumple como si se rechaza.

// LAS PROMESAS SON MUY UTILES PARA NO GENERAR EL FAMOSO CALLBACK, Y SE UTILIZAN ADEMAS DE UNA MANERA ELEGANTE

function cuadradoPromise(value){
    if(typeof value !== "number"){
        return Promise.reject(`el dato ingresado ${value}, no es un numero`)
    }
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random() * 1000);
    })
}

//! Hacer alucion que el resolve es el return, metodo positivo a ejecutar cuando la
//! promesa se cumple
//! Hacer alucion que el reject es el return, metodo negativo a ejecutar cuando la
//! promesa no se cumple


//_ La forma general de consumir una promesa es utilizando el .then() con un sólo parámetro, puesto que muchas veces lo único que nos interesa es realizar una acción cuando la promesa se cumpla

//_ Recuerda que podemos hacer uso del método .catch() para actuar cuando se rechaza una promesa

cuadradoPromise(5)
.then(obj=>{
    // console.log(obj)
    console.log("Inicio Promise")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(1)
})
.then(obj=>{
    // console.log(obj)
    console.log("Inicio Promise")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(2)
})
.then(obj=>{
    // console.log(obj)
    console.log("Inicio Promise")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise("3")
})
.then(obj=>{
    // console.log(obj)
    console.log("Inicio Promise")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(4)
})
.then(obj=>{
    // console.log(obj)
    console.log("Inicio Promise")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    return cuadradoPromise(5)
})
.then(obj=>{
    // console.log(obj)
    console.log("Inicio Promise")
    console.log(`Promise: ${obj.value}, ${obj.result}`)
    console.log("fin de la promesa")
})
.catch(err=> console.error(err));

// LAS PROMESAS NOS CONVIENE UTILIZARLAS CUANDO TENEMOS UNA CONCATENACION
// DE VARIOS PROCESOS ASINCRONOS 