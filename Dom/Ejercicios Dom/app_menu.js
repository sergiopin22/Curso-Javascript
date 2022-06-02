// const $btnMenuTransicion = document.querySelector(".hamburger--vortex");    
// $btnMenuTransicion.addEventListener("click", e=>{
//     $btnMenuTransicion.classList.replace(".hamburger--vortex", ".is-active")
// })

export default function hamburgerMenu(panelBtn, panel, menuLink){
    const d = document;

    d.addEventListener("click", (e) =>{
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active")//esto muestra el menu
            d.querySelector(panelBtn).classList.toggle("is-active")//esto da el efecto al boton
        }
        //la siguientes lineas de codigo hace que al tocar un enlace se cierre el panel (menu) y vuelva a ser una hamburgueza el menu
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
        }
    })
}