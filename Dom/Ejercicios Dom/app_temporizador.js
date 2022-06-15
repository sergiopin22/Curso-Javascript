const d = document;

export default function tempo(id,sound,houres,minutes,seconds,finalMessage,houresbox,minutesbox,secondsbox){
    if(houres < 0 && minutes < 0 && seconds < 0){//no puede ser negativo 
        console.log("ingresa un tiempo valido")
    }
    else if(houres >= 0 && minutes >= 0 && seconds >= 0){
        let houresNumber = houres;
        let minutesNumber = minutes;
        let seconds = 4;

        

    let intervalo = setInterval(() => {
        console.log(`${houresNumber}:${minutesNumber},${seconds}`)
        // console.log("hola")
        
        seconds--;
        
        if(seconds === 0 && minutesNumber !== 0){
            minutesNumber--;  
            seconds = 60;
        }
        if(minutesNumber === 0 && houresNumber !== 0){
            houresNumber--;  
            minutesNumber = 60;
        }
        let $houres = `<h3>${houresNumber} <br>Horas</h3>`
        let $minutes = `<h3>${minutesNumber} <br>Minutos</h3>`
        let $seconds = `<h3>${seconds} <br>Segundos</h3>`
        // let temporizador = `<h3>${$houres} Horas ${$minutes} Minutos : ${$seconds} Segundos</h3>`
        // d.querySelector(id).innerHTML = temporizador;
        
        if(houresNumber === 0 && minutesNumber === 0 && seconds === 0){
                let alarmaTempo = setTimeout(() => {
                d.querySelector(sound).play()
                }, 0);
            d.querySelector(id).innerHTML = `<strong>${finalMessage}</strong>`;
            clearInterval(intervalo);   
        }
        d.querySelector(houresbox).innerHTML = $houres;
        d.querySelector(minutesbox).innerHTML = $minutes;
        d.querySelector(secondsbox).innerHTML = $seconds;
        $houres.appendChild(id) 
        $minutes.appendChild(id) 
        $seconds.appendChild(id) 
    }, 1000);

    }
}

// const d = document;

// export default function tempo(id,limitDate,finalMessage){


//     if(limitDate < 0){
//         console.log("ingresa un tiempo valido")
//     }
//     else if(limitDate >= 0){
//         let minutes = limitDate;
//         let seconds = 60;

//     let intervalo = setInterval(() => {
//         // console.log(`${minutes}:${seconds}`)
//         let temporizador = `<h3>${minutes} Minutos : ${seconds} Segundos </h3>`
//         d.querySelector(id).innerHTML = temporizador
//         if(minutes === 0 && seconds === 0){
//             d.querySelector(id).innerHTML = `<strong>${finalMessage}</strong>`;
//             clearInterval(intervalo)    
//         }
//         if(seconds === 0){
//             minutes--;  
//             seconds = 60;
//         }
//         seconds--;
//         }, 1000);

//     }

    

// }