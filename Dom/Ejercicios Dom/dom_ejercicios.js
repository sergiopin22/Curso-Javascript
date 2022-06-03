import hamburgerMenu from "./app_menu.js";
import { Alarma, digitalClock } from "./app_reloj.js";
import { moveBall, shortcuts } from "./teclado.js";


const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    d.querySelector(".panel")
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
    digitalClock("#reloj", "#activar-reloj","#desactivar-reloj")
    Alarma("#audio","#activar-alarma","#desactivar-alarma")
})

d.addEventListener("keydown", (e)=>{//keydomn es cuando presionas la tecla
    shortcuts(e);
    moveBall(e,".ball",".stage")
})

//keydomn es cuando presionas la tecla
//keyup es cuando dejas de precionar la tecla
//keypress es cuando mantienes presionada la tecla 

