function findParis(numero1, numero2) {
    if( typeof numero1 !== 'number' || typeof numero2 !== 'number' ) {
        console.error("Ambos unmero deben ser numeros.");
        return;
    }

    if( numero1 < 1 || numero1 > 100 || numero2 < 1 || numero2 > 100 ){
        console.error("Los numero deben esta en el rango de 1 y 100.");
        return;
    }
    if (numero1 % 2 !==0){
        numero1 ++;
    }
    // GUARDAMOS LOS VALORES ORIGINALES PARA MOSTRARLOS LUEGO EN EL MENSAJE
    const valorInicialNumero1 = numero1;
    const valorInicialNumero2 = numero2;
    const pares =[];

    while (numero1 < numero2) {
        pares.push(numero1);
        numero1 += 2;
    }

    if(pares.length > 0){
        console.log(`Los numeros pares entre ${valorInicialNumero1} y ${valorInicialNumero2}: ${pares.join(",")}`);
    } else {
        console.log(`No hay numeros pares entre ${valorInicialNumero1} y ${valorInicialNumero2}`);
    }
}

findParis(10,20);
findParis(20,20);