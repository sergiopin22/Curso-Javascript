//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

    //console.log(Math.pow(5, 2)); 
    
        // let arr = [ 5, 4, 8, 6];
        
        //console.log(arr[0]);
        
        const elevarAlCuadrado = (array_dato = undefined) => {
            
            if(array_dato === undefined) return console.warn(`Nos ha ingresado el Array a evaluar`);
            if(!(array_dato instanceof Array)) return console.error(`Tienes que ingresar un Array no otro tipo de dato`);
            if(array_dato.length === 0) return console.error(`El arreglo esta vacio`)
            //validaciones

            if(array_dato !== undefined){
                let array_final = [];
                array_dato.forEach(function (element){
                    if(typeof element !== "number") return console.error(`este ${element} dato no es un numero por ende no se va a ejecutar el programa correctamente`)
                    array_final.push(Math.pow(element,2));
                });
                console.info(array_final)
            }
            

        //__nota: borrar todo esto y volver a empezar de la mejor forma aveces es mejor tener en blanco el lienzo y buena energia :)
        
        }

        //elevarAlCuadrado([1,4,5]);
        //elevarAlCuadrado([]);
        //elevarAlCuadrado();
        //elevarAlCuadrado(55654);
        //elevarAlCuadrado("askdlfañs");

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

        const devolverArray = (input_array = undefined) =>{
            if(input_array === undefined) return console.warn(`Nos ha ingresado el Array a evaluar`);
            if(!(input_array instanceof Array)) return console.error(`Tienes que ingresar un Array no otro tipo de dato`);
            if(input_array.length === 0) return console.error(`El arreglo esta vacio`)
            //validaciones
            if(input_array !== undefined){
                let  numMayor = 1;
                let  numMenor = 1;
                
                let  output_array = [];
                input_array.forEach(function(element){
                    if(typeof element !== "number") return console.error(`este ${element} dato no es un numero por ende no se va a ejecutar el programa correctamente`)

                    if(element >= numMayor){
                        numMayor = element
                    }
                    else if(element <= numMenor){
                        numMenor = element;
                    }
                });
                    output_array.push(numMayor);
                    output_array.push(numMenor);
                console.log(output_array)
                //console.log(output_array);
            }
        }


        //devolverArray([1, 4, 5, 99,-60])
        //devolverArray([1, 4, 5,"asdfasjd", 99,-60])
        //devolverArray([]);
        //devolverArray();
        //devolverArray("ashkjdfsak");
        //devolverArray(5465465);
        
        
        // 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
        
        const devolverObjeto = (input_array = undefined ) =>{
            if(input_array === undefined) return console.warn(`Nos ha ingresado el Array a evaluar`);
            if(!(input_array instanceof Array)) return console.error(`Tienes que ingresar un Array no otro tipo de dato`);
            if(input_array.length === 0) return console.error(`El arreglo esta vacio`)
            //validaciones

            if(input_array !== undefined){
                let par = undefined;
                let impar = undefined;
                const numerosParesImpares = {
                    Pares: [],
                    Impares: []
                };
                input_array.forEach(function(element){
                    if(typeof element !== "number") return console.error(`este ${element} dato no es un numero por ende no se va a ejecutar el programa correctamente`)
                    

                    else if(element % 2 === 0){
                        par = element;
                        numerosParesImpares.Pares.push(par);
                    }
                    
                    else if (element % 2 !== 0){
                        impar = element;
                        numerosParesImpares.Impares.push(impar);
                    }
                    
                });
                
                console.log(numerosParesImpares);
            }

        }

        //devolverObjeto([1,2,3,4,5,6,7,8,9,0]);
        //devolverObjeto();
        //devolverObjeto(5456);
        //devolverObjeto([1,2,3,4,5,6,7,"askjl"]);
        //devolverObjeto([1,2,3,4,5,6,7,"askjl"]);


        //**OBSERVACIONES
        //___revisar ESTOS METODOS  Mathmin(), Mathmax() son muy utiles
        //___VALIDAR LOS ELEMENTOS DEL ARRAY, QUE SEAN NUMEROS, HACER UNA VALIDACION DE CADA ITERACION
        //___UTILIZAR EL FOR OF Y EL FOR IN MUY ESENCIAL 
        //___REVISAR EL METODO FILTER() MUY IMPORTANTE TAMBIEN OTRO METODO SERIA REDUCE()
        //___REVISAR EL METODO MAP()