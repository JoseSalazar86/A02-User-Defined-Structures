let meses = parseInt(prompt("Introduzca el numero del mes seleccionado: "));

if (meses < 1 || meses > 12) {
    alert(" numero erroneo")
} else if(meses === 2){
    alert("febrero tiene 28 dias");
} else if (meses === 4 || meses === 6 || meses === 9 || meses === 11){
    alert("este mes tiene 30 dias");
}else{
    alert("Este mes tiene 31 dias");
}


