class Producto{
    constructor(nombre, categoria,precio){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.cantidadStock =0;
    }
    actualizarStock(cantidad){
        this.cantidadStock += cantidad;
        if(this.cantidadStock < 0){
            this.cantidadStock = 0;
            console.log("cantidad restablecida a 0")
        }
    }
}
class Inventario{
    constructor(){
        this.productos = [];

    }
    agregarProducto(producto){
        if(producto.precio < 0){
            console.log("El precio del producto no puede ser negativo");
        } else if(producto.cantidadStock < 0){
            console.log("La cantidad en stock no puede ser negativo");
        } else {
            this.productos.push(producto);
            console.log(`Producto ${producto.nombre} agregado al inventario`);
        }
    }
    eliminarProducto(nombre){
        this.productos = this.productos.filter(producto => producto.nombre !== nombre);
        console.log(`Producto ${nombre} eliminado del inventario`);
    }

    buscarProducto(nombre){
        const producto = this.productos.find(producto => producto.nombre === nombre);
        if(producto){
            console.log(`Producto  encontrado: ${producto.nombre}, Categoria: ${producto.categoria}, Precio: ${producto.precio}, Stock: ${producto.cantidadStock}`);
        }else {
            console.log(`Producto ${nombre} no encontrado en el inventario`);
        }
    }
    mostrarInventario() {
        console.log("Inventario actual: ");
        if (this.productos.length === 0){
            console.log("El inventario esta vacio.");
        } else {
            this.productos.forEach(producto => {
                console.log(`Nombre: ${producto.nombre}, Categoria: ${producto.categoria}, Precio: ${producto.precio}, Stock: ${producto.cantidadStock}`);
            });
        }
    }
}

// creamos los objetos
const producto1 = new Producto("varita mágica","Varita",50);
const producto2 = new Producto("Poción de curación","Poción",30)
const inventario = new Inventario();

inventario.agregarProducto(producto1);
inventario.agregarProducto(producto2);

producto1.actualizarStock(10);
producto2.actualizarStock(0);

inventario.mostrarInventario();

inventario.buscarProducto("Varita mágica");
inventario.buscarProducto("Poción de curación");

inventario.eliminarProducto("Varita mágica");

inventario.mostrarInventario();