let matriz = [
    [23,4,56,78,24,56],
    [12,32,34,54,68,10]
];

function matrices(){
    let matrizAplnada = matriz.reduce((acumulador,subArray) => acumulador.concat(subArray),[]);
    let resultado = matrizAplnada.reduce((acumulador, numero) => acumulador + numero, 0);
    console.log(resultado);
}
matrices();