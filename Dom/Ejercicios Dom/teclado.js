const d = document;

export function shortcuts(e){
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`alt:${e.altKey}`);
    console.log(`shift:${e.shiftKey}`);
    console.log(`ctrl:${e.ctrlKey}`);
    console.log(e);

    if(e.key === "a" && e.altKey){
        alert("has activado una alerta con los comandos alt + a")
    }
    if(e.key === "c" && e.altKey){
        confirm("has activado un confirm con los comandos alt + c")
    }
    if(e.key === "p" && e.altKey){
        prompt("has activado un prompt con los comandos alt + p")
    }

}