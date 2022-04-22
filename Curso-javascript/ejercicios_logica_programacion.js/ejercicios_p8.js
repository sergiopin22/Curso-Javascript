// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.


const ordenarElementos = (input_array) =>{
            if(input_array === undefined) return console.warn(`Nos ha ingresado el Array a evaluar`);
            if(!(input_array instanceof Array)) return console.error(`Tienes que ingresar un Array no otro tipo de dato`);
            if(input_array.length === 0) return console.error(`El arreglo esta vacio`)
            //validaciones

            if(input_array !== undefined){
                for(let num of input_array){
                    if(typeof num !== "number")return console.error(`el valor ${num} no es un numero`)
                }
            }
                // asc: input_array_asc = input_array.sort(function(a,b){return a - b}),
                // desc: input_array_desc = input_array.reverse()
            
}

        ordenarElementos([7,5,7,8,6])


// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const borrarDuplicado = () =>{

        

}






// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5


const sacarPromedio = (input_array) => {
    if(input_array === undefined) return console.warn(`Nos ha ingresado el Array a evaluar`);
    if(!(input_array instanceof Array)) return console.error(`Tienes que ingresar un Array no otro tipo de dato`);
    if(input_array.length === 0) return console.error(`El arreglo esta vacio`)
    //validaciones

    if(input_array !== undefined){
        let resultado = 0;
        let promedio = undefined;
        for(num of input_array){
            if(typeof num !== "number") return console.error(`el valor ${num} no es un numero`)
            resultado = resultado + num;
        }
        promedio = (resultado / input_array.length);
        return console.info(`el promedio de el array [${input_array}] es ${promedio}`);
    }

}

//sacarPromedio([9,8,7,6,5,4,3,2,1,0])
//sacarPromedio([9,8,7,6,5,4,3,2,1,0,true])
//sacarPromedio([])
//sacarPromedio(["dasds"])
//sacarPromedio(46645)



// __SOLUCION DE JON MIRCHA


const ordenarArreglo = (arr = undefined) =>{
    if(arr === undefined) return console.warn(`no ingresaste un arreglo de numeros`);
    if(!(arr instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`)
    if(arr.length === 0) return console.error(`el arreglo esta vacio`)
    // validaciones

    for(let num of arr){
        if(typeof num !== "number") return console.error(`el valor "${num}" ingresado, No es un numero`)
    }

    return console.info({
        arr,
        asc:arr.map(el => el).sort(),
        desc:arr.map(el => el).sort().reverse()
    })
}

//ordenarArreglo([7, 5,7,8,6])
//ordenarArreglo([7, 5,7,true,6])
//ordenarArreglo([])
//ordenarArreglo()

const quitarDuplicado = (arr = undefined) =>{
    if(arr === undefined) return console.warn(`no ingresaste un arreglo de numeros`);
    if(!(arr instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`)
    if(arr.length === 0) return console.error(`el arreglo esta vacio`)
    if(arr.length === 1) return console.error(`el arreglo debe tener al menos 2 elementos`)
    // Validaciones
    // return console.info({
    //     original: arr,
    //     sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
    // })
    return console.info({
        original: arr,
        sinDuplicados:[...new Set(arr)]
    })
}

//quitarDuplicado(["x", "x", 10, 2, 10, "10", true])
//quitarDuplicado(["x"])
//quitarDuplicado([])
//quitarDuplicado()


const promedio = (arr = undefined) =>{
    if(arr === undefined) return console.warn(`no ingresaste un arreglo de numeros`);
    if(!(arr instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`)
    if(arr.length === 0) return console.error(`el arreglo esta vacio`)
    // validaciones

    for(let num of arr){
        if(typeof num !== "number") return console.error(`el valor "${num}" ingresado, No es un numero`)
    }

    return console.info(
        arr.reduce((total,num,index,arr) => {
            total += num;
            if(index === arr.length - 1){
                return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`
            }
            else{
                return total;
            }
        })
    )

}

promedio([9,8,7,6,5,4,3,2,1,0]);