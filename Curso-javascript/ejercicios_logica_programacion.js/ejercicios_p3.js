
// **9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function obtenerEntero(min, max) {
   return console.info(Math.floor(Math.random() * (max - min) + min ) );
 }

 //obtenerEntero(501,600);
//  console.log(Math.floor(8.2));//rendondea al numero base asi le falte 0,1 para pasar a otro numero
//  console.log(Math.floor(Math.random() * 10));//retorna valores aleatorios menores e iguales a 10


 
// **10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const trueCapicua = (num = 0) =>{
   if (!num) return console.warn("No ha ingresado el numero a evaluar");

   if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, No es un numero`);

    num = num.toString();//estamos pasando de tipo de dato numero a string para que funcionen los metodos de abajo que son para string 
    let alReves = num.split("").reverse().join("");//pasamos la palabra a arreglo revertimos todo los caracteres y los volvemos a colocar con el metodo join a un string

   return (alReves === num)
   ?console.info(`True`)
   :console.info(`False`)

}

//trueCapicua(2002);//true
//trueCapicua(148);//false

//**11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.    

const calcularFactorial = (numFactorial = undefined) =>{

   if (numFactorial === undefined) return console.warn("No has ingresado el numero")

   if(typeof numFactorial !== "number") return console.error(`el valor ${numFactorial} ingresado no es un numero`)

   if(numFactorial === 0) return console.info(`el factorial de ${numFactorial} es ` + 1)

   if(Math.sign(numFactorial) === -1) return console.error(`el numero no puede ser negativo`)
   // _La función Math.sign() retorna el signo de un número, indicando si el número es positivo, negativo o cero.
   // _si es negativo lanza -1, si es positivo lanza 1 y si es cero lanza 0
   
//*todo lo anterior son validaciones 
   if (numFactorial != ""){
      let numVeces = numFactorial;
      let numAEvaluar = numFactorial;
      for(let i = 1; i  < numVeces; i++){
         numFactorial = numFactorial * i;
      }
      console.log(`el factorial de ${numAEvaluar} es ${numFactorial}`);
   }

}

calcularFactorial(-5);
//calcularFactorial();



// PAREJAS ORDENADAS
// PRODUCTO CARTESIANO DE CONJUNTOS
// REPRESENTACION GRAFICA DE UN PRODUCTO CARTESIANO
// RELACIONES BINARIAS
// DEFINICION DE RELACION