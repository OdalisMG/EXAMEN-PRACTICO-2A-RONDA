class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    
    getDetalles() {
        console.log(`[NOMBRE]=${this.nombre}`);
        console.log(`[APELLIDO]=${this.apellido}`);
        console.log(`[EDAD]=${this.edad}`);
    }
}

class Jugador extends Persona {
    constructor(nombre, apellido, edad, posicion) {
        super(nombre, apellido, edad);
        this.posicion = posicion;
    }
    
    getDetalles() {
        console.log("JUGADOR:");
        super.getDetalles();
        console.log(`[POSICION]=${this.posicion}`);
    }
}

class Entrenador extends Persona {
    constructor(nombre, apellido, edad, años_experiencia, id_federacion) {
        super(nombre, apellido, edad);
        this.años_experiencia = años_experiencia;
        
        if (id_federacion === undefined) {
            this.id_federacion = Math.floor(Math.random() * (99999 - 10000 + 1) ) + 10000;
        } else {
            this.id_federacion = id_federacion;
        }
        
    }
    
    getDetalles() {
        console.log("ENTRENADOR:");
        super.getDetalles();
        console.log(`[AÑOS DE EXPERIENCIA]=${this.años_experiencia}`);
        console.log(`[ID FEDERACION]=${this.id_federacion}`);
    }
}

class Equipo {
    constructor(entrenador, jugadores) {
        this.entrenador = entrenador;
        this.jugadores = jugadores;
    }
    
    getDetalles() {
        console.log("EQUIPO:\n");
        this.entrenador.getDetalles();
        console.log("");
        this.jugadores.forEach(jugador => {
            jugador.getDetalles();
            console.log("");
        })
    }
}

jone = new Jugador("Kevin", "Christopher", 24, "Arquero");
jtwo = new Jugador("Alfredo", "Garcia", 22, "Defensa");
jthree = new Jugador("Jonathan", "Quiroz", 25, "Medio");
jfour= new Jugador("Lenin", "Flor", 21, "Delantero");


e = new Entrenador("Odalis", "Garcia", 22, 10);

eq = new Equipo(e, [jone, jtwo, jthree, jfour]);
eq.getDetalles();