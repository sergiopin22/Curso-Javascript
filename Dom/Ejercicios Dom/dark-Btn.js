const d = document;
const ls = localStorage;

export default function darkMode(btn,Dark){
    
    const $btnDark = d.querySelector(btn);
    const $activeModeDark = d.querySelector(Dark);
    const moon = `🌙`
    const sun = `☀️`

    const modeDark = () =>{
        $activeModeDark.classList.add("modeDark")
        $btnDark.textContent = sun;
        ls.setItem("theme","dark")    
    }
    
    const modeLight = () =>{
        $btnDark.textContent = moon;
        ls.setItem("theme","light")    
        $activeModeDark.classList.remove("modeDark")
    }

    d.addEventListener("click", e =>{
        if(e.target.matches(btn)){
            if($btnDark.textContent === moon){
                modeDark();
            }
            else{
                modeLight();
            }
        }
        
    })

    d.addEventListener("DOMContentLoaded", e=>{
        //console.log(ls.getItem("theme"))//le estamos preguntando si existe theme en localstorage = null
        //alert("Hola desde la funcion darktheme")
        if(ls.getItem("theme" === null))ls.setItem("theme","light")//si no existe theme la vamos a crear y le vamos a dar el valor de ligth
        if(ls.getItem("theme") === "light" )modeLight();
        if(ls.getItem("theme") === "dark" )modeDark();

    })

}