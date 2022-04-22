
// *Que es un array
// Una matriz es una variable especial que puede contener más de un valor mas el plus de que tambien estos tipos  de datos que puedan contener pueden ser diferente como: string number etc..
// _Porque utilizar los array ?
// ?Si tiene una lista de elementos (una lista de nombres de automóviles, por ejemplo), almacenar los automóviles en variables individuales podría verse muy largo hacia abajo y tedioso
// !Sin embargo, ¿qué pasa si desea recorrer los autos y encontrar uno específico? ¿Y si no tuvieras 3 coches, sino 300?
// ?Una matriz puede contener muchos valores con un solo nombre y puede acceder a los valores haciendo referencia a un número de índice.
 
// *Creamos un array

  const arrays = ["elemento1", "elemento2, 50, true"];

  let frutas = ["banana", "manzana", "pera", "uvas"];

//  document.write(frutas[0]);

//  *Array Asociativos

let pc2 = ["SergioPC", "5500g ryzen", "16GB", "1TB" ]; //array simple por posicion

let pc1 = {// array por asociacion
    nombre: "SergioPC",
    procesador: "5500g ryzen",
    ram: "16GB",
    espacio: "1TB"
};


let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

let frase = `el nombre de mi pc es <b>${nombre}</b>,<br>
mi procesador <b>es ${procesador}</b>,<br>
mi ram es <b>${ram},</b><br>
mi espacio del pc es <b>${espacio}</b>.`;

// document.write(frase);

// *bucles o ciclos
// *WHILE
let numero = 0;
// _el while hasta que una condicion sea falsa frena, si es verdadera seguira infinitamente hasta que cambie a false 
// ?Dato del while, el pregunta primero la condicion y luego ejecuta
// while (numero < 10){
    //     numero++;
    //     document.write(numero)
    // }

    // *Do While
    // _el Do While hasta que una condicion sea falsa frena, si es verdadera seguira   infinitamente hasta que cambie a false 
    // ?Dato del Do While, el ejecuta primero y luego pregunta la condicion para seguir continuando
//  do{

//      document.write(numero + "<br>")
//      numero++;

//  }
//  while (numero <= 10)

// *Sentecia break para el while
// ?esta sentecia nos sive para terminar un bucle, es muy util para cuando necesitamos hacer busqueda y una vez haya encontrado lo que buscamos no se siga ejecuntando y perdamos recursos es muy util hoy en dia

// while (numero < 10){
//     numero++;
//     document.write(numero);
//     if(numero == 4){//!si numero es 4 con el break quiero que pare la impresion y addicion en 1 de la variable numero
//         document.write("fin");
//         break;
//     }
// }

// _Practica : recordando nuevamente sobre los arrays asociativos
// let hobbies1 = ["cubo de rubik", "magia", "rapear", "jugar", "ver series"]
 // document.write(hobbies[0]);

// let hobbies2 = { //array asociativo
//     hobbie_1 :"cubo de rubik",
//     hobbie_2 :"magia",
//     hobbie_3 :"rapear",
//     hobbie_4 :"jugar",
//     hobbie_5 :"ver series"
// };

// let hobbie_1 = hobbies2["hobbie_1"];
// let hobbie_2 = hobbies2["hobbie_2"];
// let hobbie_3 = hobbies2["hobbie_3"];
// let hobbie_4 = hobbies2["hobbie_4"];
// let hobbie_5 = hobbies2["hobbie_5"];

// let frase1 = `soy muy bueno con el <b>${hobbie_1}</b>,<br>
// tambien se algunos trucos de <b>${hobbie_2}</b>,<br>
// me gusta <b>${hobbie_3}</b>,<br>
// suelo <b>${hobbie_4}</b> y <b>${hobbie_5}</b>`;

// document.write(frase1);

// *Ciclo For
// ?este ciclo es determinado podemos decirle cuantas iteraciones o vueltas hacer
//?tiene 3 fases el for
// !declaracion e inicializacion de la variable i
//!Luego viene la condicion
//! decidimo si va a ir en aumento o decremento

// for(let i = 6; i > 0; i--){
//     document.write(i);
//     document.write(" estamos decrementando 1, ")
// }

// *Sentecia Continue
// !es para saltar la iteracion  o vuelta y pasar a la siguiente
// ?ejemplo

 for (let i = 0; i < 10; i++) {
   if(i == 4){
     continue;//?estamos saltandonos la iteracion 4
   }
     document.write(i);
 }

//* for in

