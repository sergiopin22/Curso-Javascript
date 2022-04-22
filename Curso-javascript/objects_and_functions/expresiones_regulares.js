// ?LAS EXPRESIONES REGULARES SON MUY UTILIZADAS 
// !SON : NO ES MAS QUE UNA SECUENCIA DE CARACTERES QUE FORMAN UN PATRON DE BUSQUEDAS Y QUE PRINCIPALMENTE ES UTILIZADO EN LA BUSQUEDA DE CADENAS DE TEXTO PARA VALIDAR QUE UNA INFORMACION O DATO DE ENTRADA CUMPLE CON LOS PARAMETROS Y NOS NOS PUEDAN TILDAR O DAÑAR NUESTRO PROGRAMA HACIENDO INVALIDOS ALGUNOS CARACTERES Y OTROS VALIDOS, PARA VALIDAR EN EL INPUT CORREOS PARA VALIDAR QUE ID DE UNA TARGETA DE CREDITO TIENE 16 DIGITOS ETC..

// EXPRESIONES REGULARES
// \t — Representa un tabulador.
// \r — Representa el "retorno de carro" o "regreso al inicio" o sea el lugar en que la línea vuelve a iniciar.
// \n — Representa la "nueva línea" el carácter por medio del cual una línea da inicio. Es necesario recordar que en Windows es necesaria una combinación de \r\n para comenzar una nueva línea, mientras que en Unix solamente se usa \n y en Mac_OS clásico se usa solamente \r.
// \a — Representa una "campana" o "beep" que se produce al imprimir este carácter.
// \e — Representa la tecla "Esc" o "Escape"
// \f — Representa un salto de página
// \v — Representa un tabulador vertical
// \x — Se utiliza para representar caracteres ASCII o ANSI si conoce su código. De esta forma, si se busca el símbolo de derechos de autor y la fuente en la que se busca utiliza el conjunto de caracteres latín-1 es posible encontrarlo utilizando \xA9".
// \u — Se utiliza para representar caracteres Unicode si se conoce su código. "\u00A2" representa el símbolo de centavos. No todos los motores de Expresiones Regulares soportan Unicode. El .Net Framework lo hace, pero el EditPad Pro no, por ejemplo.
// \d — Representa un dígito del 0 al 9.
// \w — Representa cualquier carácter alfanumérico.
// \s — Representa un espacio en blanco.
// \D — Representa cualquier carácter que no sea un dígito del 0 al 9.
// \W — Representa cualquier carácter no alfanumérico.
// \S — Representa cualquier carácter que no sea un espacio en blanco.
// \A — Representa el inicio de la cadena. No un carácter sino una posición.
// \Z — Representa el final de la cadena. No un carácter sino una posición.
// \b — Marca la posición de una palabra limitada por espacios en blanco, puntuación o el inicio/final de una cadena.
// \B — Marca la posición entre dos caracteres alfanuméricos o dos no-alfanuméricos.

// !COMO SE DECLARA O COMO SE DEFINE UNA EXPRESION REGULAR EN JS

// FUNCION CONSTRUCTORA

let cadena = `Lorem ipsum dolor sit amet consectetur adipiscing, elit orci dis molestie cras ac vehicula, semper porttitor platea aliquet nostra. Himenaeos pretium quisque tristique nunc natoque potenti nullam, in cubilia eleifend dignissim torquent eu ullamcorper mattis, aptent ut facilisis nisi netus sociis. Pretium netus vel urna accumsan cursus dictum vivamus curabitur, lorem vitae mattis eget sem cubilia placerat vulputate, tellus leo euismod blandit lorem parturient interdum. 65 `


let expReg = new RegExp("lorem", "ig")//recibe 2 parametros, el patron a buscar | y las banderas o comodines que te van a permitir tener mas funcionalidades 

let expReg2 = /[0-9]/ig;

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

// console.clear();

//console.log(expReg2.test(cadena));//test te manda un true o false si se cumple el patron dentro de la cadena que se evalua 
//console.log(expReg2.exec(cadena));//exec te devuelve un arreglo con un objeto y informacion para saber si se a encontrado ese patron con mas informacion de las coincidencias

// la bandera i ignora de minusculas de mayusculas 
// la bandera g significa que no se va a quedar con la primer coincidencia sino que va a buscar todas

