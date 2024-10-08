function calcularPrecioFinal(precioBase,descuentos){
    if( typeof(precioBase) != 'number' || precioBase <= 0 ){
        throw new Error("El precio base debe ser un número positivo.");
    }
    descuentos.forEach((descuento) => {
        if (typeof descuento !=='number' || descuento < 0 || descuento > 100) {
            throw new Error("Cada descuento tiene que ser un numero positivo.");
        }
    });

    const precioFinal = descuentos.reduce((precio, descuento) => {
        return precio * (1 - descuento / 100);
    }, precioBase);
     return precioFinal;
}

function mostrarPrecioFinal(precioBase,descuentos){
    try{
        const precioFinal = calcularPrecioFinal(precioBase,descuentos);
        console.log(`El precio final despues de aplicar los descuentos es de: ${precioFinal.toFixed(2)}`);
    } catch (error){
        console.error(error.message);
    }
}

const precioBase = 100;
const descuentos = [10,20];

mostrarPrecioFinal(precioBase,descuentos);