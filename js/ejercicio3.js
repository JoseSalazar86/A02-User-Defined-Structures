let numeros = [34,5,10,14,23];

//con ell reduce sumamos todos los numero del array
let resultado = numeros.reduce((acumulador, numero) => acumulador + numero);
console.log(resultado);

//filtramos los numeros del array que sean mayor a 11
let resultado2 = numeros.filter((numero) => numero >= 11);
console.log(resultado2);

// aqui estamos multiplicando cada numero del array por 2
let resultado3 = numeros.map((numero) => numero * 2);
console.log(resultado3);

