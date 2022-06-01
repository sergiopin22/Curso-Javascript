import hamburgerMenu from "./app_menu.js";


const d = document;
d.addEventListener("DOMContentLoaded", (e) =>{
    d.querySelector(".panel")
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
})