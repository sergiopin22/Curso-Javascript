//!kldfasjlkfafdasdfaasfdasdf fundamnetos claves
//?kldfasjlkfa para preguntas
////kldfasjlkfa para cerrar ideas erroneas de algun concepto o duda cuando se aclaro
//_kldfasjlkfa esto es mas que nada para tips que vayamos sabiendo y acordarnos
//*kldfasjlkfa para dar titulos en que cada concepto que se este tocando

/* var hola = "hola mundo" // !al declarar esta variable con var, esta es de ambito global
        let saludo = "Let es mejor"//_ al declarar esta variable con Let, esta es de ambito de bloque
        console.log(hola)f
        console.log(saludo)
        console.log(window)
        {
            //Esto es un bloque de codigo
        }
       //////////////////////////////////////////////////////////////////////////////////////
        //Ambito de bloque

        console.log("***********************VAR*****************************")
        var musica = "Rock"
        console.log("variable musica antes del bloque ", musica);
        {
            var musica = "POP"
            console.log("variable musica dentro del bloque ", musica);
        }    
        console.log("variable musica Despues del bloque ", musica);   

        console.log("***********************LET*****************************")

        let musica2 = "Rock"
        console.log("variable musica antes del bloque ", musica2);
        {
            let musica2 = "POP"
            console.log("variable musica dentro del bloque ", musica2);
        }    
        console.log("variable musica Despues del bloque ", musica2); */  

///////////////////////////////////CONSTANTE///////////////////////////////////////////////
let a;// !la  variables si pueden estar vacias y luego referenciar su valor
//!const dos; No se pueden crear constantes vacias, tienes que asignarles un valor, desde el primer momento en que la creas
// const Pi = 3.1416 //Correcto
// console.log(Pi)
// a = "Esto es una a";
//_Pi = 3; las constantes no se les puede reasignar un valor nuevamente como las variables 
//_las constantes las utilizamos para valores constantes que no cambian en el tiempo de creacion del programa
///////////////////////////////////Objeto/////////////////////////////////////////////////////
//!un objeto es un conjunto de atributos y valores entre llaves de algo o alguien 
// const Objeto = {
//     nombre : "Sergio Pinzón",
//     edad : 18
// }
//!un arreglo es una coleccion de datos, (una variable que almacena varias variables xD)
//!luego veremos bien la clase de arreglos y objetos
// const colores = ["blanco", "amarillo", "azul", "gris"];

// console.log(Objeto)       
// console.log(colores)    

// Objeto.correo = "Sergiopin2220@gmail.com"//_añadimos un atributo al objeto
// colores.push("anaranjado")//_añadimos un atributo al array con push()
// //_y volvemos a imprimir en consola

// console.log()       
// console.log(colores)    
//!Conclusion de const, es que si declaras valores primitivos con const, no vas a poder cambiar 
//!el valor o reasginarselo ya que los primitivos acceden directamente al valor 
//*** pero si definimos valores compuestos con const, si podremos agregar o quitar elementos :)**

//Finalmente utilizamos let para variables que van a cambiar el valor o su tipo de dato a lo 
//largo del ejecucion y creacion del programa

// y const para variables que no van a cambiar ni en valor ni en tipo de dato a lo largo de la
//ejecucion y creacion del programa, tambien seria bueno usar const para tipos de datos compuestos
// ejemplo : arreglos, objetos etc..

// ********************************TIPOS DE DATOS EN JAVASCRIPT*****************************

//*CADENAS DE TEXTO = STRINGS

// let nombre = "Sergio Alejandro";
// let apellido = 'Pinzón Barriga'
// let saludo1 = new String ('Hola Mundo');
// let saludo2 = new String ("Hola Bro");
// let lorem = "                                          Esto es un            parrafo de una linea para ser forzado con los metodos nuevos de abajo.";
// holaskdfja

// console.log(nombre, apellido, saludo1, saludo2);
// console.log(nombre.length); // Length es una propiedad para saber cuantos caracteres tiene una
// //*cadena de string :)
// console.log(apellido.toUpperCase(),//* metodo para convertir todo a MAYUSCULAS
// //*saludo.toLowerCase(),//* metodo para convertir todo a minusculas
// lorem.includes("ser"),// *metodo para saber si se encuentra alguna palabra en algun String o cadena de texto   
// lorem.includes("mi nombre"),
// lorem,
// lorem.trim(),// *este metodo es para quitar los espacios en blanco o los caracteres que hayan afuera del texto
// lorem.split(" "),// *este, metodo es para separar palabras o espacios un texto y no los coloca en un arreglo
// lorem.split(",")
// );

//*2 CARACTERISTICAS DE LAS CADENAS DE TEXTO!!
//! 1) LA CONCATENACIÓN = es unir un texto con una variable de tipo cadena STRING
//_EJEMPLO

// let apodo = "Speed "
// let mensaje = "Es un crack "
// let mensaje2 = "freefire"

// let concatenar = apodo + mensaje + "Esto es concatenar PAPA XD ";
// console.log(concatenar)

//!2) INTERPOLARIDAD DE VARIABLES = es meter dentro de una cadena de texto el valor dinamicamente de una variable
//_TEMPLATE STRING `${Variable}` - tambien podemos mostrar datos solo con `mensaje ul bla bla`

// let interpolaridad = `Estoy probando la interpolaridad de variables, soy ${apodo} en ${mensaje2}`
// console.log(interpolaridad);

// let ul = "<ul> <li>Enero</li><li>Febrero</li>        <li>Marzo</li><li>Junio</li  <li>Julio</li></ul>";

// let ul2 = `<ul>
// <li>Enero</li>
// <li>Febrero</li>
// <li>Marzo</li>
// <li>Junio</li>
// <li>Julio</li>
// </ul>`
// console.log(ul);
// console.log(ul2);

//*NUMBERS

// console.log("Tipo de dato Numeros")
// let j = 2;
// let b = new Number(1);
// let decimal = 7.19;
// console.log(j,b)
// console.log(decimal.toFixed(1));// _el metodo tofixed nos pregunta cuando numeros decimales queremos mostrar y los aproxima dependiendo de lo que coloquemos en los parentesis del metodo
// console.log(decimal.toFixed(5));
// console.log(parseInt(decimal));// _el metodo parseint() nos devuelve la parte entera recibe string o numbers
// console.log(parseFloat(decimal)) //_el metodo parseFloat() nos imprime la parte flotante no es muy util como lo es parseInt()

// *NUll UNDEFINED Y NAN

// _Undefined es crear una variable mas no asignarle o darle valor y al mostrar la variable o lo que contiene nos lanza undefined que seria en español indefinido

//let variable;
//alert(variable)

// _Null es un valor especial que significa esta vacia y se le suele declarar de manera intencional cuando se necesita

//let nulo = null;
//alert(nulo)

// _Nan es not a number es un aviso que nos manda js para indicarnos que lo que estamos operando o ejecutando no son numero y son otros tipos de datos, pueden ser strings booleans etc.. aqui va un ejemplo

//let noEsUnNumero = "hola" * 25;
//alert(noEsUnNumero);


// *Function o Funciones en javascript 
// ?que es un funcion? es un bloque de codigo autocontenido, independiente al scope o ambito global y que se define una sola vez , y podras ejecutarlo y reutilizarlo cuantas veces lo requieras, una funcion puede o no recibir parametros y tambien  puede o no devolver valores, las funciones se consideran objetos

// _2 maneras de crear funciones

// Funciones declaradas y funciones expresadas

// !Funcion declara

// function estoEsUnaFuncion (){
    //     console.log("uno")
    //     console.log("dos")
    //     console.log("tres")
    // }
    
    // _Esta funcion ni utiliza parametros ni retornan valores la de arriba
    
    // ya esta declarada pero en banca aun no se ejecuta
    // mandemosla a llamar 
    // !llamar
    // *estoEsUnaFuncion();
    
    // !Funcion que devuelve valor
    // _Cuando una funcion devuelve  valor tenemos que usar una palabra reservada que se llama return
    // function funcionQueDevuelveValor(){
//     console.log("uno")
//     console.log("dos")
//     console.log("tres")
//     return "la funcion ha retornado esta cadena de texto"
// }

// let valorDeFuncion = funcionQueDevuelveValor();

// console.log(valorDeFuncion)

// !importante
//_Cuando una funcion dentro de su cuerpo de llaves tiene  un return el interprete o el compilador del navegador apenas lee esa palabra reservada return inmediatamente ignora lo siguiente de return y ejecuta todo lo anterior al return

//  function funcionQueDevuelveValor(){
    //      console.log("uno")
    //      return 19 // aca se detiene la ejecucion e ignora los siguiente de este return
    //      console.log("dos")
    //      console.log("tres")
    //      return "la funcion ha retornado esta cadena de texto"
    //  }
    
    //  let valorDeFuncion = funcionQueDevuelveValor();
    
    //  console.log(valorDeFuncion)
    
    // !Funcion que recibe parametros y valores
    // _estos parametros o valores que estan dentro de el parentesis de la funcion son valores locales e internos que van a hacer necesarios para la ejecucion de la funcion saludar
    
    // function saludar(nombre, edad){// aca  recibe los parametros
    //     console.log(`Hola  mi nombre es ${nombre} y tengo ${edad} años`)
    // }
    
    // saludar("Laura", 18);//!aca recibe sus 2 valores a si de sencillo
    // saludar(); //!si ejecutamos asi la funcion nos va a lanzar undefind no hay nada definido como tal
    
    // _Tambien podemos igualar por defecto a los parametros un valor para que no diga undefind 
    // *ejemplo
    
    // function saludar(nombre = "Desconocido", edad = 0){
        //     console.log(`Hola  mi nombre es ${nombre} y tengo ${edad} años`)
        // }
        
// saludar(); 

// !ESTO ES UN DATO DEMASIADO IMPORTANTE E INTERESANTE 
//*Las funciones tambien se pueden llamar o invocar aun asi estando unas lineas antes de la funcion  declarada, en cualquier lugar de tu documento la podes invocar y no traera problemas  


// *Funciones expresadas 
// _es Crear una Funcion y asignarsela dinamicamente a una variable 

// ?funcion anonima ya que esta no tiene nombre y como tal se la estamos asignado a una variable de tipo constante

// funcionExpresada();

// const funcionExpresada = function (){
    //     console.log("Esto es una funcion expresada, es decir es una funcion que se le a asignado como valor a una variable, si invocamos esta ] funcion antes de su definicion js  nos dira, `Cannot access 'funcionExpresada' before initialization`    ")
    // }
    
    // funcionExpresada();
    
    
    // *ARREGLOS - Array TEMA
    // _Es una coleccion de elementos, estos elementos pueden ser diferente tipo de dato.
    // ?ejemplo
    
    const A = [];//array vacio
    const B = [true, "hola", 52, ["A", "B", "C"]];//array que contiene diferentes datos
    
    console.log(A);
    console.log(B);
    //console.log(B.length);// ?length nos ayuda a saber cuantos elementos hay en ese array, como cuando usas estas propiedad en cadenas de texto y te indica cuantos caracteres tiene la cadena de texto
    
    // !Los arreglos siempre van a empezar desde la posicion cero y no empiezan como es habitual en nuestro mundo desde 1
    
    // *Para mostrar un elemento tenemos que colocar en los corchetes la posicion del elemento, mas no el numero del elemento
    //console.log(B[3]);
    console.log(B[2]);
    console.log(B[3][2]);//?aca estamos accediendo del array B a al array de letras y trayendo la c a imprimir 
    
    // !Otra forma de crear array es la siguiente 
    // ?el metodo of() es utilizado para cargar dentro del array los elementos que quiero que contenga el array c
    // ?es una nueva forma de crear arrays implementada en el 2015 en js
    
    const c = Array.of("dato1","dato2","dato3",4,5);
    console.log(c);
    console.log(c[2]);

    //Nuevo metodo
    const d = Array(100).fill(false);// _metodo fill este le coloca un valor a esos 100 elementos a false 
    console.log(d);

    const colores = ["rojo", "verde", "azul", "blanco"];
    console.log(colores);
    
    // !Para agregar un nuevo elemento a array se utiliza el metodo Push();
    colores.push("negro", "cyan");
    console.log(colores);
    
    // !Metodo pop sirve para quitar el ultimo elemento de un array lo elimina como tal de el array
    colores.pop();
    console.log(colores);

    colores.forEach(function (element,index){
        console.log(`<li id = "${index}">${element}</li>`);
    });

    // 

    const frutas = ["manzana", "pera", "mandarina", "sandia"];//hice un array
    frutas.forEach(myfunction);//_ejecute el metodo foreach al array segun el algoritmo de la funcion : myfunction este se ejecuta de tal forma imprimiendo mi fruta y la posicion de esta

    function  myfunction (element, index){//_index, indice o iterador como lo quieran llamar esto es la posicion como tal
        console.log(`la ${element} es una de mis frutas preferidas y su posicion en js es ${index} `);
    } 


// _Mismo metodo diferente analogia :D de aplicacion, mira abajo


console.log("******************************************************************************");


const materias = ["español", "matematicas", "ingles", "sociales", "estadistica"];

materias.forEach(myfunction2);

function myfunction2 (elemento, id){

    console.log(`${elemento} ${id}`);

}


// *Objetos en javascript
// !Todo en javascript es un objeto y esto es confirmadisimo

const objeto = {}// los objetos se declaran asi
console.log(objeto);

// !Un objeto es una coleccion de llaves y valores 
// _los valores que puede soportar los objetos es cualquier tipo e incluso hasta una funcion o array

const Sergio = {
    nombre:"Sergio",
    apellido:"Pinzón",
    edad:18,
    pasatiempos:["armar rubik", "jugar free", "Salir a tomar sol", "hacer proyectos web"],
    soltero:true,
    contacto:{// ?puede tener objetos dentro de otro objeto
        correo:"sergiopin2220@gmail.com",
        telefono:3112459351,
        instagram:"soy_pinzon"
    },
    saludar: function (){
        console.log("hola :D")
    },
    digaMiNombre:function (){
        console.log(`Hola mi nombre completo es ${this.nombre} ${this.apellido} y tengo ${this.edad} años  de igual forma si quieres contactarme no dudes en escribirme en ${this.contacto.correo} o tambien puedes llamar a este ${this.contacto.telefono}`);
    }
}

// !la palabra this hace referencia al contexto donde nos encontramos y en este caso es dentro del objeto o el objeto como tal  

// _para invocar el valor de la propiedad se usa el nombre del objeto y seguido sin espacio un .

console.log(Sergio.edad);
console.log(Sergio.pasatiempos[2]);//?accedemos al objeto luego al array y de este array a un elemento en especifico
console.log(Sergio.contacto.correo);//?accedemos al objeto y volvemos a acceder a otro objeto y de ahi a una de sus propiedades
console.log(Sergio.contacto.telefono);//lo mismo aqui
Sergio.saludar();// _se accede al objeto y ejecutamos directamente la funcion
Sergio.digaMiNombre();

// !Nota: Dentro de un objeto a las variables se le llaman atributos o propiedades y a las funciones se les llama metodos

// _***Metodos de objetos utiles

console.log(Object.keys(Sergio));// _este metodo nos lista por posicion cada propiedad ordenandola o iterandola 
console.log(Object.values(Sergio));//_este metodo nos lista por posicion cada valor de todas las propiedades o llaves del objeto ordenandola o iterandola 
console.log(Sergio.hasOwnProperty("nombre"));//_este metodo nos dice en valor booleano si hay una propiedad dentro de un objeto en especifico en este caso en consola me mando true
console.log(Sergio.hasOwnProperty("nacimiento"));//_me tira false


// ***TIPOS DE OPERADORES

// !Operadores ARITMETICOS +, -, *, /, **, ++, %, -- (LO QUE HAY EN PARENTESIS SE EJECUTA PRIMERO)
// _Bajo esta sintaxis se maneja los aritmetico ya sea para restar multiplicar y etc..

// let z = x + y;

// !Operadores Relacionales 

//? ==	Igual a
//? ===	igual valor e igual tipo
//? !=	diferente de 
//? !==	el super diferente de 
//? >	mayor que
//? <	menor que
//? >=	mayor o igual que
//? <=	menor o igual que
//? ?   operador ternario

console.log(8<9);//menor que 
console.log(9>8);//mayor que
console.log("5" == 5);//nos lanza true porque el valor es el mismo
console.log("5" === 5);//nos lanza false porque el tipo de dato no es lo mismo este operador es mas estricto
// !OJO HAY QUE UTILIZAR TRIPLE ===, SE CONSIDERA MALA PRACTICA UTILIZAR LOS 2 == 

// **Operadores de incremento y decremento

let i = 1;
//i = i + 2; otra manera de hacerlo es el ejemplo de abajo
//i += 2;//_ y esto lo podemos hacer con varios operadores + - * / etc
console.log(i);

//**Operador Unario es esencial para los ciclos y es subcontenido de los operadores de incremento y decremento  
// !esto solo sirve para incrementar o decrementar valores por unidad ojo

//i = i + 1;
//i++; incremento 
//i--; decremento
console.log(i)

// **Operadores Logicos
// 3 tipos
    //_ ! Not = Negacion
    //_ || OR = o
    //_ && And = Y
    console.log("operadores logicos")

// ?AND - && con este operador tiene que haber las relaciones verdadera ninguna falsa o sino el argumento sera falso 
console.log(true && true);
console.log(true && false);
//? Not - ! Este operador bota la inversa del valor booleano con el que se enfrente o opere
console.log(!false);// da true
//? OR - || este operador necesita que una condicion sea verdadera para ser verdadera si las 2  son falsas es falso 
console.log(true || false);

// Ejercicios para los operadores logicos 

 let operadorLogico = (50 >= 38 || 25 == "25") && (50 === "50") || (!(80 !== 20));
// let operadorLogico = false;
console.log(operadorLogico);























