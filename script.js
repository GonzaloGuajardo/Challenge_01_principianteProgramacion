function encodefuncion(){
    let str = document.getElementById("input-text").value;
    let acentos = /[ÁÉÍÓÚÑáéíóúñ]/
    if (acentos.test(str)){
        alert("El mensaje no puede contener acentos");
    } else {
        let str1 = str.replace(/e/g,"enter");
        let str2 = str1.replace(/i/g,"imes");
        let str3 = str2.replace(/a/g,"ai");
        let str4 = str3.replace(/o/g,"ober");
        let str5 = str4.replace(/u/g,"ufat");
        document.getElementById("msg-out").innerHTML = str5;
        document.getElementById("copiar").style.display = "block";
        document.getElementById("nomensaje-container").style.display = "none";
    }
}

function decoderfuncion(){
    let str = document.getElementById("input-text").value;
    let acentos = /[ÁÉÍÓÚÑáéíóúñ]/
    if (acentos.test(str)){
        alert("El mensaje no puede contener acentos");
    } 
    else {
        let str1 = str.replace(/ufat/g,"u");
        let str2 = str1.replace(/ober/g,"o");
        let str3 = str2.replace(/ai/g,"a");
        let str4 = str3.replace(/imes/g,"i");
        let str5 = str4.replace(/enter/g,"e");
        document.getElementById("msg-out").innerHTML = str5;
        document.getElementById("copiar").style.display = "block";
        document.getElementById("nomensaje-container").style.display = "none";
    }
}

function copiar(){
    let copyText = document.getElementById("msg-out").textContent;
    navigator.clipboard.writeText(copyText);
}

function minuscula(str){
    str.value= str.value.toLowerCase();
} 