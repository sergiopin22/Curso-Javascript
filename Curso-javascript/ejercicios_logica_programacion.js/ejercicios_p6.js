//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.


const clasificarCaracteres = (texto = undefined) =>{

    if(texto === undefined) return console.warn(`Nos ha ingresado el texto a evaluar`);
    if(typeof texto !== "string" ) return console.error(`Tienes que ingresar texto no otro tipo de datos`);
    // Validaciones

    if(texto !== undefined){

        let vocalesRegex = /[aeiou]/ig;
        let consonantesRegex = /[^aeiou\s]/ig;
        let contarVocales = texto.match(vocalesRegex).length;
        let contarConsonantes = texto.match(consonantesRegex).length;

        console.log(contarVocales);
        console.log(contarConsonantes);
        //  console.log(texto.match(vocalesRegex));
        //  console.log(texto.match(consonantesRegex));
    }

}



//clasificarCaracteres("Hola Mundo");
//clasificarCaracteres("Holaa Mundddo");




//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.


const nombreValidar = (cadena = undefined) =>{   
    
    if(cadena === undefined) return console.warn(`Nos ha ingresado el nombre a evaluar`);
    if(typeof cadena !== "string" ) return console.error(`Tienes que ingresar texto no otro tipo de datos`);
    // Validaciones
    
    if(typeof cadena === "string"){// si esto es valido ejecute el script de desarrollo del problema
        // let nameRegex = /[a-zA-Z]/gi;
        let nameRegex = /^[a-zA-Z]+\s[a-zA-Z]+[\s\S]/g;
        console.log(nameRegex.test(cadena));
    }
    

}

//nombreValidar("Jonathan MirCha");//true
//nombreValidar("Sergio Alejandro");//true
//nombreValidar("Sergiopin2220@gmail.com");//false
//nombreValidar("3112459351");//false
//nombreValidar("Helena pilar");//true


//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.



// _emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/gi;

const correoValidar = (correo = undefined) =>{   
    
    if(correo === undefined) return console.warn(`Nos ha ingresado el correo a evaluar`);
    if(typeof correo !== "string" ) return console.error(`Tienes que ingresar texto no otro tipo de datos`);
    // Validaciones
    
    if(typeof correo === "string"){// si esto es valido ejecute el script de desarrollo del problema
        let nameRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/g;
        console.log(nameRegex.test(correo));
    }
    

}

//correoValidar("jonmircha@gmail.com");
//correoValidar("sergiopin2220@gmail.com");
//correoValidar("mirtapila26@hotmail.com");
//correoValidar("3112459351");
//correoValidar("Helena pilar");