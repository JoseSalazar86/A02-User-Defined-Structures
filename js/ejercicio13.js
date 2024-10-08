function calcularSumaPrecios(productos){
    return productos.reduce((suma, producto) => {
        if(typeof producto.precio !== 'number' || producto.precio < 0){
            console.error(`El precio del producto "${producto.nombre}" no es valido.`);
            return suma;
        }
        return suma + producto.precio;
    },0);
}
const productos = [
    {nombre:"Manzana", precio: 50},
    {nombre:"Tomate", precio: 30},
    {nombre:"Patatas", precio: 300}
];

const total = calcularSumaPrecios(productos);
console.log(`La suma total de los precios es: ${total}`);