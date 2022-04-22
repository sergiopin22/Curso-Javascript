//_ 27) Programa una clase llamada Pelicula.

//_ */ La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//*    - Todos los datos del objeto son obligatorios.
//*   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//*      7 restantes números.
//*   - Valida que el título no rebase los 100 caracteres.
//*   - Valida que el director no rebase los 50 caracteres.
//*   - Valida que el año de estreno sea un número entero de 4 dígitos.
//*   - Valida que el país o paises sea introducidos en forma de arreglo.
//*    -Valida que los géneros sean introducidos en forma de arreglo.
// *  - Valida que los géneros introducidos esten dentro de los géneros 
//*      aceptados*.
//*   - Crea un método estático que devuelva los géneros aceptados*.
// *  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//  *   decimal de una posición.
// *  - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// _ Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion}){
        this.id = id
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros (){//al tener el metodo static el get se convierte a un atributo
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    static generosAceptados(){//en cambio este si es un metodo estatico porque no tiene el get 
        return console.info(`los generos aceptados son ${Pelicula.listaGeneros.join(",")}`)
    }

    validarCadena(propiedad, valor){
        if(!(valor)) return console.warn(`${propiedad} "${valor} esta vacio"`);
        if(typeof valor !== "string")return console.error(`${propiedad} "${valor} ingresado, No es una cadena de texto"`);
        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`)
        
        return true;
    }

    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
        if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado No es un numero`);
        return true;
    }

        validarArreglo(propiedad, valor) {
            if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
            if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un
            arreglo`);
            if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);
            //validaciones
            for (let cadena of valor) {
            if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es
            una cadena de texto`);
            
        }
        return true;
        }

        // !revisar el metodo validar arreglo para saber si contiene las validaciones correctas a las del video
        //!minuto 35:88

    validarIMDB(id){
        if(this.validarCadena("IMDB id", id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){   
                return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros.`);
            }
        }
    }
    validarTitulo(titulo){
        if(this.validarCadena("Titulo", titulo)){
            this.validarLongitudCadena("Titulo", titulo, 100);
        }
    }
    validarDirector(director){
        if(this.validarCadena("Director", director)){
            this.validarLongitudCadena("Director", director, 50);
        }
    }
    validarEstreno(estreno){
        if(this.validarNumero("Año de Estreno", estreno)){
            if(!(/^([0-9]){4}$/.test(estreno))){
                return console.error(`Año de estreno ${estreno} no es valido debe tener solo 4 caracteres numericos ni mas ni menos`)
            }
        }
    }
    validarPais(pais){
        this.validarArreglo("Pais", pais)
    }
    validarGeneros(generos){
        if(this.validarArreglo("Generos", generos)){
            for (const genero of generos) {
                //console.info(genero, Pelicula.listaGeneros.includes(genero))//_esta linea la comento es como para ver si da true o false con el genero puesto en el array generos
                if(!Pelicula.listaGeneros.includes(genero)){// si es falso lanzara el siguiente mensajes y mostrando los generos aceptados
                    console.log(`Genero(s) incorrectos "${generos.join(",")}"`)
                    Pelicula.generosAceptados();
                }
            }
        }
    }
    validarCalificacion(calificacion){
        if(this.validarNumero("Calificacion", calificacion)){//si esto da true 
            return (calificacion < 0 || calificacion > 10)
            ? console.error(`La Calificacion tiene que estar entre 0 y 10`)
            : this.calificacion = calificacion.toFixed(1); //4.2.toFixed() = '4', lo que estamos haciendo en esta linea es que si la persona me manda un decimal lo pasamos a la unidad correspondiente mas cercana al valor puesto
        }
    }
    fichaTecnica(){
        console.info(`Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.estreno}"\nPais:"${this.pais.join("-")}"\nGeneros:"${this.generos.join(",")}"\nCalificación:"${this.calificacion}"\nIMDB id:"${this.id}"`);
    }
}

    

        
        // const peli = new Pelicula ({
        //     id:"tt1234567",
        //     titulo:"Titulo de la peli",
        //     director: "Director de la peli",
        //     estreno: 2022,
        //     pais:["colombia"],
        //     generos:["Comedy"],
        //     calificacion:4.428 //rendondea a 4.4
        // });

        // peli.fichaTecnica();

        // console.log(peli.titulo)

        const misPelis = [
            {id:"tt1234321",
            titulo:"Titulo de la peli",
            director: "Director de la peli",
            estreno: 2022,
            pais:["colombia"],
            generos:["Comedy"],
            calificacion:4.428 //rendondea a 4.4
        },
        {
            id:"tt1234589",
            titulo:"sin camino a casa",
            director: "Director quien sabra",
            estreno: 2021,
            pais:["EEUU"],
            generos:["Comedy","Adventure","Drama"],
            calificacion:4.5
        },
        {
            id:"tt1234557",
            titulo:"Titulo de la peli",
            director: "Director de la peli",
            estreno: 1982,
            pais:["Mexico"],
            generos:["Comedy","Sport"],
            calificacion:5
        }
        ]

        misPelis.forEach(el => new Pelicula(el).fichaTecnica());//para cada objeto que hace parte del array mis pelis quiero que cree una nueva instancia de la clase Pelicula

