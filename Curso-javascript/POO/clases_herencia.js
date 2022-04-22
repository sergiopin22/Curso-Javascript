
// *¨******************CLASES Y HERENCIA EN JAVASCRIPT  TEMA IMPORTANTE

// EMASCRIPT APARTIR DEL AÑO 2015 NOSOTROS YA EN JS PODEMOS ESCRIBIR CLASES
// JS ESTA BASADO EN PROTOTIPOS PERO CON ESTO DE LAS CLASES VA A HACER MUCHO MAS FACIL APLICAR POO YA EL TEMA DE LOS PROTOTIPOS NO NOS VA A DAR DOLORES DE CABEZA YA QUE JS SE ENCARGARA DE ESTAS CLASES COMPILARLAS A PROTOTIPOS Y AHORRARNOS ESAS DOLIDAS DE CABEZA

// !LAS CLASES NO RECIBEN PARAMETROS OJO
// _PARA RECIBIR PARAMETROS CUANDO USAS CLASES PARA ESO HAY UN METODO ESPECIAL QUE SE LLAMA CONSTRUCTOR
//_LOS METODOS DE UNA CLASE VAN COMO LO SOLEMOS HACER EJEMPLO: NOMBRE_METODO(){}
// LOS METODOS SI PUEDEN RECIBIR PARAMETROS EN CASO DE NECESITARLOS 
//CON LAS CLASES ESTAS DIRECTAMENTE AL METER LOS METODOS,JAVASCRIPT SE ENCARGA DE DIRECCIONAR LOS METODOS AL PROTOTIPO HACIENDO MAS OPTIMIZADO EL PROGRAMA Y NO TENEMOS QUE HACERLO NOSOTROS 


class Animal{
    constructor(nombre,genero){//metodo especial para los parametros
    this.nombre = nombre;
    this.genero = genero;
    }

    sonar(){
        console.log("Hago sonidos porque estoy vivo");
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

//_extends nos permite decir de que clase vamos a heredar atributos y metodos
class Perro extends Animal{
    constructor(nombre,genero,tamanio){
    //con el metodo super() se manda a llamar el constructor
    //de la clase padre
    super(nombre,genero)//esto son los parametros que vamos a heredar 
    this.tamanio = tamanio;
    this.raza = null;
    // this.raza = prompt("que raza es tu perro");

    }
    // SOBRESCRIBIR METODOS EN CLASE HIJO
    sonar(){
        console.log("soy un perro y mi sonido es un ladrido");
    }
    ladrar(){
        console.log("wow wow");
    }

    //UN METODO ESTATICO SE PUEDE EJECUTAR SIN NECESIDAD DE INSTANCIAR LA CLASE
    static queEres(){//static palabra reservada para crear un metodo estatico 
        console.log("los perros somos animales mamiferos que pertenecemos a la familia de los caninos y somos considerados los mejores amigos del hombre");
    }

    //los setters y getters son metodos especiales que nos permiten establecer y obtener valores de nuestra clase

    get getRaza(){//este metodo nos va a permitir obtener el valor 
        //generalmente el metodo get retorna como tal el valor de la propiedad en cuestion 
       return this.raza;

    }
    
    set setRaza(raza){//este metodo set nos va a permitir restablecer un valor 
        this.raza = raza;
    }

}

Perro.queEres();


const mora = new Animal("mora","hembra");//instanciamiento
const scooby = new Perro("scooby","macho","Gigante");//instanciamiento20
console.log(mora);
console.log(scooby);

mora.sonar();
scooby.sonar();//aca aparece la sobrescritura porque esto esta instanciado en base a la clase perro 
//mora.ladrar();//!nos lanzaria error porque esa funcion no esta en la clase animal



//?scooby.getRaza(); //_esto nos  mandaria error porque js al ver que ese metodo es una funcion get o set no lo toma como una funcion si no como una propiedad y este caso hace chistoso a javascript entonces para ejecutar el metodo get y poder ver su valor porque queremos ejecutar get omitimos esos parentesis y lo colocamos en un console como si fuera un atributo o propiedad de un objeto
console.log(scooby.getRaza);//asi se hace correctamente
scooby.getRaza = "Pincher";

console.log(console);

const obj = {a: "one", b:"two", a:"three"};
console.log(obj);