function Modulo(){
    nome = document.getElementById("nome").value
    cognome = document.getElementById("cognome").value
    eta = document.getElementById("eta").value
    indirizzo = document.getElementById("indirizzo").value

    if ((nome == "") || (nome == "undefined")) {
        document.getElementById("errore").innerHTML = "Il campo Nome è obbligatorio.";
        document.getElementById("nome").focus();
        return false;
    }else{
        document.getElementById("errore").innerHTML = "";
    }
    if ((cognome == "") || (cognome == "undefined")) {
        document.getElementById("errore").innerHTML = "Il campo Cognome è obbligatorio.";
        document.getElementById("cognome").focus();
        return false;
    }else{
        document.getElementById("errore").innerHTML = "";
    }
    if ((eta == "") || (eta == "undefined")){
        document.getElementById("errore").innerHTML = "Il campo eta è obbligatorio.";
        document.getElementById("eta").focus();
        return false;
    }else{
        document.getElementById("errore").innerHTML = "";
    }
    if (eta < 1) {
        document.getElementById("errore").innerHTML = "Campo eta non valido";
        document.getElementById("eta").focus();
        return false;
    }else{
        document.getElementById("errore").innerHTML = "";
    }
    if ((indirizzo == "") || (indirizzo == "undefined")) {
        document.getElementById("errore").innerHTML = "Il campo Indirizzo è obbligatorio.";
        document.getElementById("indirizzo").focus();
        return false;
    }else{
        document.getElementById("errore").innerHTML = "";
    }
}