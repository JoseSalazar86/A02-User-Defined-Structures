const resultado = Array(13).fill(0);

const munLanzamientos = 36000;
for (let i = 0; i < munLanzamientos; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    const suma = dado1 + dado2;
    resultado[suma]++;
}
console.log("Resultado de los lanzamientos de los dados: ");
for (let i = 0; i < resultado.length; i++) {
    console.log(`La suma ${i}: ${resultado[i]}`);
}