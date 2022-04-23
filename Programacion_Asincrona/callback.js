// __¿Qué hace el callback?
//? Nos ayuda a desarrollar código JavaScript asíncrono 
//? y nos mantiene a ?salvo de problemas y errores. En JavaScript, 
//? la forma de crear una ?función callback es pasándola como parámetro a otra 
//? función, y luego ?llamarla de vuelta justo después de que haya ocurrido 
//? algo o se haya ?completado alguna tarea

const operacion = function (numero1, numero2, callback){
    console.log(callback(numero1, numero2)) 
}

operacion(1,4,(a, b) => a + b )
operacion(1,4,(a, b) => a * b )
operacion(1,4,(a, b) => a - b )


function saludar (nombre, callback){
    let saludo = `hola ` + nombre
    callback(saludo)
}

saludar(`Sergio`, function(resultado){
    console.log(resultado)
});


const detectarEdad = function (añoNacimiento,callback){
    let Años = 2022 - añoNacimiento;
    callback(Años)
}

detectarEdad(2003,(edadPersona)=>{
    console.log(edadPersona)
})

// _Ejemplo de callback jon mircha

function cuadradoCallback (value, callback){
    setTimeout(() => {
        callback(value, value * value)
    }, 0 | Math.random() * 1000);
}

cuadradoCallback(5,(value, result)=>{
    console.log("inicia la callback")
    console.log(`callback value ${value}, resultado ${result}`)
})



// !CALLBACK HELL O PIRAMIDE DEL INFIERNO

// ?¿Qué es el Callback Hell? Consiste en múltiples Callbacks anidados que provocan que el código se vuelva difícil de leer y 'debuggear'; ésta es la principal razón por la cual se debe evitar. Es entendible que un aprendiz padawan caiga en el Callback Hell mientras lidia con lógica asíncrona.

// _ESTE ES EL CALLBACK HELL, DE HECHO ES FAMOSO TANTO QUE HAY MEMES DE ESTO 

// cuadradoCallback(2,(value,result)=>{
//     console.log("inicia la callback")
//     console.log(`este es el valor ${value}, y el resultado es ${result}`)
//     cuadradoCallback(3,(value,result)=>{
//         console.log(`este es el valor ${value}, y el resultado es ${result}`)
//         cuadradoCallback(4,(value,result)=>{
//             console.log(`este es el valor ${value}, y el resultado es ${result}`)
//             cuadradoCallback(5,(value,result)=>{
//                 console.log(`este es el valor ${value}, y el resultado es ${result}`)
//                 cuadradoCallback(6,(value,result)=>{
//                     console.log(`este es el valor ${value}, y el resultado es ${result}`)
//                     cuadradoCallback(7,(value,result)=>{
//                         console.log(`este es el valor ${value}, y el resultado es ${result}`)
//                         cuadradoCallback(8,(value,result)=>{
//                             console.log(`este es el valor ${value}, y el resultado es ${result}`)
//                             cuadradoCallback(9,(value,result)=>{
//                                 console.log(`este es el valor ${value}, y el resultado es ${result}`)
//                                 cuadradoCallback(10,(value,result)=>{
//                                     console.log(`este es el valor ${value}, y el resultado es ${result}`)
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


// _LAS CALLBACKS SON EL PRIMER MECANISMO QUE TENEMOS PARA CONTROLAR JUSTAMENTE 
// _LA ASINCRONIA PARA QUE TODO LO QUE SE ESPERA DE NUESTRA APLICACION QUE VAYA 
// _FUNCIONANDO PASO A PASO, TENGAMOS ESE CONTROL Y NO SE VAYAN PERDIENDO POR AHY 
// _COSAS O DAÑANDO DE IGUAL FORMA.