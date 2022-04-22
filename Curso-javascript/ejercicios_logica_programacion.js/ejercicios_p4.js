// **12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.


const esPrimo = (numAEvaluar = undefined)=>{

    if(numAEvaluar === undefined)return console.warn("no ha ingresado el numero a evaluar");
    if(typeof numAEvaluar !== "number") return console.warn("el caracter que has ingresado no es un numero");
    if(numAEvaluar === 0)return console.warn("El numero no puede ser 0")
    if(numAEvaluar === 1)return console.warn("El numero no puede ser 1")
    if(Math.sign(numAEvaluar) === -1)return console.warn("no  se aceptan numeros negativos")
    // validaciones

    if(numAEvaluar !== undefined){
        let numDivisores = 0;

        for(let i = 1; i <= numAEvaluar; i++){
            
            if(numAEvaluar % i === 0){
                numDivisores++;
                break;
            }
            
        }

        if(numDivisores === 2){
            console.log(`True`)
        }
        else{
            console.log(`False`)
        }

    }

}

// 4554100 fijo ~ maria

// 4 => 1,2,4 no es primo
// 5 => 1,5 es primo
//

 //esPrimo(5);//true
 //esPrimo(54);//false
 //esPrimo();
 //esPrimo(200)








// **13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.


const hallarParEImpar = (num = undefined) =>{
    if(num === undefined) return console.warn(`Nos ha ingresado el numero a evaluar`);
    if(typeof num !== "number" ) return console.error(`Tienes que ingresar un numero`);
    // if(Math.sign(num) === -1) return console.error(`Nos puedes ingresar numeros negativos`)

    if(num % 2 === 0){
        console.info(`PAR`)
    }
    else{
        console.info(`IMPAR`)
    }
}

//hallarParEImpar(404);
//hallarParEImpar(-44);
//hallarParEImpar();

// **14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirGrados = (numAConvertir = undefined, gradosNum = "") =>{

    if(numAConvertir === undefined && gradosNum === "")return console.warn("Nos has ingresado el numero a evaluar y tampoco el tipo de grado")
    
    if(numAConvertir === undefined) return console.warn(`Nos ha ingresado el numero a evaluar`);
    if(typeof numAConvertir !== "number" ) return console.error(`Tienes que ingresar un numero`);
    if(gradosNum === "") return console.warn(`Nos ha ingresado el grado`);
    if(typeof gradosNum !== "string") return console.warn(`Tienes que ingresar un caracter de texto`);

    // validaciones

    // _GRADOS CELSIUS A FAHRENHEIT

    switch (gradosNum) {
        case "C":
             numAConvertir = (Math.floor(numAConvertir * 1,8)) + 32; 
             console.info(`${numAConvertir}°F`)
            break;

        case "F":
            numAConvertir = (Math.floor(numAConvertir - 32)) / 1.8;
            console.info(`${numAConvertir}°C`)
            break;

        default:
            console.warn(`Ese Caracter ingresado no tiene una funcion en el programa, solo esta la C y la F como validos caracteres`);
    }

}

//convertirGrados(0,"C")
//convertirGrados(86,"F")
//convertirGrados()
//convertirGrados(89)
//convertirGrados("f")