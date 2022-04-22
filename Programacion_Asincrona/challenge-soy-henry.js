// *Reto 1
// _debmos crear una funcion que sume todos los numeros impares del array aplicando el paradigma de programacion funcional 
function sumaTodosImpares(array){

    return console.log(array.reduce((a,c) => (c % 2 !== 0 ? a + c: a), 0));
}

//sumaTodosImpares([1,5,2,9,6,4,3]);

// Operador ternario ( condición ) ? ejecuta este código : ejecuta este código en su lugar


// *Reto 2 
//_debemos crear una funcion que reciba string y que de este me retorne la palabra mas larga de esa frase 

// function stringMasLarga(str){//recibe un string 
//     console.log(str.split(" ").reduce((a,c) => (c.length > a.length ? c : a), ``))
// }



// separamos por palabras el str y con el reduce comparamos cada palabra

function stringMasLarga(str){
    console.log(str.split(" ").reduce((a,c) => (c.length > a.length ? c : a) ));
}

stringMasLarga("ayer me fui a pasear al mar");

//Reduce();
// primer parametro es la funcion y el segundo parametros es el valor incial del acumulador
// const numeros = [3, 10 ,20 ,50];
// let total = numeros.reduce((acumulador, numero) =>  acumulador + numero);

// console.log(total)
