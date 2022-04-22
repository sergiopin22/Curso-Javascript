// **FUNCIONES ANONIMAS AUTOEJECUTABLES
// ?ES UNA FUNCION EN DONDE ENGLOBAS TODO EL CODIGO QUE QUIERES EJECUTAR
//_ES UNA FUNCION QUE NO TIENE NOMBRE DE AHI PROVIENE EL CONCEPTO ANONIMO Y SE EJECUTA APENAS EL NAVEGADOR RECONOCE EL DOCUMENTO DONDE ESTA EJECUTADA ESTA FUNCION,APENAS CARGA LA PAGINA SE EJECUTA TODA LA PROGRAMACION QUE CONTENGA LA FUNCION.
//?ADEMAS QUE AL UTILIZAR ESTAS FUNCIONES ANONIMAS AUTOEJECUTABLES TE EVITAS DE CONFLICTOS POR NOMBRES SIMILARES CON ALGUNAS VARIABLES O CODIGOS DE LIBRERIAS EXTERNAS
//_ADEMAS QUE TE PERMITE PASAR PARAMETROS DE UNA MANERA MAS AMIGABLE 

//FUNCION ANONIMA AUTO EJECUTABLE
// _    ESTE ES EL CUERPO DE LA FUNCION AUTO EJECUTABLE PENDIENTE: SIEMPRE QUE ESTES TRABAJANDO CON ESTE TIPO DE FUNCION SIEMPRE LLEVA AL FINAL ;, ESTO ES PARA QUE NO PASEN COSAS RARAS MAYORMENTE ESTE ES UNO DE LOS POCOS CASOS QUE NECESITAN ; EN JAVASCRIPT

// (function (){

// })();

 (function (){
    console.log("mi primer funcion anonima autoejecutable");
 })();

 (function (d,w,c){
    console.log("mi segunda funcion anonima autoejecutable");
    console.log(d);
    console.log(w);
    console.log(c);
    c.log("esto es un mensaje, esta es una manera de abreviar console porque le asignamos console a c, buena manera de ahorranos tiempo no crees ? ");
 })(document,window,console);


// FORMAS DE ESCRIBIR LAS FUNCIONES ANONIMAS AUTOEJECUTABLES

// CLASICA
(function (){
    console.log("version clasica");
})();

// LA CROCKFORD (JAVASCRIPT THE GOOD PARTS)
((function (){
    console.log("version CrockFord");
})());


// UNARIA
 +function () {
    console.log("version unaria");
 }();

//  FACEBOOK

!function (){
    console.log("version facebook");
}();