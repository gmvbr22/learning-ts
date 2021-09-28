//
// Liskov Substitution Principle
//
//  Uma classe derivada deve ser substituível por 
//  sua classe base.
//
//  Violação do LSP
//
// - Sobrescrever/implementar um método que não faz nada
// - Lançar uma exceção inesperada
// - Retornar valores de tipos diferentes da classe base
//

//
// Correto
//
abstract class User {

    public displayName(): String {
        return "User"
    }

}

class AdminUser extends User {

    public displayName(): String {
        return "Admin"
    }

}

//
// Violação
//
class ModeratorUser extends User {
    
    public displayName(): String {
        throw new Error("Method not implemented.");
    }


}