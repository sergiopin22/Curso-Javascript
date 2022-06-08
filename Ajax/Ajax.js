//!! Una introducción a AJAX.
// JavaScript Asíncrono + XML (AJAX) no es una tecnología por sí misma, es un término que describe un nuevo modo de utilizar conjuntamente varias tecnologías existentes. Esto incluye: HTML o XHTML, CSS, JavaScript, DOM, XML, XSLT, y lo más importante, el objeto XMLHttpRequest. Cuando estas tecnologías se combinan en un modelo AJAX, es posible lograr aplicaciones web capaces de actualizarse continuamente sin tener que volver a cargar la página completa. Esto crea aplicaciones más rápidas y con mejor respuesta a las acciones del usuario.

// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

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
        //console.log(xhr)
        if(xhr.status >= 200 && xhr.status < 300){
            //console.log("Hecho Exitosamente")
            //console.log(xhr.responseText)//ver los datos que trajimos de la api 
            let json = JSON.parse(xhr.responseText)//vamos a convertirlo de json a javascript
            //console.log(json)

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


// *****************AJAX CON API DE FETCH************
// _La API Fetch proporciona una interfaz para obtener recursos (incluso a traves de la red). Parecera familiar a quien sea que haya usado XMLHttpRequest, pero proporciona un conjunto de características más potentes y flexibles. Este artículo explica algunos de los conceptos básicos de la API Fetch.

// !!Fetch toma la naturaleza asíncrona de dichas peticiones un paso adelante. La API esta completamente basada en Promise.

(()=>{
    //console.log("PROBANDO LA API DE FETCH")
    $fetch = document.getElementById("fetch");
    $fragment = document.createDocumentFragment();
    
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((respuesta) =>{
        //console.log(respuesta)
        return respuesta.ok ? respuesta.json() : Promise.reject(respuesta);
    }).then(json => {
        //console.log(json)
        // $fetch.textContent = json;
        json.forEach(el=>{//para cada elemento 
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`;
            $fragment.appendChild($li)//lo metemos al fragment
        })

        $fetch.appendChild($fragment)
    })
    .catch((err) =>{
        //console.log("Estamos en el catch",err)
        //console.log("Se Presento Un Error")
        let message = err.statusText ||"Ocurrio un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })//.finally(()=> console.log("Esto se ejecutara independientemente del resultado de la Promesa Fetch"))
})();

// _el then() ejecuta la parte positiva si la promesa se resuelve y el catch() si la promesa no se resuelve
// _El método finally() devuelve una Promise. Cuando la promesa se resuelve, sea exitosa o rechazada, la función de callback específicada será ejecutada. Esto ofrece una forma de ejecutar código sin importar como se haya resuelto la promesa.


    //*****************AJAX: API Fetch + Async-Await*************** 

(()=>{
    $fetchAsync = document.getElementById("fetch-Async");
    $fragment = document.createDocumentFragment();
    
    async function getData(){//creamos una funcion async para hacer uso de los await
        
        // "https://api.nasa.gov/planetary/apod?api_key=WmIgxHftdHKOiQ7AL26iXogv1nnJ4WptBxiKbWRl"
        try{//lo que se va a ejecutar
            let res =  await fetch("https://api.nasa.gov/planetary/apod?api_key=WmIgxHftdHKOiQ7AL26iXogv1nnJ4WptBxiKbWRl");//con el await le decimos que espere que se haga la peticions
            let json = await res.json();//el json recibe la peticion y la parciamos y le decimo que espere mientras se hace el proceso y no salte de una a la siguiente linea
            //console.log(res,json)


            if(!res.ok)throw{status:res.status, statusText:res.statusText}



            
            for (const key in json) {
                const $li = document.createElement("li");
                $li.innerHTML = `Propiedad: ${key}: ${json[key]}`;
                $fragment.appendChild($li)//lo metemos al fragment
            }
            
                const $imageApi = document.createElement("img");
                $imageApi.setAttribute("src",`${json.hdurl}`)
                $fragment.appendChild($imageApi)//lo metemos al fragment

                $fetchAsync.appendChild($fragment)

        }catch(err){//manejo del error
            //console.log(err)
            let message = err.statusText ||"Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        }

    }
    getData()
})();

// *****************MECANISMO POR LA LIBRERIA AXIOS***************** 
// ESTA BASADA EN PROMESAS 
//una ventaja que puedo ver es que ya esta parseado en el parametro data la respuesta y no tengo que hacerlo como fetch o en XMLhttprequest
//otra cosa que podemos notar es que trasbambalinas axios utiliza a XMLhttprequest en sus entrañas 


(()=>{
    $axios = document.getElementById("axios");
    $fragment = document.createDocumentFragment();
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) =>{
        //console.log(res)
        let data = res.data;
        data.forEach(el=>{//para cada elemento 
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`;
            $fragment.appendChild($li)//lo metemos al fragment
        })

        $axios.appendChild($fragment)
    })
    .catch((err) =>{
        let message = err.response.statusText || "Ocurrio un error";
        $axios.innerHTML = `Error ${err.response.status}:${message}`
        //console.log("Estamos en el catch",err.response)
    })
    .finally(()=>{
        //console.log("Esto se ejecutara independientemente del resultado Axios")
    })
})();


// *****************MECANISMO POR LA LIBRERIA AXIOS + ASYNC-AWAIT*****************

(()=>{
    $axiosAsync = document.getElementById("axios-Async");
    $fragment = document.createDocumentFragment();
    

    async function getData(){

        try{
            let res =  await axios.get("https://jsonplaceholder.typicode.com/users");
            let data = await res.data;
            console.log(res,data)

            data.forEach(el=>{//para cada elemento 
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} --- ${el.email} --- ${el.phone}`;
                $fragment.appendChild($li)//lo metemos al fragment
            })
    
            $axiosAsync.appendChild($fragment)


        } catch(err) {
        //console.log(err.response)
        let message = err.response.statusText || "Ocurrio un error";
        $axiosAsync.innerHTML = `Error ${err.response.status}:${message}`;
        } finally { 
            console.log("Esto se ejecutara independientemente del try catch");
        }

    }

    getData()

})();


