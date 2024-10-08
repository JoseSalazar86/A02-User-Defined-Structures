function filtrarYtransformar(){
    let arrayNumero = [3,10,5,6,16,9,19,20,33,4];

    let filtrarImpares = arrayNumero.filter((acumulador) => {
        return acumulador % 2 !== 0;
    });
    console.log(filtrarImpares);

    let resultado = filtrarImpares.map((acumulador) => {
        return acumulador * 2;
    })
    console.log(resultado);
}

filtrarYtransformar();