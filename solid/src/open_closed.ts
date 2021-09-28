//
// Open-Closed Principle
//
// Objetos ou entidades devem estar abertos para extensão,
// mas fechados para modificação

//
// Errado, caso adicione outra forma você teria que modificar
// o ProductService quebrando o principio
//
class ProductService {

    public buy() {
        // ..
    }

    public buyService(){
        // ..
    }
}

//
// Correto, caso queira adicionar uma nova entidade
// Basta implementar a interface Buyable
//
interface Buyable {

    buy(): void

}

class Product implements Buyable {

    buy(): void {
        // ..
    }
}

class Service implements Buyable {

    buy(): void {
        // ..
    }

}

let x: Buyable

x = new Product()
x.buy()

x = new Service()
x.buy()