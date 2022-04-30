let nombre = prompt("cual es tu nombre")
let texto = `hola ${nombre}`
const hablar = (texto) =>{
speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}

hablar(texto);