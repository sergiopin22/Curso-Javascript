const d = document;

export default function darkMode(btn,modeDark){
    
    const $btnDark = d.querySelector(btn);
    const $activeModeDark = d.querySelector(modeDark);
    const moon = `🌙`
    const sun = `☀️`
    d.addEventListener("click", e =>{
        if(e.target.matches(btn)){
            if($btnDark.textContent === moon){
                $activeModeDark.classList.add("modeDark")
                $btnDark.textContent = sun;    
            }
            else{
                $btnDark.textContent = moon;
                $activeModeDark.classList.remove("modeDark")
            }
        }
        
    })

}