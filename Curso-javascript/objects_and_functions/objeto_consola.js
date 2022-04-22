// ****************OBJETO CONSOLE EN JAVASCRIPT 

console.log(console);
console.error("Esto es un error");
console.warn("Esto es una aviso");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicación");

let nombre = "Sergio";
let apellido = "Pinzón";
let edad = 18;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre,apellido,edad);

console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años`);//_funciona la interpolacion
console.log(`Hola soy %s %s y tengo %d años`, nombre, apellido, edad);//_esto es otra variante :)
console.clear();//es para borrar todo lo que hay consola 

console.log(window);
console.log(document);

//_para poder desentripar un objeto en la consola y ver todos sus metodos y atributos lo mejor seria el console.dir();
console.dir(window);
console.dir(document);

console.group("Mis hobbies son");//es un console de acordeon :), es console para agrupar contenido
console.log("Armar cubos rubik");
console.log("ilucionismo");
console.log("jugar futbol");
console.log("Desarrollo web");
console.log("bailar es un ejemplo");
console.groupEnd();//esto indica final del grupo


console.groupCollapsed("Mis hobbies son");//es un console de acordeon :), es console para agrupar contenido
console.log("Armar cubos rubik");
console.log("ilucionismo");
console.log("jugar futbol");
console.log("Desarrollo web");
console.log("bailar es un ejemplo");
console.groupEnd();//esto indica final del grupo

console.log(console);//esto es un objeto
const person ={
    nombre: "sergio",
    apellido: "Pinzón",
    apodo: "sergiopin"
};
console.table(["Audi", "Volvo", "Ford"]);//podemos imprimir en forma de tabla cualquier tipo de dato
console.table(person)//podemos imprimir en forma de tabla cualquier tipo de dato
console.table(console);
console.clear();

console.time(`Cuanto tarda el bloque de codigo`);
const arreglo = Array(1000000);

for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = i;
}

console.timeEnd(`Cuanto tarda el bloque de codigo`);
//_Con esto podemos saber cuanto tarda un bloque de codigo que suele ser util :)

console.clear();

//HAY VECES DONDE TE INTERESA SABER CUANTAS VECES SE HA EJECUTADO CIERTO FRAGMENTO DE CODIGO

for(let i = 0; i <= 100; i++){
    console.count("codigo for");
    console.log(i);
}

// ?STE CONSOLE.COUNT NOS AYUDA A SABER CUANTAS PETICIONES A UN SERVIDOR SE ESTAN HACIENDO O CUANTAS VECES UN USUARIO PRECIONO TAL EVENTO UNA CANTIDAD DE VECES ETC.. ESTE CONSOLE PUEDE SER MUY UTIL

console.clear ();

//_console.assert() ES MUY BUENO PARA TEXTEAR NUESTRO CODIGO VAMOS A PROBARLO, PARA COMENZAR SERIA BUENO YA SI NECESITAS TEXTEAR MAS AVANZADO O MEJOR USA LIBRERIAS PARA TEXTEAR 

let x = 1;
let y = 2;
let pruebaYX = "se esperaba que X siempre sea menor que Y";

console.assert(x < y,{x,y,pruebaYX});

console.clear();

let a = 3;
let b = 2;
let pruebaAB = "se esperaba que A siempre sea menor que B";

console.assert( a < b,{a,b,pruebaAB});

console.clear();