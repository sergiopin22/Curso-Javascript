// export function digitalClock(relojBtn,relojStop,reloj){
//     const d = document;
//     d.addEventListener("click", (e)=>{
//         if(e.target.matches(relojBtn)){
//             const $fecha = new Date();
//             let text = `
//             <p>
//             El modelo de objetos del documento (<b><i>Dom-Document Object Model</i></b>) es una API para documentos HTML Y XML
//             </p>
//             <p>Este provee una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante codigo JS 
//             </p>
//             <p>
//             <mark>El Dom no es parte de la especificacion de javascript, es una API para los navegadores
//             </mark>
//             </p>`;
//             let reloj2 = d;
//             d.querySelector(relojBtn).setAttribute("disabled","disabled")
//             setInterval(() => {
//                 reloj2.textContent = text;
//                 reloj2.appendChild(reloj)
//             }, 1000);
//         }
//         if(e.target.matches(relojStop)){
//         }
//     })
// }

const d = document;
export function digitalClock(clock, btnPlay, btnStop){
    let ClockTempo;
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){
        ClockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            }, 1000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearInterval(ClockTempo)
            d.querySelector(clock).innerHTML = null
            d.querySelector(btnPlay).disabled = false;
        }
    })

}


export function Alarma(Sound,btnPlay,btnStop){
    let alarmaTempo;
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPlay)){
            alarmaTempo = setTimeout(() => {
            d.querySelector(Sound).play()
            }, 1000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmaTempo)
            d.querySelector(btnPlay).disabled = false;
            d.querySelector(Sound).pause();
            d.querySelector(Sound).currentTime = 0; 
        }
    })
}