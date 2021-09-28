//
// Dependency Inversion Principle
// Dependa de abstrações e não de implementações
//
// De acordo com Uncle Bob esse princípio pode ser definido da seguinte forma:
// "
//      1. Módulos de alto nível não devem depender de módulos 
//      de baixo nível. Ambos devem depender da abstração.
//
//      2. Abstrações não devem depender de detalhes. 
//      Detalhes devem depender de abstrações.
// "
//

//
// Errado,
//
// Se precisar alterar password para bcrypt or argon ?
//
class Password {

    public hash(): string {
        // 
        // Lógica aqui
        //
        return 'xxxxxxxxxxx'
    }

}

class AuthModel {

    constructor(
        private password: Password
    ){}

    public authUser(){
        this.password.hash();
        //....
    }
}

let authModel = new AuthModel(
    new Password()
);

//
// Correto
//
// Você depende agora da abstração PasswordHash
// Você pode implementar qualquer tipo de senha com essa interface
// Que será compativel com AuthModel2
//
interface PasswordHash {

    hash(): string
}


class BcryptAdapter implements PasswordHash {

    public hash(): string {
        // 
        // Lógica aqui
        //
        return 'xxxxxxxxxxx'
    }
}


class ArgonAdapter implements PasswordHash {
    
    public hash(): string {
        // 
        // Lógica aqui
        //
        return 'xxxxxxxxxxx'
    }
}


class AuthModel2 {

    constructor(
        private password: PasswordHash
    ){}

    public authUser(){
        this.password.hash();
        //....
    }
}

let authModel1 = new AuthModel2(
    new BcryptAdapter()
)

let authModel2 = new AuthModel2(
    new ArgonAdapter()
)