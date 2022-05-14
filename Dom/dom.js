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

    console.clear();//LIMPIAMOS CONSOLA



    // *********************ESTILOS Y VARIABLES CSS************************************


    const $linkDomEnlace = document.querySelector(".link-dom")
    console.log($linkDomEnlace.style)//para acceder a los estilos de una etiqueta o variable, lo hacemos con la notacion del punto y este nos devuelve un mapa con todas la propiedades de css 

    // DATO A SABER : ES MUCHO MAS FRECUENTE ACCEDER A LOS STYLES DE UN ELEMENTO CON LA NOTACION DEL PUNTO QUE CON GETATTRIBUTE(), AUNQUE CLARO TAMBIEN SE PUEDE HACER

    console.log($linkDomEnlace.getAttribute("style"))

    console.log($linkDomEnlace.style.backgroundColor)//!accedemos al background-color, acordarse que van sin guion
    console.log($linkDomEnlace.style.color)//accedemos al color de la variable $linkDomEnlace
    console.log(window.getComputedStyle($linkDomEnlace))//!ESTA ES UNA SEGUNDA FORMA DE ACCEDER A LOS ESTILOS DE UN ELEMENTO 

    console.log(getComputedStyle($linkDomEnlace).getPropertyValue("color"))//getPropertyValue podemos acceder al valor de la propiedad que le pasemos en dicho parametro, ojo no coloque window como en la linea pasada justamente porque si cuelga de window no es necesario 

    //? **********************COMO ESTABLECEMOS VALORES************** 
    // hay diferentes maneras de hacerlo

    $linkDomEnlace.style.setProperty("text-decoration", "none")//aca si va con guiones, ya que esta pidiendo los parametros como string y se le aplico el 
    $linkDomEnlace.style.setProperty("display", "block")//nos muestra como el enlace paso a hacer bloque
    $linkDomEnlace.style.width = "50%";//aunque podemos tambien hacerlo de esta manera 
    $linkDomEnlace.style.textAlign = "center";//aca alineamos el texto al centro del bloque
    $linkDomEnlace.style.marginLeft = "auto"
    $linkDomEnlace.style.marginRight = "auto"
    $linkDomEnlace.style.padding = "1rem"
    $linkDomEnlace.style.borderRadius = ".5rem"



    // **********************VARIABLES CSS  - CUSTOM PROPERTIES CSS********************


    // COMO ACCEDEMOS A LAS PROPIEDADES CSS DE LAS VARIABLES CSS 

    const $html = document.documentElement;//accedemos al html
    const $body = document.body;//accedemos al body del document

    //creamos las variables y accedemos a las properties css

    let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

    console.log(varDarkColor,varYellowColor);

    //aca remplazamos el valor de body con lo que contiene las variables que capturaron el valor de las properties

    $body.style.backgroundColor = varDarkColor;
    $body.style.color = varYellowColor;

    $html.style.setProperty("--dark-color", "tomato")//?porque al modificar el valor a la variable no aparece reflejado en pantalla?

    // !Sencillo es porque tiene el valor desactualizado tienes que redefinir el valor a varDarkcolor 

    varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
    //?$body.style.backgroundColor = varDarkColor;//esto es con la notacion del punto, pero lo puedo hacer con setPropertie()
    //con esto cambia de color el body $body.style.setProperty("background-color", varDarkColor);
    //$body.style.setProperty("background-color", varDarkColor);


    // !!Importante tener en cuenta que con la propiedad style del elemento no podremos acceder a propiedades declaradas en una hoja de estilos externa al documento HTML, solamente podremos acceder a los estilos declarados dentro del atributo style del elemento, si queremos consultar propiedades establecidas desde la hoja de estilos externa debemos usar getComputedStyle :)


    // ***********************CLASES CSS************************************
    
    // _________CLASES, CLASSLIST Y METODOS DE CLASSLIST______________________

    // !Usar classList es una forma práctica de acceder a la lista de clases de un elemento como una cadena de texto delimitada por espacios a través de element.

    // ?add() -- añade una clase 
    // ?remove() -- remueve o elimina una clase 
    // ?item() -- devuelve la clase del indice especificado, es igual que los arrays empiezan desde cero
    // ?contains() -- verifica si ese elemento posee o no, la clase especificada 
    // ?replace() -- remplaza una clase por otra, recibe 2 parametros (clase actual, clase a remplazar)
    // ?toggle() -- si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.

    const $card = document.querySelector(".card");//traere la primner card que encuentre en el documento
    $card.classList.add("hola")
    console.log($card.className)//nos devuelve las clases que tiene dicho elemnto
    console.log($card.classList)//nos devuelve las clases que tiene dicho elemento a manera de "arreglo"

    console.log($card.classList.contains("rotate-45"))
    $card.classList.add("rotate-45")
    console.log($card.classList.contains("rotate-45"))
    $card.classList.remove("rotate-45")
    console.log($card.classList.toggle("rotate-45"));//devolvera true
    console.log($card.classList.toggle("rotate-45"));//devolvera false
    console.log($card.classList.toggle("rotate-45"));
    $card.classList.replace("rotate-45", "rotate-135")
    $card.classList.add("opacity-80", "sepia")//agregando mas clases se puede hacer gracias a las comas 

// ****************TEXTOS Y HTML***********************

const $whatIsDom = document.getElementById("que-es");

let text = `
<p>
El modelo de objetos del documento (<b><i>Dom-Document Object Model</i></b>) es una API para documentos HTML Y XML
</p>
<p>Este provee una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante codigo JS 
</p>
<p>
<mark>El Dom no es parte de la especificacion de javascript, es una API para los navegadores
</mark>
</p>`
;

$whatIsDom.innerText = text;//este solo sirve para explorer no es estandar y es para texto
$whatIsDom.textContent = text;//cuando necesites insertar contenido de texto usa innerContent
$whatIsDom.innerHTML = text;//cuando necesites insertar contenido html usa innerHTML
$whatIsDom.outerHTML = text;//remplaza el contenido tambien como innerhtml, pero este nos soluciona el error que nos daba el innerhtml que mostraba que dentro del elemeno p habian mas p y eso semantica en html es mal visto o mal en seo, de hecho con outer remplazamos igualmente pero se respeta la estructura html


// *************DOM Traversing*****************

//!DOM Traversing o rrecorriendo el Dom, no es mas que una serie de propiedades que nos da le API del dom para poder rrecorrer los elementos o nodos

// ?todos los que vamos a ver son para los elementos a las etiquetas como tal 

const $cards = document.querySelector(".cards");
console.log($cards.children)//esto me mostrara una collecion de los elemntos hijos de cards 

// y si quisiera acceder a una tarjeta en particular lo hago de esta forma
console.log($cards.children[1])

console.log($cards.parentElement)//retorna el elemto padre : retorno el body
console.log($cards.firstElementChild)//retorna al primer hijo element
console.log($cards.lastElementChild)//retorna el ultimo hijo element
console.log($cards.previousElementSibling)//retorna el elemento anterior a cards, que en este caso es el link 
console.log($cards.nextElementSibling)//retorna el elemento siguiente a cards, que en este caso es el script 
console.log($cards.childNodes)//nos devuelve los nodos de los hijos de cards
console.log($cards.children[3].closest("section"))//nos devuelve el ancestro mas cercano que le coloquemos en los string que en este caso es cards 

console.clear()

// ******************CREANDO ELEMENTOS Y FRAGMENTOS DOM*******************************

// metodo para crear elementos 
// createElement()
// metodo para crear nodo de tipo text
// createTextNode()

const $figure = document.createElement("figure");
const $image = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");
const $cardsContainer = document.querySelector(".cards");

// metodo para agregar un hijo
// appendChild()


$image.setAttribute("src","https://placeimg.com/200/200/animals");
$image.setAttribute("alt","Animals");
$figure.classList.add("card")

$figcaption.appendChild($figcaptionText)
$figure.appendChild($image)
$figure.appendChild($figcaption)
$cardsContainer.appendChild($figure)   

// otra forma de hacer otra card como lo hicimos en lo anterior 
// la siguiente forma es mucha mas comoda 

const $figure2 = document.createElement("figure");
$figure2.innerHTML=`
<img src="https://placeimg.com/200/200/people" alt="people"></img>
<figcaption>People</figcaption>
`;

$figure2.classList.add("card")
$cards.appendChild($figure2)

// Lo anterior es para generar elementos uno por uno 
// pero imaginemos que una Api nos regresa un json con varios datos, que dinamicamente
// queremos agregar

const estaciones = ["Primavera","Verano","Otoño","Invierno"]
const $ul = document.createElement("ul")//cremos dinamicamente un ul 
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul)//agregamos el ul al body

estaciones.forEach(el =>{
    const $li = document.createElement("li")
    $li.textContent = el;
    $ul.appendChild($li)
})

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"]
const $ul2 = document.createElement("ul");
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul2)
$ul2.innerHTML = ""
continentes.forEach((el) =>($ul2.innerHTML+=`<li>${el}</li>`));

// cuando hacemos lo anterior de insertar o golpear al dom, esos datos que en este caso son los que estan en el array que pues no son muchos pero imaginemos que sean muchos, que una api nos da mil elementos pues al estar insertando al dom a cada rato y mas si son muchas inserciones al dom, estariamos ralentizando la aplicacion, asi que lo que vamos hacer es crear un fragmento dinamicos y hace fragmento le vamos a ir iterando los elementos para cuando ya esten cargados en el fragmento pegamos ese fragmento al dom y evitamos ralentizaciones y mejoramos el rendimiento 

// aplica para catalogo, tienda de productos etc

// ojo ese fragmento no esta en el dom esta en memoria, por eso es buena practica esta manera

// !Definición y uso
// !El createDocumentFragment()método crea un nodo fuera de la pantalla.

// El nodo fuera de pantalla se puede usar para crear un nuevo fragmento de documento que se puede insertar en cualquier documento.

// El createDocumentFragment()método también se puede utilizar para extraer partes de un documento, cambiar, agregar o eliminar parte del contenido e insertarlo nuevamente en el documento.

// ?Nota
// Siempre puede editar elementos HTML directamente. Pero una mejor manera es construir un fragmento de documento (fuera de pantalla) y adjuntar este fragmento al DOM real (en vivo) cuando esté listo. Debido a que inserta el fragmento cuando está listo, solo habrá un reflujo y un solo renderizado.

// !!!Si desea agregar elementos de elementos HTML en bucles, el uso de fragmentos de documentos también mejora el rendimiento. sacado de la W3

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const $ul3 = document.createElement("ul")
const $fragment = document.createDocumentFragment()

// importante como son fragmentos del dom, no podemos usar la tecnica del innerHtml, si no crear los elementos nodos, es la forma mas adecuada

meses.forEach(el=>{
    const $li = document.createElement("li")
    $li.textContent = el;
    $fragment.appendChild($li)
})

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment)
document.body.appendChild($ul3)

