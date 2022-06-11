const d = document;

export default function tempo(id,houres,minutes,finalMessage,houresbox,minutesbox){
    if(houres < 0 && minutes < 0 && seconds < 0){
        console.log("ingresa un tiempo valido")
    }
    else if(houres >= 0 && minutes >= 0 && seconds >= 0){
        let houresNumber = houres;
        let minutesNumber = minutes;
        let seconds = 60;

    let intervalo = setInterval(() => {
        console.log(`${houresNumber}:${minutesNumber},${seconds}`)
        // console.log("hola")
        
        
        if(houresNumber === 0 && minutesNumber === 0 && seconds === 0){
            d.querySelector(id).innerHTML = `<strong>${finalMessage}</strong>`;
            clearInterval(intervalo);   
        }
        if(seconds === 0){
            minutesNumber--;  
            seconds = 60;
        }
        if(minutesNumber === 0){
            houresNumber--;  
            minutesNumber = 60;
        }
        seconds--;
        let $houres = `<h3>${houresNumber}</h3>`
        let $minutes = `<h3>${minutesNumber}</h3>`
        let $seconds = `<h3>${$seconds}</h3>`
        let temporizador = `<h3>${$houres} Horas ${$minutes} Minutos : ${$seconds} Segundos</h3>`
        d.querySelector(id).innerHTML = temporizador
        d.querySelector(houresbox).innerHTML = $houres
        d.querySelector(minutesbox).innerHTML = $minutes
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