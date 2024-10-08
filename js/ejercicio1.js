function suma(){
    let numero = "5";
    let numero2= "6";

    let numerosAleatorios = Math.random() + Math.random();
    console.log(numerosAleatorios);

    let suma = parseInt(numero) + parseInt(numero2);
    console.log(suma);
    let resultadoFixed = (suma + numerosAleatorios).toFixed(2);
    console.log(resultadoFixed);

}
suma();

