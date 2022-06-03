//!! Una introducción a AJAX.
// JavaScript Asíncrono + XML (AJAX) no es una tecnología por sí misma, es un término que describe un nuevo modo de utilizar conjuntamente varias tecnologías existentes. Esto incluye: HTML o XHTML, CSS, JavaScript, DOM, XML, XSLT, y lo más importante, el objeto XMLHttpRequest. Cuando estas tecnologías se combinan en un modelo AJAX, es posible lograr aplicaciones web capaces de actualizarse continuamente sin tener que volver a cargar la página completa. Esto crea aplicaciones más rápidas y con mejor respuesta a las acciones del usuario.

// _AJAX significa Asynchronous JavaScript And XML. En pocas palabras, es el uso del objeto XMLHttpRequest para comunicarse con los servidores.
// Puede enviar y recibir información en varios formatos, incluidos JSON, XML, HTML y archivos de texto.
// El atractivo de AJAX es su naturaleza "asíncrona", lo que significa que puede comunicarse con el servidor, intercambiar datos y actualizar la página sin tener que recargar el navegador.

// !!OJO : AJAX no es una tecnología en sí mismo. En realidad, se trata de varias tecnologías independientes que se unen:

// *HTML y CSS, para crear una presentación basada en estándares.
// *DOM, para la interacción y manipulación dinámica de la presentación.
// *HTML, XML y JSON, para el intercambio y la manipulación de información.
// *XMLHttpRequest o Fetch, para el intercambio asíncrono de información.
// *JavaScript, para unir todas las demás tecnologías.
// *Es importante también considerar los Códigos de estado de respuesta HTTP y los estados de la petición AJAX

// _oncepto de Endpoint: Una petición HTTP que retorna JSON. A las URL's que reciben o retornan información de un Web API se les llama endpoints (solo para que conozcas la jerga que utilizan los programadores).

// *********************AJAX CON XMLHttpRequest**************************
// !!Pasos importantes para una peticion Ajax con XMLHttpRequest
// paso n1 la instancia al XMLHttpRequest
// paso n2 la asignacion del evento o de los eventos 
// paso n3 abrir una peticion establecer el metodo en que lo vamos hacer y brindar el recurso o endpoint
// paso n4 enviar la peticion con el metodo send()

(()=>{//funcion anonima autoejecutable
    const xhr = new XMLHttpRequest();//Creamos un objeto de tipo XMLHttpRequest
    $xhr = document.getElementById("xhr");
    $fragment = document.createDocumentFragment();
    xhr.addEventListener("readystatechange",(e)=>{ //readystatechange detecta cualquier cambio o ocurrencia 
        if(xhr.readyState !== 4)return;//no retornes nada
        console.log(xhr)
        if(xhr.status >= 200 && xhr.status < 300){
            console.log("Hecho Exitosamente")
            console.log(xhr.responseText)//ver los datos que trajimos de la api 
            let json = JSON.parse(xhr.responseText)//vamos a convertirlo de json a javascript
            console.log(json)

            json.forEach(el=>{//para cada elemento 
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`;
                $fragment.appendChild($li)//lo metemos al fragment
            })

            $xhr.appendChild($fragment)
        }
        else{
            console.log("Se Presento Un Error")
            let message = xhr.statusText ||"Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
    })
    // _readystatechange es un evento del xhr es muy bueno, porque se ejecuta cuando ya se que la peticion haya abortado, que haya lanzado un error, que haya completadose es como que todos los eventos que tiene ajax viven en el readystatechange
    xhr.open("GET","https://jsonplaceholder.typicode.com/users")//es el metodo que va a abrir la peticion y recibe 2 parametros, el 1 es los tipos de peticiones en nuestro caso vamos hacerla con GET que es cuando la hacemos mediante una url y como 2 parametro recibe el recurso o la url a la cual vamos hacer la peticion

    // _para utilizar datos locales json es la misma metodologia pero ya es de forma local ya no colocas la url de la api publica ejemplo
    // xhr.open("GET", "ruta de las carpetas donde se encuentra el json")

    xhr.send()//enviamos la peticion con el metodo send()
})();