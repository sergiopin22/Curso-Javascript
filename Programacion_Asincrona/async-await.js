// ?En  se introducen las palabras clave async/await, que no son más que una forma de azúcar sintáctico para gestionar las promesas de una forma más sencilla. Con async/await seguimos utilizando promesas, pero abandonamos el modelo de encadenamiento de .then() para utilizar uno en el que trabajamos de forma más tradicional.

//----La palabra clave async -----
// !en primer lugar, tenemos la palabra clave async. Esta palabra clave se colocará previamente a function, para definirla así como una función asíncrona, el resto de la función no cambia:

// async function funcion_asincrona() {
//     return 42;
// }

async function retornarNumero(){
    return 58
}

// _En el caso de que utilicemos arrow function, se definiría como vemos a continuación, colocando el async justo antes de los parámetros de la arrow function:

//const funcion_asincrona = async () => 42;

// _Al ejecutar la función veremos que ya nos devuelve una  que ha sido cumplida, con el valor devuelto en la función (en este caso, 42). De hecho, podríamos utilizar un .then() para manejar la promesa

// retornarNumero().then(value => {
//     console.log(`el numero retornado en la funcion anterior es : "${value}"`)
// });

// !!!Sin embargo, veremos que lo que se suele hacer junto a async es utilizar la palabra clave await, que es donde reside lo interesante de utilizar este enfoque.

// CLASS ASYNC 

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

async function funcionAsincronaDeclarada(){
    try{
        console.log("Inicio Async Function")
        let obj = await cuadradoPromise(0);// con la palabra await indicamos al programa que espere la respuesta de la funcion para poder pasar a la siguiente linea de codigo de lo contrario no.

        console.log(`Async Function ${obj.value}, ${obj.result}`)
        obj =  await cuadradoPromise(1);
        
        console.log(`Async Function ${obj.value}, ${obj.result}`)
        obj =  await cuadradoPromise(2);

        console.log(`Async Function ${obj.value}, ${obj.result}`)
        obj =  await cuadradoPromise(3);

        console.log(`Async Function ${obj.value}, ${obj.result}`)
        obj =  await cuadradoPromise(4);

        console.log(`Async Function ${obj.value}, ${obj.result}`)
        obj =  await cuadradoPromise(5);

        console.log("Fin Asyn Function")
    }catch(err){
        console.error(err)
    }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () =>{
    try{
        console.log("Inicio Async Function")
        let obj = await cuadradoPromise(0);// con la palabra await indicamos al programa que espere la respuesta de la funcion para poder pasar a la siguiente linea de codigo de lo contrario no.

        console.log(`Async Function ${obj.value}, ${obj.result}`)
        obj =  await cuadradoPromise(7);
        
        console.log(`Async Function ${obj.value}, ${obj.result}`)
        obj =  await cuadradoPromise(8);

        console.log(`Async Function ${obj.value}, ${obj.result}`)
        obj =  await cuadradoPromise(9);

        console.log(`Async Function ${obj.value}, ${obj.result}`)
        obj =  await cuadradoPromise(10);

        console.log(`Async Function ${obj.value}, ${obj.result}`)
        obj =  await cuadradoPromise(11);

        console.log("Fin Asyn Function")
    }catch(err){
        console.error(err)
    }
}

funcionAsincronaExpresada();

