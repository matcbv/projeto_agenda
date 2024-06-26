// Criando nosso modelo para login do usuário:

const mongoose = require('mongoose');
// O pacote validator é responsável por nos fornecer uma maneira simples e eficiente de verificar nossos dados. Com ele, podemos validar tipos de dados, seus formatos, e até mesmo definir uma lista de dados permitidos ou valor mínimo e máximo.
const validator  = require('validator')
const bcryptjs = require('bcryptjs')

// Schema do nosso login:
const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

//Criando o modelo de login:
const LoginModel = mongoose.model('Login', LoginSchema);

// Com a classe login, iremos realizar a validação dos nossos dados.
class Login{
    constructor(body) {
        // Iremos atribuir o body da nossa requisição (dados do formulário) para a propriedade body da classe Login:
        this.body = body;
        // Array para adicionarmos os erros de email encontrados:
        this.emailErrors = [];
        // Array para adicionarmos os erros de senha encontrados:
        this.passwordErrors = [];
        // Propriedade para armazenarmos o nosso usuário:
        this.user = null;
    }

    cleanUp() {
        // Com um for in, iremos iterar sobre as chaves do nosso body. Caso algum dos valores não seja uma string, iremos substituí-lo por uma string vazia.
        for (let property in this.body){
            if (typeof this.body[property] !== 'string'){
                this.body[property] = '';
            }
        }

        // Abaixo, estaremos redefinindo nosso body para garantir que contenha somente as duas propriedades que desejamos:
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    };

    userExists() {
        // Com o método findOne, conseguimos encontrar um documento de um usuário através de um número de critérios informados através de um objeto passado por parâmetro.
        LoginModel.findOne({ email: this.body.email })
        .then(user => {
            // Caso algum usuário tenha sido encontrado, iremos adicionar uma mensagem de erro à lista de erros.
            if (user) {
                this.emailErrors.push('Usuário já existente.')
            }
        })
    }

    async signin() {
        this.validation()
        if (this.emailErrors.length > 0 || this.passwordErrors.length > 0) return;
        // Obtendo o usuário através do email informando no formulário:
        this.user = await LoginModel.findOne({ email: this.body.email })
        // Caso nada seja obtido, iremos adicionar um erro em nossa lista:
        if (!this.user) {
            this.emailErrors.push('Usuário inexistente.');
            return
        }
        // Caso o usuário exista, estaremos checando a senha informada com a armazenada em nosso banco de dados. Realizamos isso através do método compare() (ou compareSync() para modo síncrono). Devemos informar a senha obtida do formulário, seguido da senha obtida do banco de dados.
        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.passwordErrors.push('Senha inválida!');
            return
        }
    }

    validation() {
        this.cleanUp()
        // Caso o Email não seja válido, um erro será adicionado a lista de erros.
        if (!validator.isEmail(this.body.email)) {
            this.emailErrors.push('Email inválido!')
        }
        if (this.body.password === '') {
            this.passwordErrors.push('Senha não informada!')
        }
    };
}

module.exports = {Login};
