const d = document;

let x = 0;
let y = 0;

export function moveBall(e,ball,stage){
    const $ball = d.querySelector(".ball");
    const $stage = d.querySelector(".stage");
    console.log(e.keyCode);
    console.log(e.key)
    const limitsBall = $ball.getBoundingClientRect();//el getboundingClientRect nos proporciona informacion de cordenadas de un elemento u objeto
    const limitsStage = $stage.getBoundingClientRect();

    //console.log(limitsBall)
    //console.log(limitsStage)
    
    // const move = (direction) =>{
        
    // }
    switch (e.keyCode) {
        case 37:
            if(limitsBall.left > limitsStage.left){
                x--
                e.preventDefault();//lo que hace el metodo es quitar todos los comportamientos por defecto que tiene el navegador esto lo colocamos para que no nos moleste el scroll al mover la pelota
            }
            break;
            case 38:
            if(limitsBall.top > limitsStage.top){
                y--;
                e.preventDefault();
            }
            break;
            case 39:
            if(limitsBall.right < limitsStage.right){
                x++;
                e.preventDefault();
            }
            break;
            case 40:
            if(limitsBall.bottom < limitsStage.bottom){
                y++;
                e.preventDefault();
            }
            break;
    
        default:
            break;
        }
        $ball.style.transform = `translate(${x*10}px,${y*10}px)`
}

// !!!!!CABE RECALCAR QUE X EN NEGATIVO ES HACIA LA IZQUIERDA Y X EN POSITIVO ES A LA DERECHA COMO LO VENIAMOS  VIENDO EN EL PLANO CARTESIANO PERO CUANDO HABLAMOS DE Y, ES AL CONTRARIO DE COMO LO APRENDIMOS EN ESTE SENTIDO SE MANEJA LA WEB EN PLANO Y: CUANDO Y ES NEGATIVO ES HACIA ARRIBA Y CUANDO Y ES POSITIVO ES HACIA ABAJO TENERLO MUY EN CUENTA 

export function shortcuts(e){
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(`alt:${e.altKey}`);
    // console.log(`shift:${e.shiftKey}`);
    // console.log(`ctrl:${e.ctrlKey}`);
    // console.log(e);

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

