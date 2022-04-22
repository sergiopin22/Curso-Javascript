// **QUE ES POO : ES UN PARADIGMA DE PROGRAMACION ES DECIR UN MODELO O  ESTILO DE PROGRAMACION QUE NOS DICE COMO TRABAJAR CON EL CODIGO PARA QUE EL PROGRAMA SEA MAS ORGANIZADO Y MUCHO MAS OPTIMO A LA HORA DE HACER NUEVAS FUNCIONALIDADES 

// _DATOS: JS EN POO EN DISTINTOS A OTROS LENGUAJES COMO C O JAVA QUE FUNCIONAN CON CLASES.
// _DATOS: JS ES UN LENGUAJE ORIENTADO OBJETOS PERO BASADOS EN PROTOTIPOS NO EN CLASES.


// ?POO CONCEPTOS 

// _CLASES: ES UN MODELO A SEGUIR PARA DE A IR BASARNOS Y GENERAR INSTANCIAS.
// _OBJETOS:UN OBJETO ES UNA INSTANCIA DE UNA CLASE EN PALABRAS MENOS ES UNA COPIA DE ESE MODELO (CLASE).
// _ATRIBUTOS: ES UNA CARACTERISTICAS O PROPIEDADES DE UN OBJETO (VARIABLES).
// _METODOS: SON LAS ACCIONES QUE UN OBJETO PUEDE REALIZAR (FUNCIONES).
// _INSTANCIA : Se llama instancia a todo objeto que derive de algún otro.
// _PROTOTIPO: ES UN MECANISMO POR EL CUAL UN OBJETO PUEDE HEREDAR ATRIBUTOS Y METODOS DE UN OBJETO PADRE

// !CASO INICIAL

// const animal = {
//     nombre: "Snoopy",
//     sonar(){
//         console.log("hago sonidos porque estoy vivo");
//     }
// }

// _para yo generar objeto basado en el objeto animal tengo que hacer copy paste y esto no es nada optimo para esto estan las clases que podemos generar varios objetos acuerdensen que las clases son un modelo a seguir 

// const animal2 = {
//     nombre: "lolabunny",
//     sonar(){
//         console.log("hago sonidos porque estoy vivo");
//     }
// }

// console.log(animal);
// console.log(animal2);

// !CASO FINAL

// ?FUNCION  CONSTRUCTORA : ES UNA FUNCION QUE SE CONSTRUYE UNA SOLA VEZ Y APARTIR DE ESTA SE GENERARAN NUEVAS INSTANCIAS, NUEVOS OBJETOS QUE SEAN DE ESTE TIPO DE FUNCION CONSTRUCTORA

// _LAS FUNCIONES CONSTRUCTORAS: EXPLICITAMENTE TIENE QUE TENER LA PALABRA RESERVADA this.

function Animal (nombre,genero){
    // ATRIBUTOS
    this.nombre = nombre;
    this.genero = genero;

}

// METODOS
// METODOS AGREGADOS AL PROTOTYPO DE LA FUNCION CONSTRUCTORA 
Animal.prototype.sonar = function (){
     console.log(`hago sonido porque estoy vivo ${this.nombre}`);
}
Animal.prototype.saludar = function (){
    console.log(`hola me llamo ${this.nombre}`);
}

// HERENCIA PROTOTIPICA
// _VAMOS A GENERAR PARA DAR EJEMPLO A LA HERENCIA PROTOTIPICA LA CREACION DE UNA FUNCION CONSTRUCTORA PERRO QUE HEREDARA LAS CARACTERISTICAS DE LA FUNCION ANIMAL Y NO CONTENTOS CON ESO QUEREMOS AGREGARLE UNA PROPIEDAD MAS A PERRO DE LAS QUE POR DEFECTO VA A HEREDAR PERRO DE ANIMAL. 

// _CUANDO ESTAMOS TRABAJANDO HERENCIA CON POO HAY METODO LLAMADO `SUPER()` QUE MANDA A LLAMAR EL CONSTRUCTOR DEL ELEMENTO PADRE 

function Perro (nombre,genero,tamanio){
    this.super = Animal;//le estamos diciendo que su elemento padre va a hacer animal
    this.super(nombre,genero);//y ahora ejecutamos ese metodo super con los parametros que va a heredar
    this.tamanio = tamanio;
}

// _VAMOS A DECIR QUE PERRO SEA UNA INSTANCIA DE ANIMAL 
Perro.prototype = new Animal();//esta linea esta haciendo la herencia y no hace falta colocar los parametros de animal porque estos ya vienen en la funcion constructora perro 
Perro.prototype.constructor = Perro;//y con esto al igualarlo aqui con el mismo constructor pues ya se va a estar jalando todas las caracteristicas de su prototipo padre que es Animal
//! IMPORTANTE TENER EN CUENTA : AL GENERAR UNA INSTANCIA DE PERRO SE ESTARIA CLONANDO EL METODO SUPER Y SU INVOCACION EN CADA INSTANCIA HACI QUE VAMOS A HACER LO MISMO QUE HICIMOS CON LOS METODOS Y ES APROPIARLOS AL PROTOTIPO DE PERRO Y NO A LA FUNCION CONSTRUCTORA COMO TAL, YA SABES PARA OPTIMIZAR EL RENDIMIENTO Y EL ESPACIO EN MEMORIA 

// _PERRO AL HEREDAR TODO LO DE ANIMAL TAMBIEN PUEDE USAR SUS METODOS, CREAR NUEVOS METODOS Y DE HECHO SOBRESCRIBIRLOS SI ES NECESARIO (SOBRESCRIBIR ES CAMBIARLOS O EDITARLES ALGUNAS COSAS)

// SOBRESCRIBIR EL METODO DEL PROTOTIPO PADRE EN EL HIJO 
Perro.prototype.sonar = function (){//esto es una sobrescritura del metodo padre en el hijo
    console.log("soy un perro y mi sonido es un ladrido")
}

Perro.prototype.ladrar = function (){//esta es una funcion exclusiva del constructor perro
    console.log("wow wow");
}




const snoopy = new Perro("snoopy", "macho", "mediano"); //_new nos va a permitir crear una nueva instancia en si un nuevo objeto basado en la funcion constructora  animal
const lolabunny = new Animal("lolabunny", "hembra");

console.log(snoopy);//_si nos damos cuenta en consola podemos ver que el objeto snoopy esta basado en el constructor animal
console.log(lolabunny);

// VAMOS A EJECUTAR LOS METODOS PARA VER SI FUNCIONAN CORRECTAMENTE

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();
lolabunny.sonar();
lolabunny.saludar();

// FUNCIONAN CORRECTAMENTE



// _LAS FUNCIONES CONSTRUCTORAS TIENEN UNA PROPIEDAD PROTOTYPE QUE APUNTA A UN OBJETO CUYAS PROPIEDADES SON HEREDADAS AUTOMATICAMENTE POR TODOS LOS OBJETOS CREADOS CON ESE CONSTRUCTOR

// _LO CORRECTO AQUI SERIA ASIGNARLE AL PROTOTYPO DE ANIMAL LOS METODOS DE LA FUNCION CONSTRUCTORA Y NO TENERLO DENTRO DE LA FUNCION CONSTRUCTORA, PORQUE CADA QUE YO GENERO UNA INSTANCIA DE ANIMAL SE ESTA DUPLICANDO LOS METODOS Y ESTO NO ES OPTIMO YA QUE GENERA ESPACIO EN MEMORIA, AFECTANDO EL RENDIMIENTO Y POR ESO ES MAS ADECUADO  PEGAR LOS METODOS AL PROTOTIPO ANIMAL


// ?NUEVO TEMA EN JS *************************************************************************************
// **HERENCIA PROTOTIPICA EN JAVASCRIPT 
// ES HEREDAR CARACTERISTICAS DE UN ELEMENTO PADRE A UN ELEMENTO HIJO ESTO SE VE EN OTROS LENGUAJES 
// _EN JAVASCRIPT LA HERENCIA TAMBIEN SE DA DE MANERA DE CADENA PROTOTIPICA

//?Ejercicio de herencia prototipica en js *****

console.log("EJERCICIO DE HERENCIA PROTOTIPICA ")

function Cars (marca, color){//FUNCION CONSTRUCTORA
    this.color = color;
    this.marca = marca;
}

Cars.prototype.arrancar = function (){//metodos asignados al prototipo cars para mejorar el rendimiento 
    console.log(`Estoy arrancando`);
}

Cars.prototype.frenar = function (){
    console.log(`Estoy frenando`);
}


function Camioneta (marca, color, tipo){
    this.super = Cars;
    this.super(marca,color);
    this.tipo = tipo;
}

Camioneta.prototype = new Cars();//camioneta es una instancia de cars
Camioneta.prototype.constructor = Camioneta;
//unica funcion de camioneta
Camioneta.prototype.saltar = function(){
    console.log("salta la camioneta");
}

//SOBRESCRIBIR EL METODO DEL PROTOTIPO PADRE EN EL HIJO 
Camioneta.prototype.arrancar = function (){
    console.log("run run")
}

Camioneta.prototype.escalar = function (){
    console.log("bom bom escalando")
}

//instancias 
const chevrolet = new Cars("chevrolet","rojo");//intancias de cars
const renault = new Camioneta("renault","negro","Familiar");//intancias de cars




console.log(chevrolet);
console.log(renault);

// metodos de cars

chevrolet.arrancar();//estoy arracando
chevrolet.frenar();//estoy frenando
//!chevrolet.saltar();//esto nos bota error porque este metodo es propio del prototipo de camioneta y al esta ejecutando el objeto instanciado car no existe dentro de cars o la funcion constructora cars no dice la consola que este metodo o funcion no existe en la funcion constructora cars



//metodos de Camioneta

//!mientras que Camioneta no solo hereda los atributos de Cars sino tambien los metodos de Cars y con esto hasta podemos personalizar o sobrescribir los metodos del padre en el hijo y se muestre diferente cuando vayamos a ejecutar en consola una instancia adherida a la funcion constructora donde se hizo la sobrescritura

renault.arrancar();//run run// nos aparece diferente porque sobrescribimos la funcion de cars en el hijo (Camioneta)
renault.escalar();//bom bom escalando
renault.saltar();//salta la camioneta
renault.frenar();//metodo de car que estamos heredando en camioneta //Estoy frenando


