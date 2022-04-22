import saludar, {Saludar,PI,usuario,sergio} from "./constante.js";//entre las llaves colocamos lo que queremos exportar
import {aritmetica as calculos} from "./aritmetica.js";//le agregamos un alias al objeto aritmetica gracias a la palabra reservada "as", entonces ya no vamos a utilizar para ejecutar el objeto con el nombre aritmetica sino con calculos

// **MODULOS EN JAVASCRIPT : SON QUE TU PUEDES MANDAR A LLAMAR ARCHIVOS JS NO SOLO DESDE EL ARCHIVO HTML SINO TAMBIEN DESDE UN ARCHIVO JS PUEDES MANDAR A LLAMAR OTRO Y ESO YA ESTA PERFECTAMENTE SOPORTADO EN NUESTROS NAVEGADORES MODERNOS 

{/* <script src="/objects_and_functions/import_export.js" type="module"></script> */}
// !ES MUY IMPORTANTE ASIGNARLE AL SCRIPT EL TIPO MODULE PARA PODER YA SEA IMPORTAR O EXPORTAR OJO AL DATO
console.log("este un archivo modulos js");

// !como llamar desde este archivo otro archivo? : se hace con import en la linea 1 esta el ejemplo

console.log(PI,usuario);

// TAMBIEN PODEMOS EXPORTAR A MANERA DE OBJETO

console.log(sergio)

// console.log(aritmetica.sumar(2,2),aritmetica.restar(3,10)); !!!!asi antes lo haciamos cuando no tenia un alias
 console.log(calculos.sumar(2,2),calculos.restar(3,10));

 saludar();

 let saludo = new Saludar();
 saludo;