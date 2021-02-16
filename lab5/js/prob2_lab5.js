
function validarPassword(pass){
    if (pass.length < 8) {
        return ("La longitud minima es de 8 caracteres.");
    }
    /*
    let countMayus = 0;
    let countMinus = 0;
    let countNumber = 0;
    let countSpecial = 0;
    
    for (let i=0; i < pass.length; i++) {
        
    }
    */
    

    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (strongRegex.test(pass)){
        return ("Esta contraseña es fuerte");
    }
    else {
        return ("La contraseña es válida, pero débil.");
    }
    
    return " ";
}


let password = document.getElementById("password");
let salida = document.getElementById("output");

password.onkeyup = () => {
    let valor_password = password.value;
    salida.innerHTML = validarPassword(valor_password);
}
