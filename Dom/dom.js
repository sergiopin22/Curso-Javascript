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
// _Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).

// _En Javascript, cuando nos referimos al DOM nos referimos a esta estructura, que podemos modificar de forma dinámica desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

// _Al estar "amparado" por un lenguaje de programación, todas estas tareas se pueden automatizar, incluso indicando que se realicen cuando el usuario haga acciones determinadas, como por ejemplo: pulsar un botón, mover el ratón, hacer click en una parte del documento, escribir un texto, etc...

// *************************** EL OBJETO DOCUMENT *******************
// ?En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, que representa el árbol DOM de la página o pestaña del navegador donde nos encontramos. En su interior pueden existir varios tipos de elementos, pero principalmente serán  o :

// !ELEMENT no es más que la representación genérica de una etiqueta: HTMLElement.
// !NODE es una unidad más básica, la cuál puede ser ELEMENT o un nodo de texto.


// Todos los elementos HTML, dependiendo del elemento que sean, tendrán un tipo de dato específico. Algunos ejemplos:


// _HTMLElement	HTMLDivElement	<div>	Capa divisoria invisible (en bloque).
// _HTMLElement	HTMLSpanElement	<span>	Capa divisoria invisible (en línea).
// _HTMLElement	HTMLImageElement	<img>	Imagen.
// _HTMLElement	HTMLAudioElement	<audio>	Contenedor de audio.
// _Obviamente, existen muchos tipos de datos específicos, uno por cada etiqueta HTML.


// *****************API NATIVA DE JAVASCRIPT **************************
// ?En los siguientes capítulos veremos que Javascript nos proporciona un conjunto de herramientas para trabajar de forma nativa con el DOM de la página, entre las que se encuentran:

// _🔍Buscar etiquetas	Familia de métodos entre los que se encuentran funciones como .getElementById(), .querySelector() o .querySelectorAll(), entre otras.
// *🔮Crear etiquetas	Una serie de métodos y consejos para crear elementos en la página y trabajar con ellos de forma dinámica.
// !🔌Insertar etiquetas	Las mejores formas de añadir elementos al DOM, ya sea utilizando propiedades como .innerHTML o método como .appendChild(), .insertAdjacentHTML(), entre otros.
// _🎭Gestión de CSS	Consejos para la utilización de la API .classList de Javascript que nos permite manipular clases CSS desde JS, de modo que podamos añadir, modificar, eliminar clases de CSS de un elemento de una forma práctica y cómoda.
//?🚢Navegar por tags	Utilización de una serie de métodos y propiedades que nos permiten «navegar» a través de la jerarquía del DOM, ciñéndonos a la estructura del documento y la posición de los elementos en la misma.


//******************* */ NODOS ELEMENTOS Y SELECTORES ***************

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

    // _DATOS DE QUERYSELECTOR INTERESANTE : "QUERYSELECTOR ES MAS LENTO EN EJECUTARSE QUE GETELEMENTBYID, JUSTAMENTE POR QUE EL QUERY TIENE QUE VALIDAR QUE TIPO DE SELECTOR DE CSS LE ESTAS PASANDO"

    console.clear();

    // ****************ATRIBUTOS Y DATA-ATTRIBUTES ************

    // _METODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS 

    // *---  setAttribute() -- modifica el valor de un atributo
    // *---  getAttribute() -- obtiene el valor de un atributo
    // *---  removeAttribute() -- remueve el valor de un atributo
    // *---  hasAttribute() -- valida si tenemos un atributo en un elemento nos devuelve en valor bool

    console.log(document.documentElement.lang)
    console.log(document.documentElement.getAttribute("lang"))
    console.log(document.querySelector(".link-dom"))
    //console.log(document.querySelector(".link-dom").getAttribute("href"))//esta es la mejor forma con get attribute()

    // COMO ESTABLECER NUEVOS VALORES A LO ATRIBUTOS 

    document.documentElement.lang = "es"; //aca se lo cambiamos a es y estaba en en
    document.documentElement.setAttribute("lang", "es")

    const $linkDom = document.querySelector(".link-dom")//el simbolo $dolar nos indica que la variable con la cual
    //estamos tratando hace parte del dom o el html y no es una variable logica necesaria del programa en si. es buena practica aplicar el dolar para no confundirse con tantas variables

    $linkDom.setAttribute("target","blank")
    $linkDom.setAttribute("rel","noopener")
    // _En realidad, el rel=»noopener» es solo una instrucción para que el navegador impida el uso del objeto window. opener de Javascript. Como sabes, los bots de los motores de búsqueda rastrean las webs para posicionarlas correctamente y no interactúan con el rel=»noopener».
    $linkDom.setAttribute("href","https://www.youtube.com/watch?v=l6npGZa_vgc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&ab_channel=jonmircha")//!podemos modificar los atributos y valores de esos atributos

    console.log($linkDom.hasAttribute("target"))//nos devuelve true porque si existe este atributo en el elemento $linkDom

    $linkDom.removeAttribute("target")//aca removemos el atributo target 

    console.log($linkDom.hasAttribute("target"))//nos devuelve false porque ya no existe este atributo en el elemento $linkDom

    //!Data-Attributes
    // Attributes tambien funcionan con los Data-Attributes
    console.log($linkDom.getAttribute("data-description"));//imprime Document Object Model
    console.log($linkDom.dataset);//imprime el tipo de dato mapa, que nos muestra hay dos data-attributes que son el id y el description