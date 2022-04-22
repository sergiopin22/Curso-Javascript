// !PROBLEMAS PARTE 2, LA SOLUCION ESTARA EN EL VIDEO DE LOGICA 3 CON LOS NUEVOS EJERCICIOS     

//**1 PROGRAMA UNA FUNCION QUE INVIERTA LAS PALABRAS DE UNA CADENA DE TEXTO, PE. MIFUNCION("HOLA  MUNDO") DEVOLVERA ODNUM ALOH





// programa 1

// let frase = prompt("ingresa la palabra a invertir");
// let arr = frase.split(` `);
// console.log(arr)

// const separador_texto = () =>{
    //     let str = "Hola Mundo";
    //     let arr = str.split(``);
    //     let reverse = arr.reverse();
    //     let join = reverse.join("");
    //     return console.log(join);
    // }
    
    const reversePalabra = (cadena = "" )=>{
    
        if(!cadena)console.warn("no ingresaste la cadena de texto");
        if(cadena != ""){
            cadena = cadena.split(``);//_con este metodo pasamos de cadena a array
            cadena = cadena.reverse();//_con este metodo invertimos todos los elementos del array
            cadena = cadena.join("");//_con este metodo pasamos el array a cadena de texto
            return console.info(`Su palabra invertida queda asi: ${cadena}`)
        }
    }
    
    //reversePalabra("hola mundo");
    //reversePalabra("Javascript es un lenguaje de programacion increible");
    // reversePalabra();

    //  console.clear();

    // ?COMPLETADO






//**2 PROGRAMA UNA FUNCION PARA CONTAR EL NUMERO DE VECES QUE SE REPITE UNA PALABRA EN UN TEXTO LARGO,PE.
// **MIFUNCION("HOLA MUNDO ADIOS MUNDO" "MUNDO") Y NOS DEVOLVERA  2


const textoEnCadena = (cadena = "", texto = "")=>{
    if(!cadena)return console.warn("no ingresaste la cadena de texto");
    if(!texto)return console.warn("no ingresaste el texto a evaluar");

    let i = 0;
    let contador = 0;

    while(i !== -1){
        i = cadena.indexOf(texto,i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.info(`la palabra ${texto} se repite ${contador} veces`);
}

//textoEnCadena("HOLA MUNDO ADIOS MUNDO", "MUNDO");
//textoEnCadena();



 

//**3  PROGRAMA UNA FUNCION QUE VALIDE SI UNA PALABRA O FRASE DADA, ES UN PALINDROMO (QUE SE LEE IGUAL EN UN SENTIDO QUE EN OTRO), PE. MIFUNCION("oso") DEVOLVERA TRUE


//_const cadena = "Salas";
//_let expReg = /[A-Z]/gi;
//_let hallado = cadena.match(expReg);
//_hallado = hallado.reverse();
//_hallado = hallado.join("");//esto lo convertimos a una cadena para que el siguiente metodo pueda pasarlo a minusculas
//_hallado = hallado.toLocaleLowerCase();
//_hallado = hallado.includes(hallado);//salas no distingue de mayus y minus 
//_console.log(hallado);//nos tira true si es palindromo


// const hallarPalindromo = (cadena = "") => {
//     let expReg = /[A-Z]/gi;
//     let hallado = cadena.match(expReg);
//     hallado = hallado.reverse();
//     hallado = hallado.join("");
//     hallado = hallado.toLocaleLowerCase();
//     hallado = hallado.includes(hallado);
//     return console.log(hallado);
// }

// hallarPalindromo("Hola");

// _function palindromoChecker (str = ""){
//     const strReverse = str.split("").reverse().join("").toLocaleLowerCase(); //salas
//     return strReverse === str.toLocaleLowerCase() ? "es palindromo" :"no es palindromo";
// }

// console.log(palindromoChecker("Salas"));//es palindromo
// console.log(palindromoChecker("Oso"));
//console.log(palindromoChecker("oso"));//es palindromo
//console.log(palindromoChecker("hola"));//no es palindromo

// const hallarPalindromo = (str = "") => {

//     if(!str){
//         console.warn("no ingresaste una cadena de texto");
//     }else{
//         const newStr = str.replace(/[\W_]/g, "").toLowerCase();
//         const strReverse = newStr.split("").reverse().join("").toLocaleLowerCase(); //salas
//          return newStr === strReverse ? "es palindromo" :"no es palindromo";
//     }
// }

// console.log(hallarPalindromo("Salas")) //si es palindromo
// console.log(hallarPalindromo("Ali tomo tila")) //si es palindromo
// console.log(hallarPalindromo("amad a la dama")) //si es palindromo
// console.log(hallarPalindromo("otra cosa")) //no es palindromo
// console.log(hallarPalindromo("OSo")) //si es palindromo

// ?COMPLETADO




const palindromo = (palabra = "") =>{
    if(!palabra)return console.warn("No ingresaste una palabra o frase dada");

    palabra = palabra.toLowerCase();//El método toLowerCase()devuelve el valor en minúsculas de la cadena que realiza la llamada
    let alReves = palabra.split("").reverse().join("");//pasamos la palabra a arreglo revertimos todo los caracteres y los volvemos a colocar con el metodo join a un string

    return (palabra === alReves)
    ?console.info(`si es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`)
    :console.info(`no es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`)
}

//palindromo();
//palindromo("Salas");
//palindromo("SaLaS");
//palindromo("OSo");
//palindromo("hola mundo");


// **4PROGRAMA UNA FUNCION QUE ELIMINE CIERTO PATRON DE CARACTERES DE UN TEXTO DADO PE. MIFUNCION("XYZ1,XYZ2,XYZ3,XYZ4,XYZ5,XYZ") DEVOLVERA  "1,2,3,4,5"

// El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas porremplazo . El patrónpuede ser una cadena o una RegExp, y el reemplazopuede ser una cadena o una función que será llamada para cada coincidencia. Si el patrónes una cadena, sólo la primera coincidencia será reemplazada.

    const eliminarCaracteres = (texto = "", patron = "")=> 
    (!texto)
    ?console.warn("No ingresaste el texto")
    :(!patron)
    ?console.warn("No ingresaste un patron de caracteres")
    :console.info(texto.replace(new RegExp (patron, "ig"),""))//i distingue de minisculas y mayusculas, y la g no se detiene con la primer conscidencia sino va a ejecutar todas la considencias que encuentren

    eliminarCaracteres();
    eliminarCaracteres("XYZ1,XYZ2,XYZ3,XYZ4,XYZ5", "xyz");



