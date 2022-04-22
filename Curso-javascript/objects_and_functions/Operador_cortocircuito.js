// **OPERADOR CORTOCIRCUITO EN JAVASCRIPT
// _Verá el "operador de cortocircuito" con && frecuencia en el código JavaScript, especialmente en React JSX. Con &&, un valor falso “cortocircuitará” una línea de código dada, haciendo que la ejecución se detenga.

// !Cortocircuito OR - cuando el valor de la izquierda en la expresion siempre pueda validar a true, es el valor que se cargara por defecto.

// !Cortocircuito AND - cuando el valor de la izquierda en la expresion siempre pueda validar a false, es el valor que se cargara por defecto.

function saludar (nombre){
    nombre = nombre || "desconocido";
    console.log(`Hola ${nombre}`);
}

saludar("sergio");
saludar();

// **Cortocircuito OR

console.log("cadena"||"Valor de la derecha");
console.log(5 || "Valor de la derecha");
console.log(5 > 2 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");

console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log( -2 || "Valor de la derecha");//no porque sea un numero negativo es falso
console.log( 0 || "Valor de la derecha");

// **Cortocircuito AND

console.log(false && true);
console.log(false && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");
console.log("" && "Valor de la derecha");

console.log("cadena"&&"Valor de la derecha");
console.log(5 && "Valor de la derecha");
console.log(5 > 2 && "Valor de la derecha");
console.log(true && "Valor de la derecha");
console.log([] && "Valor de la derecha");
console.log({} && "Valor de la derecha");
console.log([] && "Valor de la derecha");
console.log({} && "Valor de la derecha");

//! ESTO PARA REACT REIMPORTANTE MANEJARLO OK, ES PARA EL APARTADO DE COMPONENTES TOCA TENERLO MUY ENCUENTA PARA MAS ADELANTE LO DEL OPERADOR CORTOCIRCUITO
