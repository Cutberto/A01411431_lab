function actualizarCarrito(cantMario, cantPlantas, cantClub){
    let temptxt = "";
    let salida = document.getElementById("output");
    let calcPrecio = 0;
    
    if (cantMario > 4) {
        window.alert("Ya alcanzaste el máximo de elementos mario");
        return 0;
    }
    else if (cantMario > 0){
        temptxt += "<li> Mario Kart: " + cantMario + " en el carrito </li>";
        calcPrecio = 1;
    }
    if (cantPlantas > 4) {
        window.alert("Ya alcanzaste el máximo de elementos");
        return 0;
    }
    else if (cantPlantas > 0){
        temptxt += "<li> Plantas vs Zombies: " + cantPlantas  + " en el carrito </li>";
        calcPrecio=1;
    }
    if (cantClub > 4) {
        window.alert("Ya alcanzaste el máximo de elementos");
        return 0;
    }
    else if (cantClub > 0){
        temptxt += "<li> Club pinguino: " + cantClub + " en el carrito </li>";
        calcPrecio=1;
    }
        
    
    if (calcPrecio == 1){
        var subtotal = (parseInt(cantMario)*200);
        subtotal += parseInt(cantPlantas)*100;
        subtotal += parseInt(cantClub)*300;
        var iva = parseFloat(subtotal) * 0.16;
        var total = subtotal + iva;
        temptxt+= " <hr><h2>Subtotal: </h2>  $"+subtotal;
        temptxt+= " <h2>iva: </h2> $"+iva;
        temptxt+= " <h2>Total: </h2>  $"+total;
        
        
    }
    
    salida.innerHTML = temptxt; 
}

var btnMario = document.getElementById("btnMario");
var btnPlantas = document.getElementById("btnPlantas");
var btnClub = document.getElementById("btnClub");

var cantMario = 0;
var cantPlantas = 0;
var cantClub = 0;
var tmp =0;
btnMario.onclick=()=> {
    if ( cantMario < 3 ){
        tmp= parseInt(window.prompt("¿Cuántos quieres agregar al carrito? El máximo es 3"));
        
        if (tmp <= 3) {
            cantMario+=tmp;
            actualizarCarrito(cantMario, cantPlantas, cantClub);
            }
        else {
            window.alert("Si agregas " +tmp + " elementos, excedes el límite de productos :( ");
        }
        }
    else {
        window.alert("Ya alcanzaste el limite de Mario Kart");
    }
}

btnPlantas.onclick=()=> {
    if ( cantPlantas < 3 ){
            tmp= parseInt(window.prompt("¿Cuántos quieres agregar al carrito? El máximo es 3"));
        
        if (tmp <= 3) {
            cantPlantas+=tmp;
            actualizarCarrito(cantMario, cantPlantas, cantClub);   
            }
        else {
            window.alert("Si agregas " +tmp + " elementos, excedes el límite de productos :( ");
        }
    }
    else {
        window.alert("Ya alcanzaste el limite de Plantas vs zombies");
    }
}

btnClub.onclick=()=> {
    if ( cantClub < 3 ){
            tmp= parseInt(window.prompt("¿Cuántos quieres agregar al carrito? El máximo es 3"));
        
        if (tmp <= 3) {
            cantClub+=tmp;
            actualizarCarrito(cantMario, cantPlantas, cantClub);
            }
        else {
            window.alert("Si agregas " +tmp + " elementos, excedes el límite de productos :( ");
        }    
    }
    else {
        window.alert("Ya alcanzaste el limite de Club Penguin");
    }
}
