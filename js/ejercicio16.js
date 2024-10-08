class Personaje{
    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza = raza;
        this.nivel = 1;
        this.puntosVida = 100;
    }
    atacar(enemigo){
        const damage = 10;
        enemigo.recibirDamage(damage);
    }
    recibirDamage(damage){
        this.puntosVida -= damage;
        console.log(`${this.nombre} recibe ${damage} puntos de daño. Le queda ${this.puntosVida} restante.`);
        if(this.puntosVida <= 0){
            this.derrotado();
        }

    }

    derrotado(){
        console.log(`${this.nombre} ha sido derrotado. Restableciendo nivel y vida`);
        this.nivel = 1;
        this.puntosVida = 100;
    }

    recuperarVida(){
        if(this.puntosVida < 100){
            this.puntosVida += 20;
            if(this.puntosVida > 100){
                this.puntosVida =100;
            }
            console.log(`${this.nombre} recupera vida. Puntos de vida actuales ${this.puntosVida}`);
        }else{
            console.log(`${this.nombre} ya tiene el maximo de vida.`)
        }
    }
}

const personaje1 = new Personaje("Paco","Humano");
const personaje2 = new Personaje("Topi","Enano");

const personajes = [personaje1, personaje2];

personaje1.atacar(personaje2);

personaje2.atacar(personaje1);

personaje1.recuperarVida();

personaje2.atacar(personaje1);

personaje1.recibirDamage(100);