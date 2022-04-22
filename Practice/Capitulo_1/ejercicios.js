// _problema : pedir 2 numeros positivos al usuario final e indicar cual de eso valores es el mayor y menor  
// alert("Usuario ingresa 2 numeros y te indicaremos cual es el mayor")
// let num1 = prompt("ingresa el primer numero");
// let num2 = prompt("ingresa el segundo numero");


// if (num1 > num2){
//     alert(`El NUMERO MAYOR ES ${num1}`);
//     alert(`El NUMERO MENOR ES ${num2}`);
// }

// else if(num1 < num2){
//     alert(`El NUMERO MAYOR ES ${num1}`);
//     alert(`El NUMERO MENOR ES ${num2}`);
// }


// _problema : Realizar programa que pueda ingresar datos de edades por parte del usuario.
//  ?NO PERMITIR EDADES MENORES QUE 1 AÑO NI MAYORES QUE 120 AÑOS 
// ?EL PROGRAMA INDICA "SI TIENE PERMISO DE ACCESO" SI LA EDAD ES MAYOR O IGUAL A LOS 18 AÑOS

// alert("Programa que verifica si tienes acceso al portal")
// let edadPersona = prompt("introduzca su edad ");

// if (edadPersona >= 18 & edadPersona <= 120){
//     document.write("Si tiene permiso de acceso");
// }

// else{
//     document.write("no tienes permiso");
// }

// _problema 3 
// ?Determinar si un alumno aprueba a reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 70; reprueba en caso contrario.
// let nota1 = Number(prompt("Ingresa el primer numero"));
// let nota2 = Number(prompt("ingresa el segundo numero"));
// let nota3 = Number(prompt("ingresa el tercer numero"));

//*la funcion number nos ayuda a transformar el string a number para que se pueda operar

// let formula =  ((nota1 + nota2 + nota3)/3);


// if (formula >= 70){
//     document.write("has pasado la asignatura :=)")
// }

// else{
//     document.write("has reprobado la asignatura :(")
// }


// ?Calcular la edad de una persona teniendo en cuenta su fecha de
// ?nacimiento y retorne un mensaje si es o no mayor de edad. También
// ?se debe verificar si ese año fue bisiesto.

alert("este programa te dira cuantos años tienes y si eres mayor de edad o no, no solo con esto te dira si el año que naciste fue biciesto")
let nombreUsuario = prompt("Cual es tu nombre");
let fechaNacimiento = Number(prompt("Cual es tu fecha de nacimiento"));

let añoBisiesto;


    function calcularEdad (){

    saludo = alert(`Que tal ${nombreUsuario}, te dire tu edad V:`)

    let edad = 2022 - fechaNacimiento;

    document.write(`Tu edad es ${edad} <br>`);
    }

     //?Condicion de mayor o menor de edad

    function calcularEdadMayor (edad){
    
   if(edad < 18){
    document.write("Eres menorcito xD");
    }

    else if (edad >= 18){
       document.write("Eres mayor xD");
   }
}
    

    // ?Condicion de año biciesto 

    function calcularBisiesto (añoBisiesto = fechaNacimiento){

        if(fechaNacimiento % 4 == 0){
            alert("es año bisiesto")
        }

        else if (fechaNacimiento % 4 != 0){
            alert("no es año bisiesto");
        }

    }
    calcularEdad();
    calcularEdadMayor();
    calcularBisiesto();








