//
// Single Responsiblity Principle
// 
// cada módulo, classe ou função deve possuir
// apenas uma responsabilidade dentro do software
//
// "Uma classe deve ter apenas uma razão para mudar"
// 

//
/// Errado
//
class Cart1 {

    public getItems(): string[] {
        // ...
        return []
    }

    public addItem(id: string) {
        // ...
    }

    public deleteItem(id: string) {
        // ...
    }

    public load(cartID: string) {
        // ...
    }

    public save(cartID: string) {
        // ...
    }
}

//
// Correto
//
class Cart2 {

    public getItems(): string[] {
        // ...
        return []
    }

    public addItem(id: string) {
        // ...
    }

    public deleteItem(id: string) {
        // ...
    }
}

class CartRepository {

    public load(cartID: string) {
        // ...
    }

    public save(cartID: string) {
        // ...
    }
}