//
// Interface Segregation Principle
//
// Uma classe não deve ser forçada a implementar 
// interfaces e métodos que não irão utilizar.
// 

// Errado
// Implementa métodos que não serão utilizado
//
interface Vehicle {

    setPosition(x: number, z: number)
    setAltitude(y: number)
}

class Car implements Vehicle {

    setPosition(x: number, z: number) {
        // ...
    }

    setAltitude(y: number) {
        // ... Carros não voam ainda
    }
}

class Airplane implements Vehicle {

    setPosition(x: number, z: number) {
        // ...
    }

    setAltitude(y: number) {
        // ...
    }
}

//
// Correto
//
interface Vehicle2 {

    setPosition(x: number, z: number)
}

interface Fly2 extends Vehicle2 {

    setAltitude(y: number)

}

class Car2 implements Vehicle2 {

    setPosition(x: number, z: number) {
        // ...
    }
}

class Airplane2 implements Fly2 {

    setPosition(x: number, z: number) {
        // ...
    }

    setAltitude(y: number) {
        // ...
    }
}
