// _Symbol es un tipo de datos cuyos valores son únicos e immutables. Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos.  Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.

// symbol es dato primitivo que fue introducido despues del estandar 5

// ?una vez que nosotros creamos un simbolo o symbol su valor se va a mantener privado y para uso interno, generalmente los symbol suelen agregarse como caracteristicas de objetos, como una propiedad y estas se van a mantener privadas 

// ojo no podemos utilizar el operador new, sino directamente mandamos a llamar a la funcion costructora

// Cosa Peculiar del Symbol: es que los simbolos nos permiten crear identificadores unicos, identificadores de referencia 

let identificador = "hola";
let identificador2 = "hola";
console.log(identificador === identificador2) // esto nos devuelve true

// pero si lo hacemos con symbol seria de la siguiente forma

let id = Symbol("id");//esta es como una pequeña description o nombre de etiqueta del symbol
let id2 = Symbol("id2");
console.log(id === id2) // esto nos devuelve false, porque el symbol es como un objeto crea una referencia unica
console.log(typeof id,typeof id2)//el tipo de datos que nos arroja es symbol en string 

//! LOS SIMBOLOS SUELEN USARSE A MENUDO PARA IDENTIFICAR LAS PROPIEDADES DE OBJETOS, JUSTAMENTE PARA EVITAR COLICIONES ENTRE PROPIEDADES QUE DIGAMOS QUE PUDIERAMOS SOBRESCRIR

// como buena practica cuando crees algo que necesita un symbol crea las con constantes, ya que los symbols no deberian de cambiar a largo plazo, acuerdate son identificadores y no deberia de cambiar 

//? COMO LE AGREGARIAMOS UN SYMBOL A UN OBJETO?
const NOMBRE = Symbol("nombre")
const persona = {
    [NOMBRE]: "Sergio Pinzón"
}

console.log(NOMBRE)//nos imprime : Symbol(nombre)
console.log(persona)//nos imprime el objeto y nos muestra que la propiedad es symbol y de etiqueta es nombre con cuyo valor "Sergio Pinzón"

// !symbol es muy util ya que si ejemplo creas una api, algunos valores es mejor mantenerlos privado ya que son de cierta forma hacer funcionar dicha api, entonces conviene utilizar symbol para estos casos

persona.NOMBRE = "SERGIO ALEJANDRO"
console.log(persona)

// y aunque intencionalmente cree una propiedad para la clase persona llamada como la variable de tipo symbol, no nos bota error es justamente por la notacion de los corchetes para asignarle un valor a la variable symbol dentro del objeto

console.log(persona.NOMBRE);//nos imprime SERGIO ALEJANDRO
console.log(persona[NOMBRE]);//nos imprime Sergio Pinzón
console.log(persona.nombre);//nos imprime undefined y esto es por medio de la etiqueta que le asignamos al symbol 

// _para imprimir una propiedad que ha sido declarada con symbol lo hacemos sin la notacion del punto solo con los corchetes y el nombre de la propiedad 

// !Creacion de una funcion con Symbol

// es practicamente la misma sintaxis y dinamica

const SALUDAR = Symbol();

persona[SALUDAR] = function (nombre) {
    console.log(`Que tal esta tu dia ${nombre}`);
}

persona[SALUDAR](persona[NOMBRE]);// y tambien se invoca con la notacion de los corchetes

console.log(persona)//aca nos imprime y nos damos cuenta que si aparece la funcion en el objeto 

// Recorrer los elementos con el objeto persona

for (let propiedad in persona) {
    console.log(propiedad)
    console.log(persona[propiedad])
}

// !solo nos mostro la propiedad y valor de la propiedad NOMBRE, La funcion symbol y la variable symbol no aparece otro dato muy peculiar e interesante ya que como lo mencione los symbols se mantienen privados 

// ?SI QUEREMOS MOSTRAR LOS SYMBOLS HAY UN METODO BUENISIMO QUE HACE PARTE DEL OBJECT Y ESTE NOS LO DEVUELVE A MANERA DE ARRAY

console.log(Object.getOwnPropertySymbols(persona))



