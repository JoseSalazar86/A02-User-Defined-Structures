class Animal{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    hablar(){
        console.log(`${this.nombre}  hace un sonido`);
    }
}

class Perro extends Animal{
    constructor(nombre,edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }
    hablar(){
        console.log(`${this.nombre}  ladra: Guau Guau!`);

    }
}

class Gato extends Animal{
    constructor(nombre,edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }
    hablar(){
        console.log(`${this.nombre} maúlla: Miau Miau!`);
    }
}

let perro = new Perro("thor",1,"labrador");
console.log(perro);
perro.hablar();

let  gato = new Gato("luna",2,"mezcla de persa");
console.log(gato);
gato.hablar();