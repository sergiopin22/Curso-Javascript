// recipiente = "papel"

// alert(recipiente)

// *Tipos de datos primitivos originales del lenguaje
// *tipos de datos
String = "Cadena de texto";
Number = 19;
Boolean = true;

// *Casos especiales de datos
// *Undefined
//_ Undefined es cuando una variable existe en el programa pero no tiene un valor
// !El undefined .no es un error es un tipo de dato :)
//? ejemplo
// let numero;
// alert(numero);

// *Null
//_ Null es cuando declaramos a una variable que no guarde nada, que va a hacer una variable vacia 
//!Es un vacio que se lo declaramos a la variable intencionalmente
// _con null estamos inicializando la variable
// *ejemplo
// numero = null;

// *NaN
// !NaN es not a number = no es un numero suele pasar cuando intentamos operar datos que no son numeros
//  let numero = 4;
//  let numero2 = "Letras :)";
//  alert(numero - numero2);

// *variables let var y const
// !const tiene que inicializarce cuando se declara 
    // const numero = numero = 52;
    // alert(numero);
    // _var o let se pueden reasignar valor y estar declaradas no mas cosa que no puede hacer const 

    // *ejemplo

    // let variable = "objeto"; 
    // variable = "Toalla"
    // let variablevacia;

// *Prompt()
    // _es una funcion que se ejecuta en el navegador como si fuera input de entrada de datos
    // ?vamos hacer un pequeño ejercicio

    // let nombre = prompt("Decime tu nombre");
    // let saludo = alert("hola que tal " + nombre);

    // *Operadores de asignacion
    // _Asignación de adición = x = x + y; suma
    // let numero1 = 20;
    // numero1 += 5;
    // alert(numero1)
    // _Asignación de resta = x = x-y; resta
    // let numero1 = 20;
    // numero1 -= 5;
    // alert(numero1)
    // _Asignación de multiplicación = x = x*y; multiplicacion
    // let numero1 = 20;
    // numero1 *= 5;
    // alert(numero1)
    //  _Asignación de división = x = x/y; division
    // let numero1 = 20;
    // numero1 /= 5;
    // alert(numero1)
    // _Asignación de residuo o resto = x = x%y;
    //    let numero1 = 20;
    //    numero1 %= 5;
    //    alert(numero1)
    // _Asignación de exponenciación = x = x**y; exponenciación
    // let numero1 = 10 
    // numero1 = numero1**3;
    // alert(numero1);

    // *Operadores Aritmeticos
    // _Los operadores Aritméticos toman valores
    // _numéricos (ya sean literales o variables) como sus
    // _operandos y retornan un valor numérico único.

    // _Operador Residuo
    // let numero = 10;
    // let numero2 = 6;
    // let resultado = numero % numero2;
    // alert(resultado)

    // _Operador de incremento y decremento
    //  let numero = 10;
    //  let numero2 = 6;
     // ? se incrementa o decrementa antes de mostrarlo y se hace de esta forma mira abajo
    //  numero++ //incremento de 1
    //  numero-- //incremento de 2
    //  let resultado = numero;
    //  alert(resultado)

    // _Operador de suma y resta 
    // let numero = 20;
    // let numero2 = 30;
    // let resultado = numero + numero2; //suma 
    // let resultado = numero - numero2; //resta
    // alert(resultado)

    // _Operacion de negacion unaria
    // esto convierte un numero a negativo 
    // let numero = 4;
    // let resultado = -numero; // ?resultado es lo contrario de numero osea negativo
    // alert(resultado) 

    // _Operador de division
    // let numero = 20;
    // let numero2 = 20;
    // let resultado = numero / numero2;
    // alert(resultado);

    // _Operador de Exponencialización o potencia
    // let numero = 2;
    // let exponente = 3;
    // let resultado = numero**exponente;
    // alert(resultado);


    // * QUE ES LA CONCATENACIÓN Y FORMAS DE HACERLO
    // _la concatenación es la union de string o datos de variables para poder mostrar mensajes de una mejor forma al usuario final
    
    // let bienvenida = prompt("Bienvenido, Como te llamas ?");
    // let saludo = prompt( bienvenida + " Como estas ?");

    // _forzar un string para concatenacion
    
    // let numero = 3;
    // let numero2 = 5;
    // let salida = "" + numero + numero2; // ?este string convierte todo a cadena de texto y hace que la concatenacion no opere sino que juente los datos
    // let salida = numero + numero2; // ?aca esto si se opera ya que son numero mas no cadenas de texto o string
    // alert(salida);
  
    //_metodo Concat ()
    // ?para utilizar este metodo tiene que haber si o si un string ya que este metodo es para cadenas de texto
    // let numero = "3";
    // let numero2 = 8;
    // let concatenacion = numero.concat(numero2); 
    // alert(concatenacion);

    // _Concatenar con backticks y la variable entre ${}

    let frase = "Sergio Pinzón"
    //let frase_final = "Yo " + frase + " me gusta programar"// ?esta es una forma pero no es la mas comoda y rapida 
    
    // ?asi se concatena con backticks y ${} es mas rapido y comodo
    //let frase_final = `Yo ${frase} me gusta programar`; //?es una manera mas viable y optima de hacer
    //alert(frase_final);

    // _Backtickes, Escape de comillas simples y comillas dobles
    nombre = `soy un string 'sergio'`; //?esto es un escape de comillas simples
    nombre = `soy un string "sergio"`; // ?esto es un escape de comillas dobles
    // ?los escapes son cuando quieres utilizar comillas simples o dobles y tienes que utilizar backticks para que no se cierre el string 
    // _de igual forma tambien hacemos  los escapes para los backticks alternando las comillas dobles o simples 
    // let cadena = "soy un texto `con backticks`"
    // alert(cadena);

    // *Operadores (INTERMEDIO)
    // ?Operadores de comparación
    // **los operadores de comparacion, comparan dos expresiones y devuelven un valor boolean que representa la relacion de sus valores

    // _operador de igualdad
    
    //  let numero1 = 8;
    //  let numero2 = 8;
    //  document.write(numero1 == numero2);
    // ?este operador no distigue de los tipos de datos, solamente pregunta si el valor es el mismo ejemplo 
     
    // let numero1 = "20";
    // let numero2 = 20;
    // document.write(numero1 == numero2);

    // _operador de inegualdad

    //  let numero1 = 8;
    //  let numero2 = 5;
    //  document.write(numero1 != numero2);

    // _operador de identidad
    // con este operador preguntamos si es estrictamente igual la comparacion
    // ?Este operador distingue de los tipos de datos, no solo distingue por igualdad, sino tambien porque lo que se compara tiene que ser totalmente identicos
    
    // let numero1 = "23";
    // let texto = 23;
    // document.write(numero1 === texto);
    
    // _operador no identico
    // ?con este operador preguntamos si no es estrictamente igual la comparación

    // let numero1 = "23";
    // let texto = 23;
    // document.write(numero1 !== texto);

    // _operador mayor que o menor que  
    // let numero1 = 20;
    // let numero2 = 10;
    //document.write(numero1 < numero2);//es falso
    //document.write(numero1 > numero2);//es verdadero

    // _operador mayor o igual que y menor o igual  que
    // let numero1 = 50;
    // let numero2 = 50;
    // document.write(numero1 >= numero2);
    
    // *Operadores logicos
    // ?Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion, su resultado es booleano, y sus operandos son valores logicos o asimilables a ellos

    let valor1 = true;
    let valor2 = true;

    // let resultado = valor1 &&  valor2;
    // let resultado = valor1 ||  valor2;
    // let resultado = !valor;

    // _operador AND (&&) las dos tienen que ser true si o si 
    // let num1 = 12;
    // let num2 = 22;

    // let afirmacion1 = num1 < num2;//verdadero
    // let afirmacion2 = num1 > num2;//falso

    // document.write(afirmacion1 && afirmacion2);
    
    // _operador OR (||) alguna de las dos tiene que cumplirse o dar true
    // let num1 = 12;
    // let num2 = 22;

    // let afirmacion1 = num1 < num2;//verdadero
    // let afirmacion2 = num1 > num2;//falso

    // document.write(afirmacion1 || afirmacion2);//verdadero
    
    // _operador NOT (!) este nos convierte lo contrario del valor booleano que nos haya retornado o dado como resultado
    
    // let num1 = 12;
    // let num2 = 22;
    
    // let afirmacion1 = num1 < num2;//verdadero
    // let afirmacion2 = num1 == num2;//falso
    
    // document.write(!afirmacion2);//verdadero
    
    // _Practica de operadores logicos
     
    // let num1 = 12;
    // let num2 = 24;
    // let num3 = 25;
    // let num4 = 92;
    // let num5 = 91;

    // let operacion_combinada = (num5 > num2 && num4 < num3) || (!(num1 === num2 ) || num3 != num3) // true 
    // document.write(operacion_combinada);

    // *Que es el camel case 
    // ?CamelCase es un estilo de escritura que se aplica a frases o palabras compuestas. El nombre se debe a que la primera palabra la letra inicial va en mayusculas y la segunda palabra o siguientes en su primera van en mayuscula ejemplo
    // _se usa especialmente para todo variables, funciones , metodos etc.. 

    // let holaComoEstas = camelCase;
    // let nombreVariablesAsi = camelCase;

    // *Condicionales y sus usos
    // ?un condicional es una sentencia que valida datos de entrada para ejecutar un algoritmo propio del  programa si el condicional mismo llega a hacer verdadero

    // let respuesta = prompt("Que tal tu dia ?");


    // if(respuesta == "bueno"){ //esto es una condicion 
    //   document.write("a que bien crack vamos a aprender");
    // }
    
    // else if (respuesta == "malo"){// sino se cumple la anterior else if hace que se ejecute esta 
    //     document.write("dale bro no importa te va a ir bien");
    // }

    // else {// esta la ultima salida 
    //     alert("tu dia no estuvo ni mal ni bien :)")
    // }


    // *Capitulo 1 Terminado
    // _HISTORIA DE COFLA

    // A) 3 chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un problema: los precios no
    // estan al lado de cada estante con su respectivo helado.
    // Ellos quieren comprar el helado mas caro que puedan con la plata que tienen, así que... veamos como podemos ayudarlos.
    // _Roberto tiene $1.5 USD
    // _Pedro tiene $1.7 USD
    // _Cofla tiene $3.0 USD

    // Los precios de helados son los siguientes:
    // Palito de helado de agua: $0.6 USD
    // Palito de helado de crema: $1 USD
    // Bombón helado marca heladix: $1.6 USD
    // Bombón helado marca heladovich: $ 1.7 USD
    // Bombón helado marca helardo: $1.8 USD
    // Potecito de helado con confites: $2.9 USD
    // Pote de 1/4 KG -> $2.9 USD

    // Crear soluciones 
    // ?Pedirles que ingresen el dinero que tienen y mostrar el helado mas caro que puedan comprar
    // ?si hay 2 o mas con el mismo precio, mostrar ambos
    // ?cofla quiere saber cuanto es el vuelto 

    // _aca estan el monto de los 3 chicos
    let dineroCofla = prompt ("Cuanto dinero tienes Cofla ?")
    let dineroRoberto = prompt ("Cuanto dinero tienes Roberto ?")
    let dineroPedro = prompt ("Cuanto dinero tienes Pedro ?")
    
    // _variables para los vueltos
    // vueltosCofla = 0;
    // vueltosRoberto = 0;
    // vueltosPedro = 0;
    

    // _lista de productos con su respectivo valor
     palitoHeladoAgua = 0.6;
     palitoHeladoCrema = 1;
     bombonHeladoHeladix = 1.6;
     bombonHeladoHeladovich = 1.7;
     bombonHeladoHelardo = 1.8;
     potecitoHeladoConfites = 2.9;
     pote_fraccionado = 2.9;

    // _mostramos el helado mas caro que puedan comprar cada uno 
    // ?Cofla

   { 
       if (dineroCofla >= palitoHeladoAgua && dineroCofla < palitoHeladoCrema) {
       alert("Oye cofla comprate el palito de helado de agua")
    }
    
    else if (dineroCofla >= palitoHeladoCrema && dineroCofla < bombonHeladoHeladix){
        alert("Oye cofla comprate el palito de helado de crema")
    }
    
    else if (dineroCofla >= bombonHeladoHeladix && dineroCofla < bombonHeladoHeladovich){
        alert("Oye cofla comprate el bombon de helado heladix")
    }
    
    else if (dineroCofla >= bombonHeladoHeladovich && dineroCofla < bombonHeladoHelardo){
        alert("Oye cofla comprate el bombon de helado heladovich")

    }
    else if (dineroCofla >= bombonHeladoHelardo && dineroCofla < potecitoHeladoConfites){
        alert("Oye cofla comprate el bombon de helado helardo");

    }
    // ?aca mostramos 2 productos abajo con el mismo precio 
    else if (dineroCofla >= potecitoHeladoConfites && dineroCofla >= pote_fraccionado){
        alert("Oye cofla comprate el potecito de helado con confites o pote fraccionado ya que tiene el mismo coste :)");
    }
}

    //_Desicion de compra de cofla y vueltos de cofla
     let desicionCofla = prompt("escoje la opcion uno con el numero 1 o la otra opcion con el numero 2 cofla");
     {
    if (desicionCofla == "1"){
        vueltos_Cofla = dineroCofla - potecitoHeladoConfites;
        alert("cofla tu eleccion es el potecito de helado con confites");
        alert("y tus vueltas son : $" + parseFloat(vueltos_Cofla) + " centavos de dolar");
    } 
    else if (desicionCofla == "2"){
        vueltos_Cofla = dineroCofla - pote_fraccionado;
        alert("cofla tu eleccion es el pote fraccionado a un 1/4 de un kilo");
        alert("y tus vueltas son : $" + parseFloat(vueltos_Cofla) + " centavos de dolar");
    }
  }
//  ************************************************************ Roberto
// _mostramos el helado mas caro que puedan comprar cada uno 
    // ?Roberto
 {
    if (dineroRoberto >= palitoHeladoAgua && dineroRoberto < palitoHeladoCrema) {
        alert("Oye Roberto comprate el palito de helado de agua")
     }
     
     else if (dineroRoberto >= palitoHeladoCrema && dineroRoberto < bombonHeladoHeladix){
         alert("Oye Roberto comprate el palito de helado de crema")
     }
     
     else if (dineroRoberto >= bombonHeladoHeladix && dineroRoberto < bombonHeladoHeladovich){
         alert("Oye Roberto comprate el bombon de helado heladix")
     }
     
     else if (dineroRoberto >= bombonHeladoHeladovich && dineroRoberto < bombonHeladoHelardo){
         alert("Oye Roberto comprate el bombon de helado heladovich")
 
     }
     else if (dineroRoberto >= bombonHeladoHelardo && dineroRoberto < potecitoHeladoConfites){
         alert("Oye Roberto comprate el bombon de helado helardo");
 
     }
     // ?aca mostramos 2 productos abajo con el mismo precio 
     else if (dineroRoberto >= potecitoHeladoConfites && dineroRoberto >= pote_fraccionado){
         alert("Oye Roberto comprate el potecito de helado con confites o pote fraccionado ya que tiene el mismo coste :)");
     }
    }
    
     //_Desicion de compra de Roberto y vueltos de Roberto
      let vueltos_Roberto = dineroRoberto - palitoHeladoCrema;
      alert("Roberto el helado mas caro para tu presupuesto es el palito de helado de crema")
      alert("y tus vueltas son : $" + vueltos_Roberto + " centavos de dolar");
    
     
    // *****************************************************Pedro
    // _mostramos el helado mas caro que puedan comprar cada uno 
    // ?Pedro
 {
    if (dineroPedro >= palitoHeladoAgua && dineroPedro < palitoHeladoCrema) {
        alert("Oye Pedro comprate el palito de helado de agua")
     }
     
     else if (dineroPedro >= palitoHeladoCrema && dineroPedro < bombonHeladoHeladix){
         alert("Oye Roberto comprate el palito de helado de crema")
     }
     
     else if (dineroPedro >= bombonHeladoHeladix && dineroPedro < bombonHeladoHeladovich){
         alert("Oye Pedro comprate el bombon de helado heladix")
     }
     
     else if (dineroPedro >= bombonHeladoHeladovich && dineroPedro < bombonHeladoHelardo){
         alert("Oye Pedro comprate el bombon de helado heladovich")
 
     }
     else if (dineroPedro >= bombonHeladoHelardo && dineroPedro < potecitoHeladoConfites){
         alert("Oye Roberto comprate el bombon de helado helardo");
 
     }
     // ?aca mostramos 2 productos abajo con el mismo precio 
     else if (dineroPedro >= potecitoHeladoConfites && dineroPedro >= pote_fraccionado){
         alert("Oye Pedro comprate el potecito de helado con confites o pote fraccionado ya que tiene el mismo coste :)");
     }
    }
    
 
     //_Desicion de compra de Pedro y vueltos de Pedro
     let vueltos_Pedro = dineroPedro - bombonHeladoHeladovich;
      alert("Pedro el helado mas caro para tu presupuesto es el bombon de helado heladovich")
      alert("y tus vueltas son : $" + vueltos_Pedro + " centavos de dolar");
    

    //   a otra entidad la venta de cartera - LA VENTA DE CARTERA SE LE HIZO A ELLOS
    //   cobinoc ES UNA COMPAÑIA Y NUMERO DE TEL : 342 0011
    //   TEL :4824411

   
