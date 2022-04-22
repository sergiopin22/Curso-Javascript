// ?Problemas de programacion para mejorar la logica

//_ 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


// function contadorcaracteres (cadena = ""){

//     if(!cadena){
//         console.warn("oye tienes que colocar una cadena de texto");
//     }
//     else{
//         console.log(`la palabra que escribiste fue ${cadena}, y el numero de caracteres es de ${cadena.length}`);
//     }

// }

// contadorcaracteres("Hola mundo");

// _otra forma seria

//  const contarCaracteres = (cadena = "") =>
//  (!cadena)? console.warn("oye tienes que colocar una cadena de texto"):console.log(`la palabra que escribiste fue ${cadena}, y el numero de caracteres es de ${cadena.length}`);

//  contarCaracteres("Hola Mundo");

// ?COMPLETADO

// console.clear();

//_ 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


// const recortarTexto = (cadena = "", longitud = undefined) =>
// (!cadena)//si la cadena esta vacia entonces
// ?console.warn("no ingresaste el texto")//verdadero
// :console.info(cadena.slice(0,longitud));//falso

// recortarTexto("hola Mundo", 4); 

const recortarTexto = (cadena = "", longitud = undefined) =>
(!cadena)//si la cadena esta vacia entonces
?console.warn("no ingresaste el texto")//verdadero
:(longitud === undefined)
?console.warn("no ingresaste la cantidad a cortar al texto")//verdadero
:console.info(cadena.slice(0,longitud));//falso

recortarTexto("Hola Mundo", -4); 
recortarTexto("Hola Mundo" ); 
recortarTexto(); 
recortarTexto(undefined,4); 
// console.clear();












// function texto (){
//     let frase1 = "Hola mundo";
//     let frase2 = frase1.split("");
//     console.log(frase2)

//     for(let i = 0; i < frase1.length; i++){
//         let frase3 = frase2.push(i)
//     }

// }

// texto();

// let string   = prompt('Ingrese una cadena de texto');
// let quantity = prompt('Ingrese la cantidad a recortar');

// funcion

// const ejercicio02 = (string, quantity)=> {//funcion expresada string y cuantity son los parametros 
//     if(!string) {//si es diferente de string
//         console.warn(`Necesitas una cadena de texto válida`);
//         alert('Necesitas una cadena de texto válida');   
//     } else {
//         if(typeof string != 'string') {
//             console.warn(`Es necesario una cadena de texto`);
//             alert('Es necesario una cadena de texto');
//         } else {
//              quantity = quantity * 1;
//             if(quantity && typeof quantity === 'number') {
//                 console.log(`El resultado del texto recortado es: ${string.substr(0,quantity)}`);
//                 return alert(`El resultado del texto recortado es: ${string.substr(0,quantity)}`);
//             } else {
//                 console.warn(`Necesitas un número valido o que no sea 0`);
//                 alert(`Necesitas un número valido o que no sea 0`);
//             }
//         }
//     }
// }

// ejercicio02(string, quantity);



//! ME FALTA


// _3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// function separador_texto (){
//     let str = "hola que tal";
//     let arr = str.split(` `, 3);
//     console.log(arr);
// }


// const separador_texto = () =>{
//     let str = "hola que tal";
//     let arr = str.split(` `, 3);
//     return console.log(arr);
// }

const separador_texto = () =>{
    let str = "hola que tal soy un programador";
    let arr = str.split(` `);
    return console.log(arr);
}

separador_texto();
console.clear();


//otra forma y es la de jhon mircha
const cadenaAArreglo = (cadena = "", separador = undefined) =>
(!cadena)//si la cadena esta vacia entonces
?console.warn("no ingresaste el texto")//verdadero
:(separador === undefined)
?console.warn("no ingresaste el caracter separador")
:console.info(cadena.split(separador));

cadenaAArreglo(`soy un macho alfa y estoy compuesto por varias palabras `, "-");
cadenaAArreglo();

// console.clear();

// ?COMPLETADO

// _4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

//function imprimir_texto (){
//    let contador = 0;
//    let numero_veces = prompt("cuantas veces quieres imprimir el texto en consola");
//
//     while(contador < numero_veces){
 //        console.log(`Hola Mundo ${contador}`);
//         contador++;
 //    }
// }

 //imprimir_texto();

 //otra forma de hacerlo con una funcion expresada

//  const imprimirTexto = () => { 
//      let contador = 0;
//      let palabra = prompt("que palabra vas a imprimir")
//      let numeroVeces = prompt("cuantas veces quieres imprimir el texto en consola");
//     while (contador < numeroVeces) {
//         console.log(`hola mundo ${contador}`);
//         contador++;
//     }
//    }

//    imprimirTexto();
console.clear();

const repetirTexto = (texto = "", veces = undefined) =>{
    if(!texto) return console.warn("no ingresaste un texto");
    if(veces === undefined) return console.warn("no ingresaste el numero de veces a imprimir");
    if(veces === 0) return console.error("el numero de veces no puede ser 0");
    if(Math.sign(veces) === -1) return console.error("el numero de veces no puede ser negativo");

    for(let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
}

repetirTexto("hola mundo", 3);
repetirTexto("hola mundo", 0);
repetirTexto("", 20);
repetirTexto("Hola mundo");



//  ?COMPLETADO




