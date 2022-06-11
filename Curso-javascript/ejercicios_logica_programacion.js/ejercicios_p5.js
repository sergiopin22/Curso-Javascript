// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste el número a convertir");
    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);
    if (base === undefined) return console.warn("No ingresaste la base a convertir");
    if (typeof base !== "number") return console.error(`El valor "${base}" ingresado, NO es un número○`);
    if (base === 2){
     return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
    } else if (base === 10) {
     return console.info(`${numero} base ${base} = ${(numero.toString(base))} base 2`);
    }else{
        console.error(`El tipo de base a convertir NO es valido`)
    }

}

//convertirBinarioDecimal(100,2);
//convertirBinarioDecimal(4,10);
//convertirBinarioDecimal("2");
//convertirBinarioDecimal();







// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const sacarDescuento = (cantidad = undefined, descuento = 0) =>{

    if( cantidad === undefined && descuento === undefined) return console.warn("Nos has ingresado la cantidad y tampoco el descuento a quitar al monto")
    
    if(cantidad === undefined) return console.warn(`Nos ha ingresado la cantidad a evaluar`);
    if(typeof cantidad !== "number" ) return console.error(`Tienes que ingresar numeros no otro tipo de datos`);
    if(descuento === undefined) return console.warn(`Nos ha ingresado el descuento a aplicar al monto`);
    if(typeof descuento !== "number") return console.warn(`Tienes que ingresar numeros no otro tipo de datos`);

    // Validaciones

    if(cantidad !== undefined && descuento !== undefined){

        let resultado = (descuento * cantidad) / 100;
        resultado = cantidad - resultado;
        console.info(`$${cantidad} dolares aplicandole el ${descuento}% de descuento te queda en $${resultado} dolares`);

    }
    

}

sacarDescuento(1000,20);
//sacarDescuento(1000, 40);
//sacarDescuento(1000);
//sacarDescuento("ajkshkjsd",20);
//sacarDescuento();




// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const contadorAños = (fecha = undefined) =>{
    
    if(fecha === undefined) return console.warn(`Nos ha ingresado la fecha a evaluar`);
    if(typeof fecha !== "number" ) return console.error(`Tienes que ingresar numeros no otro tipo de datos`);
    // Validaciones
    
    if(fecha !== undefined){
        let fechaActual = new Date;
        fechaActual = fechaActual.getFullYear();
        añosTranscurridos = fecha - fechaActual;
        console.log(añosTranscurridos)
        
    }
    
}

//contadorAños(2003);

const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("No ingresaste la fecha");
        if (!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida");

    let hoy        = new Date,
        fechaHoy   = hoy.getFullYear(),
        fechaAntes = fecha.getFullYear(),
        restaAnios = fechaHoy - fechaAntes;

     
    return (Math.sign(restaAnios) === -1)
        ? console.info(`Faltan ${Math.abs(restaAnios)} años para el ${fechaHoy}.`)
        : (Math.sign(restaAnios) === 1)
            ? console.info(`Han pasado ${restaAnios} años, desde ${fechaAntes}.`)
            : console.info(`Estamos en el año actual ${fechaHoy}.`)
}

// calcularAnios();
// calcularAnios({});
//calcularAnios(false);
//calcularAnios(new Date);
//calcularAnios(new Date(2003, 6, 22));
//calcularAnios(new Date(1884, 4, 23));
//calcularAnios(new Date(2084, 4, 23));



