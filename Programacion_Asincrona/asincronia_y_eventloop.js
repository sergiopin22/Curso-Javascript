// ***TEMA DE HOY {ASINCRONIA Y EL EVENTLOOP}***

//__ CONCEPTOS IMPORTANTES A SABER 

// PROCESAMIENTO SINGLE THREAD Y MULTI THREAD
// OPERACIONES CPU Y OPERACIONES INPUT / OUTPUT
// OPERACIONES CONCURRENTES Y PARALELAS 
// OPERACIONES BLOQUEANTES Y NO BLOQUEANTES
// OPERACIONES SINCRONAS Y ASINCRONAS 

// CODIGO SINCRONO BLOQUEANTE 
(() =>{

    console.log("codigo sincrono")
    console.log("incio")
    function dos(){
        console.log("dos")
    }
    function uno(){
        console.log("uno")
        dos()
        console.log("tres")
    }
    uno();
    console.log("Fin")
    console.log("***************************")
})();
// CODIGO ASINCRONO NO BLOQUEANTE
(() =>{
    console.log("Codigo Asincrono")
    console.log("Inicio")

    function dos(){
        setTimeout(function() {
            console.log("Dos")
        }, 1000);
    }

    function uno(){
        setTimeout(function() {
            console.log("Uno")
        }, 0);
        dos();
        console.log("Tres")
    }

    uno();
    console.log("Fin")

})();

// _JAVASCRIPT USA UN MODELO ASINCRONO Y NO BLOQUEANTE CON UN LOOP DE EVENTOS(EVENT LOOP) IMPLEMENTANDO EN UN SOLO 
// _HILO (SINGLE THREAD) PARA OPERACIONES DE ENTRADA Y SALIDA (INPUT/OUTPUT)
