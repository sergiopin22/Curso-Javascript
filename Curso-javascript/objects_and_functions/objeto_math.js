//** */ El objeto JavaScript Math le permite realizar tareas matemáticas en números.

console.log(Math);
console.log(Math.PI)//nos imprime el valor de pi 
console.log(Math.abs(-7.8))//nos devuelve el valor absoluto de una cantidad este metodo abs no distingue si es negativo o positivo imprime la cantidad como tal
// _METODOS PARA REDONDEAR VALORES
console.log(Math.ceil(7.8));//lo redondea al numero posterior que es 8
console.log(Math.floor(7.8));//lo redondea al numero base como tal asi este cerca al 8 por 0,2 nos imprime 7
console.log(Math.round(7.8));//este metodo redondea dependiendo de la cantidad si falta poco pasa al posterior que es 8
console.log(Math.round(7.2));//o si esta cantidad no es alta no pasa al posterior e imprime el entero inmedianto que en este caso es 7

console.log(Math.sqrt(81));//para sacar raiz cuadrada resultado 9
console.log(Math.pow(2,5));//para pontecias el primer parametro es la base y el otro es el exponente resultado 32
console.log(Math.sign(-7.8))//este metodo nos sirve para saber si un numero es negativo o positivo o es cero, las tres posibilidades que nos bota son: -1 0 1, el resultado nos indica que es negativo porque nos esta botando -1 en consola

// **MUY IMPORTANTE EL METODO RANDOM
// _ESTE METODO NOS VA A DAR UN VALOR ALEATORIO COMPRENDIDO ENTRE 0 Y 1

console.log(Math.random());
console.log(Math.random() * 1000 - 1000);//con esto estamos generando un numero random entre 1000 numeros
console.log(Math.round(Math.random() * 1000));//con esto estamos quitando la parte decimal y colocando la cantidad a entero para una mejor visualizacion del numero random

