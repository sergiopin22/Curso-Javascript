// let nombre = prompt("cual es tu nombre")
// let texto = `hola ${nombre}`
// const hablar = (texto) =>{
// speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
// }

// hablar(texto);


console.log("******ELEMENTOS DEL DOCUMENTO****************");
console.log(window.document)//con esto podemos mostrar el documento
console.log(document.head)//con esto podemos ver el head del documento
console.log(document.body)//con esto podemos ver el body  del documento
console.log(document.documentElement)//con esto podemos ver el html del documento
console.log(document.doctype)//con esto podemos ver el doctype del documento 
console.log(document.characterSet)//con esto podemos ver el tipo de caracter del documento UTF-8
console.log(document.title)//con esto podemos ver el titulo del documento
console.log(document.images)//con esto podemos ver las imagenes del documento
console.log(document.forms)//con esto podemos ver los formularios del documento
console.log(document.styleSheets)//con esto podemos ver las hojas de estilo del documento
console.log(document.scripts)//con esto podemos ver los scripts del documento
// setTimeout(() => {
    
//     console.log(document.getSelection().toString())//con esto podemos ver en consola en string lo que seleccionamos con el mouse, esta dentro de una funcion setimeout para poder alcanzar a seleccionar y se pueda ver lo que se selecciona
// },2000);

// document.write("<h2>probando document.write() desde javascript , pdta: no es buena practica</h2>")

//****************************** NODOS DEL DOM ************************************** */
// ?Un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el mismo body o incluso las etiquetas de una lista. Con Javascript podemos modificar estas etiquetas con el uso de eventos.

// METODOS QUE YA NO SE USAN PERO HACEN PARTE DEL DOM

    console.log(document.getElementsByTagName("section"))// por nombre de etiqueta
    console.log(document.getElementsByClassName("card"))//por nombre de clase
    console.log(document.getElementsByName("name"))// por nombre de atributo name
    console.log(document.querySelector("#menu"))// consulta de selector, recibe como parametro un selecto valido de css, cualquier selector que no sean pseudoelementos o pseudoclases
    console.log(document.querySelector("a"))//aca me va atraer el primer link que encuentre o el primer elemento que encuentre 
    console.log(document.querySelectorAll("a"))//si queremos traernos todos los link o todos los elementos en base a una etiqueta utilizaamos queryselectorAll porque su nombre lo dice all que es todo y nos los trae.

    document.querySelectorAll("a").forEach((el) => console.log(el));

    console.log(document.querySelectorAll(".card")[2])//con esto  puedo acceder a la tarjeta que yo quiera en este caso la tarjeta 3, se colocan las llaves como se hace con los arrays

    console.log(document.querySelectorAll("#menu li"))//tambien recibe elementos descendientes en este caso nos va a encontrar los li que estan contenidos dentro de menu

    // !queryselectorall les quito el trabajo a getElementByTagName, getElementsByName y a getElementsByClassName

    // ?solo se utiliza hoy en dia getElementByID, querySelector y querySelectorAll

    // _DATOS DE QUERYSELECTOR INTERESANTE : "QUERYSELECTOR ES MAS LENTO EN EJECUTARSE QUE GETELEMENTBYID, JUSTAMENTE POR QUE EL QUERY TIENE QUE VALIDAR QUE TIPO DE SELECTOR LE ESTAS PASANDO"

    