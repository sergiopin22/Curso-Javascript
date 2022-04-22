// ***ESTRUCTURAS DE CONTROL 
//?es aquel mecanismo permite controlar el flujo de tu programación

// _if-else condicional que te entrega dos opciones si la condicion if no se cumple se ejecuta el else

let edad = 17;

if (edad >= 18){// aca va la condicion
console.log("eres mayor de edad");
}else{
console.log("eres menor de edad")
}

// _if - else - if - else condicionales anidados

// Dejame dormir 0hrs - 5hrs
// Buenos dias 6hrs - 11hrs
// buenas tardes 12hrs - 18hrs
// buenas noches 19hrs - 23hrs

let hora = 18;

if(hora >= 0 && hora <= 5){
    console.log("Dejame dormir :(")
}
else if (hora >= 6 && hora <= 11){
    console.log("Buenos dias")
}
else if(hora >= 12 && hora <= 18){
    console.log("Buenas tardes")
}
else if (hora >= 19 && hora <= 23){
    console.log("Buenas noches")
}

//_ Operador ternario solo se puede ejecutar en una sola linea de codigo
console.log("operador ternario")

let eresMayor = (edad <= 18) ?"Eres mayor de edad":"Eres menor de edad";
console.log(eresMayor)

// _switch -  case _ estructura de control
//?esta estructura de control sirve para cuando una variable pueda tomar diferentes casos o valores se ejecute algo y es mas conveniente usar esta estructura

// domingo 0
// lunes 1
// martes 2
// miercoles 3 
// jueves 4 
// viernes 5
// sabado 6

let dia = 3;

switch (dia) {
    case 0://caso 0
        console.log("Domingo");
        break;// indica que no siga leyendo mas caso y se salga de la estructura de contron switch 
    case 1:
        console.log("Lunes");
        break

    case 2:
        console.log("Martes");
        break
    
    case 3: 
        console.log("Miercoles")
        break 

    case 4: 
        console.log("Jueves")
        break    
    case 5: 

        console.log("Viernes")
        break    
    case 6: 

        console.log("Sabado")
        break    

    default:// si ninguno de los casos anteriores es verdadero que ejecute un algoritmo por defecto
    console.log("no existe el dia")
        break;
}

// **Estructuras de Repeticion

// **WHILE
// !El while ciclo recorre un bloque de código siempre que una condición específica sea verdadera si llega a ser falsa no ejecuta las instrucciones que hay dentro del while (while es mientras).
 let contador = 0;

 while(contador < 10){
     console.log("while" + contador);
     contador++; 
 }


// _otra variante es DO WHILE que es otro ciclo
// !El do while bucle es una variante del bucle while. Este ciclo ejecutará el bloque de código una vez, antes de verificar si la condición es verdadera, luego repetirá el ciclo mientras la condición sea verdadera, si es falsa se sale del bucle do while

// do{ 
//     contador++;
//     console.log("do while" + contador)
// }while(contador < 20);

// **EL FOR
//!este ciclo es una estructura que consta de 3 partes:(inicializacion de la variable;la condicion: decremento o incremento)

for(let i = 0; i < 10 ; i++){
    console.log("soy un for " + i);
}
//vamos a recorrer todos los elementos de un array con un for 
let numeros = [10,20,30,40,50,60,70,80,90];

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

// _variantes  del ciclo for : for in y for of

// *FOR IN : nos va a permitir recorrer o iterar las propiedades de un objeto, digamos que es un for especial para los objetos 

 const saludo_Persona  = {
     nombre: "Sergio Pinzon",
     edad: 18,
     contacto: 3112459351
 }

for (const propiedad in saludo_Persona){
    console.log(`key: ${propiedad}, Value: ${saludo_Persona[propiedad]}`);
}


// !IMPORTANTE en el ciclo for in la notacion del punto para invocar e imprimir o llamar el valor de un propiedad que hace parte de un objeto no funciona, de tal forma que utilizamos el otro metodo para llamar los valores de una propiedad que es con las llaves  []

//** */ FOR OF: nos va a permitir recorrer o iterar cada uno de los elementos de cualquier objeto en javascript que sea iterable

// que significa que sea iterable que yo pueda partirlo en pequeños elementos, como los arreglos por sus posiciones o elementos. las cadenas de texto tambien ya que podemos recorrer cada caracter que las componen

let palabra = "Hola"

for (const caracter of palabra) {
    console.log(caracter);
}

let frutas = ["manzana", "pera", "uvas"];

for (const element of frutas) {
    console.log(element);
}


// **MANEJO DE ERRORES EN JS 
// __ES UNA SENTENCIA QUE SE LLAMA TRY CATHC FINALLY ES EL MANEJO DE ERRORES DE JAVASCRIPT
// ?es una estructura que no va a permitir evaluar ciertos fragmentos de codigo y si este genera algun error lo capture el catch y pueda gestionarlo

try {// !si en el codigo del try hay un error el catch lo va a capturar
    console.log("en el try se coloca el codigo a evaluar");
    noExiste;
    console.log("segundo mensaje en el try");
} catch (error) {
    console.log("catch captura cualquier error surgido o lanzado en el try");
   console.log(error);
    
}finally{//esta  es otra seccion que no suele utilizarce mucho y es la 3 de esta estructura aya error o no siempre se va a ejecutar al final 
    console.log("el bloque finally se ejecutara siempre al final de un bloque try catch");
}



try {
    let numero = "dsad";
    if(isNaN(numero)){
        throw new Error ("el caracter ingresado no es un numero");
    }
    console.log(numero * numero);
} catch (error) {
    console.log(`se produjo el siguiente error + ${error}`);
}


// !DATOS A ACLARAR ACERCA DEL MANEJO DE ERRORES EN JS 

// _ isNaN = es not a number , esto es una funcion que nos tira verdadero cuando lo que se evalua dentro de la funcion no es un numero y es cualquier otro tipo de dato

//_throw new Error ("esto es un error");//hay varios tipos de errores pero este el error general en el que puedes comunicarle al usario final que cometio un error para el programa como tal, sin duda hay muchos tipos de errores desde el de sintaxis eventos etc.. pero el mas utilizado para programas es el anterior

// **BREAK Y CONTINUE EN JS 

const numero = [1,2,3,4,5,6,7,8,9,10];


console.log("Caso de la sentencia continue ");
for (let i = 0; i < numero.length; i++){
    // console.log(numero[i]);
    if(i === 5){
        continue;//CON ESTO LE INDICAMOS QUE OMITA UNA ITERACION O VUELTA EN ESTE CASO DEL FOR
    }
    console.log(numero[i]);
}

console.log("Caso de la sentencia break ");

for (let i = 0; i < numero.length; i++){
    // console.log(numero[i]);
    if(i === 5){
        break;// CON ESTO LE INDICAMOS QUE SALGA DEL FOR 
    }
    console.log(numero[i]);
}

// _LA DIFERENCIA ENTRE ESTAS DOS SENTENCIAS ES QUE EL BREAK SALE DE LA ESTRUCTURA DE CONTROL Y POR OTRO LADO CONTINUE OMITE UNA ITERACION EN LA ESTRUCTURA DE CONTROL O REPETICION, LAS DOS SENTENCIAS SON MUY UTLILES


// PROBLEMA IMPRIMIR NUMEROS IMPARES DE UN ARREGLO CON EL ARRAY NUMERO
console.log("problema de numeros impares");

for (let i = 0; i < numero.length; i++){
    if (numero[i] % 2 === 1){// esto es impar que lo imprima 
        console.log(numero[i]);
        continue;//con esto hacemos que salte los impares 
    }

}

// **DESTRUCTURACION EN JS

// _ES UNA NUEVA FORMA DE ASIGNAR VALORES A ARREGLOS Y A OBJETOS 

const numericos = [1,2,3, 8, 5];

//!sin destructuracion 
//_esto se considera una mala practica ya que estamos escribiendo demasiado codigo 
//_se utiliza para las propiedades de los objetos y arrays etc..

// let uno = numericos[0],
// dos = numericos[1],
// tres = numericos[2];

// console.log(uno, dos ,tres);

//Con destructuracion
//_estamos inicializando y asignado los valores a las variables desde un array

const [uno, dos ,tres, rest] = numericos;
console.log(uno,dos,tres,rest);



//_probamos con objetos la destructuracion para sus propiedades

 const persona = {
     f_Naci: 1983,
     apellido: "tovar",
     ciudad: "bogota",
     frutas: ["manzana","uvas","pera","sandia"]
 };

 let {ciudad,apellido,f_Naci} = persona;//he creado tres variables dinamicamente 

 console.log(frutas,f_Naci, apellido, ciudad);//y aca mostramos el valor de estas variables que son el valor de las propiedades del objeto persona 

//  !MUY IMPORTANTE
// _PARA QUE LA DESTRUCTURACION FUNCIONE CON LOS OBJETOS ES MUY IMPORTANTE QUE LA VARIABLE QUE CREO DINAMICAMENTE TIENE  QUE LLAMARSE IGUAL A LA PROPIEDAD DEL OBJETO QUE QUERAMOS SACAR O LLAMAR Y TENERLA LISTA PARA LUEGO UTILIZARLA
// ?DE NO TENERLO IDENTICAMENTE NOMBRADOS LAS VARIABLES NOS SALDRA UNDEFINEND EN EL VALOR DE REFERENCIA EN DICHA VARIABLE CREADA IDENTICAMENTE


// **OBJETOS LITERALES EN JS 

let nombre_Perruno = "mora",
edad_Perruna = 2;

const perro = {
    sobrenombre: nombre_Perruno,
    edad_Perruna: edad_Perruna,
    ladrar: function () {
        console.log("guaaau guaaaauuu!!!");
    }
}

console.log(perro);
perro.ladrar();

//_ DE UNA MANERA MAS SIMPLIFICADA SERIA ASI MIRA ABAJO 

const dog = {
    nombre_Perruno,
    edad_Perruna,
    raza: "Pincher",
    ladrar(){
        console.log("guaaau guaaau guaaaauuu!!!");
    }
}

console.log(dog);
dog.ladrar();


// **PARAMETROS REST Y OPERADOR SPREAD
//sacado de mdn code
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3, 5];
  
  console.log(sum(...numbers));
  sum(numbers);

//  _ LOS PARAMETROS REST SON UNA FORMA VITUALMENTE DE IR AGREGANDO PARAMETROS INFINITOS YA SEA A UNA FUNCION O DENTRO DE UNA VARIABLE TALVEZ TENGAS ALGUN ARREGLO Y EXACTAMENTE NO SABES CUANTOS VALORES VAS A RECIBIR POSTERIOR MENTE CON ESOS VALORES VAYAS A HACER CIERTAS OPERACIONES O CIERTOS PROCESOS 

// ?PARA DEFINIR LOS PARAMETROS REST DE UNA FUNCION HAY QUE DEFINIR 3 PUNTOS SUSPENSIVOS ANTES DEL NOMBRE DONDE ESTAN GUARDADOS ESTOS POSIBLES VALORES INFINITOS {...}

function sumar (a,b,...c){
    let resultado = a + b;
    c.forEach(function(n){
        resultado += n;
    })

    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
console.log(sumar(1,2,3,4,5,6));
console.log(sumar(1,2,3,4,5,6,7));


// *SPREAD OPERATOR - OPERADOR DE PROPAGACION
// _ESTO NOS PERMITE QUE CUANDO UNA EXPRESION LA TENGAMOS QUE EXPANDIR EN SITUACIONES EN DONDE TENGAMOS QUE GUARDAR MULTIPLES ARGUMENTOS O ELEMENTOS LO PODAMOS HACER

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,0];


//const arr3 = [arr1,arr2]//_al mostrarlo en consola nos aparecera que tiene 2 array 
const arr3 = [...arr1,...arr2]//?con el operador spread nos permite englobar o encabsular los elementos de esos 2 arrays en uno solo que es el array 3 
console.log(arr3);



// **ARROW FUNCTIONS - FUNCIONES FLECHAS 
// Las funciones de flecha se introdujeron en ES6.
// _LAS FUNCIONES FLECHA SON UNA NUEVA FORMA DE DEFINIR UNA FUNCION ANONIMA 

//_ Las funciones de flecha nos permiten escribir una sintaxis de función más corta

// antes
// const saludar = function (){
//     console.log("Hola");
// }

// saludar();

// AHORA SE HACE CON LAS ARROW FUNCTIONS
// ?se quita la palabra function y se le agrega en medio del parentesis y la llave la flecha ya esto pasa a ser un arrow function

const saludar = () => {
    console.log("Hola")
}

saludar();

//!DATO IMPORTANTE: CUANDO TU FUNCION SOLO TIENE UNA LINEA DE INSTRUCCION PODEMOS OMITIR LAS LLAVES Y DEJA LA FUNCION FLECHA EN UNA SOLA LINEA Y QUEDA MUCHOS MAS COMPRENSIBLE

// const saludar = () => console.log("Hola");
// saludar();

// _PARA RECIBIR PARAMETROS EN UNA FUNCION FLECHA SE HACE DE LA SIGUIENTE FORMA 

const bienvenida_Persona = (name_Person) => console.log(`Hola ${name_Person}`);
bienvenida_Persona("Sergio");

// _CUANDO UNA FUNCION FLECHA RECIBE 1 SOLO PARAMETRO PODEMOS OPTIMIZAR EL CODIGO QUITANDOLE LOS PARENTESIS, PORQUE YA NO ES NECESARIO Y QUEDA MUCHO MAS EXPRECESIVO 

// const bienvenida_Persona = name_Person => console.log(`Hola ${name_Person}`);
// bienvenida_Persona("Sergio");

// _CUANDO UNA FUNCION FLECHA NO RECIBE PARAMETROS FORZOZAMENTE TIENE QUE LLEVAR PARENTESIS

// const bienvenida_Persona = () => console.log(`Hola`);

const sumar_Valores = function (a,b){
    return a + b;
}

console.log(sumar_Valores(8,9));

// !RECORRIENDO LOS ELEMENTOS DE UN ARRAY HACIENDO USO DE LAS FUNCIONES DE FLECHA
const array_Numbers = [1,2,3,4,5,6];

array_Numbers.forEach( (el, index) =>{
    console.log(` ${el} ESTA EN LA POSICIÓN ${index} `)
})

// !UNA CARACTERISTICA DE LAS ARROW FUNCTIONS SON ES QUE CAPTURAN EL OBJETO THIS DEL CONTEXTO EN EL QUE SE ENCUENTRAN 

//_ SIN LAS ARROW FUNCTIONS NOS MUESTRA EL CONTEXTO DEL NAVEGADOR QUE ES EL OBJETO WINDOW
// function Perro (){
//     console.log(this);
// }

// Perro();


//_ SIN LAS ARROW FUNCTIONS NOS MUESTRA EL CONTEXTO DEL OBJETO DONDE SE ENCUENTRA EN ESTE CADO EN EL OBJETO PERRO MOSTRANDONOS EN CONSOLA LAS DOS PROPIEDADES CON SUS VALORES
// const Perro = {
//     nombre: "Kenai",
//     ladrar:function () {
//         console.log(this)
//     }
// }

// Perro.ladrar();

//_MIENTRAS QUE CON LAS ARROW FUNCTIONS DENTRO DE UN OBJETO NOS MUESTRA EL OBJETO DEL NAVEGADOR QUE ES EL OBJETO WINDOW COMO TAL 
 const Perro = {
     nombre: "Kenai",
     ladrar: () => {
         console.log(this)
     }
 }

 Perro.ladrar();
    
//!! OJO POR ESO EN RESUMEN HAY QUE TENER MUCHO CUIDADO ARROW FUNCTIONS PARA DECLARAR METODOS O FUNCIONES DENTRO DE OBJETOS LITERALES POQUE PODEMOS TENER ESTE PEQUEÑO PROBLEMA QUE NOS PUEDA A LA LARGA HACER PERDER MUCHO TIEMPO YA QUE SALTAN EL CONTEXTO EN DONDE ESTAN Y PASAR A ESTAR EN OBJETO WINDOW

// **********************!EN SI NO UTILIZARLAS PARA LOS OBJETOS*****************


