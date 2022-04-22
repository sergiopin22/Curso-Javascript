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