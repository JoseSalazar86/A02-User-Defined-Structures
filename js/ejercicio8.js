class Estudiante{
    constructor(nombre,edad){
      this.nombre = nombre;
      this.edad = edad;
      this.notas = [];
    }

    agregarNota(nota){
      if (nota >= 0 && nota <= 10)  {
          this.notas.push(nota);
          console.log(`Nota ${nota} agregada para ${this.nombre}`);
      } else {
          console.log("Por favor, introduzca una nota valida");
      }
    }

    calcularPromedio(){
      if (this.notas.length === 0){
          console.log("No hay notas para calcular el promedio");
          return 0;
      }
      let suma = this.notas.reduce((acumulador, nota) => acumulador + nota,0);
      return (suma/this.notas.length).toFixed(2);
    }
    determinarAprobado(){
       let promedio = this.calcularPromedio();
       if (promedio >= 5){
           console.log(`${this.nombre} ha aprobado con un promedio de: ${promedio}`);
       } else {
      console.log(`${this.nombre} ha suspendido con un promedio de: ${promedio}`);
       }
    }
}

let estudiante = new Estudiante("Paco",18);

estudiante.agregarNota(7);
estudiante.agregarNota(8);
estudiante.agregarNota(4);

console.log(`Promedio de ${estudiante.nombre}: ${estudiante.calcularPromedio()}`);

estudiante.determinarAprobado()
