import hamburgerMenu from "./app_menu.js";
import { Alarma, digitalClock } from "./app_reloj.js";


const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    d.querySelector(".panel")
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
    digitalClock("#reloj", "#activar-reloj","#desactivar-reloj")
    Alarma("#audio","#activar-alarma","#desactivar-alarma")
})


