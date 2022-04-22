// _JavaScript Date Object nos permite trabajar con fechas:

console.log(Date());

let fecha = new Date;//creamos un objeto date 

console.log(fecha);//esto nos da el mes la hora y el dia de la semana actual
console.log(fecha.getDate());//estos nos da el dia del mes solamente
console.log(fecha.getDay());//_Dia de la semana D L M Mi J V S -> 0 1 2 3 4 esto es como un array de dias de la semana y la consola nos bota la posicion del dia el Domingo es el cero etc....
// ?ejemplo si hoy es jueves nos bota la posicion 4 o el numero 4
console.log(fecha.getMonth());//_esto nos botaria el mes como tal, de igual forma los meses los tiene guardados en forma de arreglo y nos imprime la posicion del mes
// !meses Ene feb mar abr may jun jul ago sep oct nov dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getYear());//este metodo nos dice el año pero a manera de abreviacion y no es muy usado la verdad suele ser muy confuso 
console.log(fecha.getFullYear());//para ver el año completo sin tanto rodeo tenemos el fullyear() que ya nos bota directamente el actual y completo
console.log(fecha.getHours());//horas
console.log(fecha.getMinutes());//minutos 
console.log(fecha.getSeconds());//segundos
console.log(fecha.getMilliseconds());//milisegundos

// !Una forma de sacar la fecha con horas mas entendible
console.log(fecha.toString());//?con esto nos aparece la fecha acompaña con el texto
console.log(fecha.toDateString());//_con esto solo estamos pidiendo la fecha es mas util
console.log(fecha.toLocaleString());//_esta forma tambien muchisimo mejor para el usario final es mucho comoda de ver 
console.log(fecha.toLocaleDateString());//con este metodo podemos obtener solo la fecha y no la hora
console.log(fecha.toLocaleTimeString());//con este metodo podemos obtener solo la hora y no la fecha

//*** */ HORA Y FECHA UTC QUE ES ?
// ES EL TIEMPO UNIVERSAL CORDINADO EN EL QUE ES LA HORA CERO, Y ES EN EL MERIDIANO DE GREINWICH ESPECIFICAMENTE CERCA A LONDRES

// con los metodos de abajo estamos sacando los datos de la hora cero 

console.log(fecha.getUTCDate());//esto nos dice el dia de londres
console.log(fecha.getUTCHours());//esto nos dice la hora de londres

// *TIMESTAMP - MARCA DE TIEMPO 

// _Es una marca temporal, conocida también como registro de tiempo, cronomarcador, ​ sello de tiempo o timestamp, es una secuencia de caracteres que denotan la hora y fecha en la/s que ocurrió determinado evento.

console.log(Date.now());//esto nos vota un registro de segundos que han pasado desde el 1 de enero de 1970 - es lo que se conoce como la dichosa timestamp

let cumploYo = new Date(2003,6,22);//colocamos la fecha de nacimiento en este formato,acuerdese que el mes lo tenes que colocar en base a la posicion de los meses en mi caso julio es la posicion 6 de todos los meses
console.log(cumploYo); //naci un miercoles 


// **EL TIMESTAMP ES MUY UTILIZADO CUANDO VAS A GUARDAR ALGUN REGISTRO EN ALGUNA BASE DE DATOS Y YA TIENEN PREPARADO ESTOS GESTORES DE BASES DATOS PARA RECIBIR ESTOS FORMATOS 

// _DE HECHO SI TU TUVIERAS QUE HACER UN PROGRAMA QUE SEPA CUANTOS AÑOS TIENES CON EL TIMESTAMP : PUES LO QUE NECESITAS ES SACAR EL TIMESTAMP ACTUAL Y RESTARLO CON EL TIMESTAMP DE TU DIA DE NACIMIENTO Y LUEGO RESTAR ESO Y CONVERTIRLO A NUMEROS


// LIBRERIA MUY POTENTE PARA LOS TIEMPOS EN JAVASCRIPT

// *MOMENT.JS SI NECESITAS MANEJAR UNA APP DE SOLO TIEMPO ESTA LIBRERIA ES MUY UTIL ACERCA DE ELLA



// Definimos la fecha de nacimiento
let cumpleJon = new Date(1984, 4, 23);

// Obtenemos la fecha actual
let fechaActual = new Date();

// Obtenemos el total de milisegundos en un día
let msTotales = 1000 * 60 * 60 * 24;

// Obtenemos la diferencia entre ambas fechas
let diff = fechaActual - cumpleJon;

// Realizamos la operación matemática para obtener el resultado en días
let diasTranscurridos = diff / msTotales;

// Imprimir en consola
console.log(diasTranscurridos);