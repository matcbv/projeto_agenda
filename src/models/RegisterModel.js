// Criando nosso modelo para registro do usuário:

const mongoose = require('mongoose');

const validator  = require('validator')
const bcryptjs = require('bcryptjs')

const RegisterSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true }
});

const RegisterModel = mongoose.model('Register', RegisterSchema);

class Register{
    constructor(body) {
        this.body = body;
        this.emailErrors = [];
        this.passwordErrors = [];
        this.user = null;
    }

    cleanUp() {
        for (let property in this.body){
            if (typeof this.body[property] !== 'string'){
                this.body[property] = '';
            }
        }
        this.body = {
            email: this.body.email.toLowerCase(),
            password: this.body.password
        }
    };

    userExists() {
        // Com o método findOne, conseguimos encontrar um documento de um usuário através de um número de critérios informados através de um objeto passado por parâmetro.
        RegisterModel.findOne({ email: this.body.email })
        .then(user => {
            // Caso algum usuário tenha sido encontrado, iremos adicionar uma mensagem de erro à lista de erros.
            if (user) {
                this.emailErrors.push('Usuário já existente.')
            }
        })
    }

    async signup() {
        this.validation()
        if (this.emailErrors.length > 0 || this.passwordErrors.length > 0) return;

        this.userExists()
        if (this.emailErrors.length > 0 || this.passwordErrors.length > 0) return
        /*
            Quando você usa o Mongoose para criar um novo documento com Model.create, o objeto retornado contém não apenas os campos definidos no schema (email e password), mas também alguns campos e métodos adicionais do Mongoose.

            Teremos as propriedades acicionais _id e _v. Essas são um identificador único gerado automaticamente para cada documento e a versão usada internamente pelo Mongoose para controle de versões do documento, respectivamente.

            Por fim, ainda teremos métodos para manipulação do documento como save e remove. 
        */
        // Gerando um salt para ser utilizado no hash:
        const salt = bcryptjs.genSaltSync();
        // Gerando um hash para a senha com o salt:
        const hash = bcryptjs.hashSync(this.body.password, salt);
        // Substituindo nossa senha pelo hash final:
        this.body.password = hash;
        // Podemos passar o nosso body diretamente para nosso model, onde os nomes dos inputs serão adicionados aos respectivos nomes criados no schema. Isso só deve ser feito após validarmos os dados corretamente.
        this.user = await RegisterModel.create(this.body)
    };

    validation() {
        this.cleanUp()
        if (!validator.isEmail(this.body.email)) {
            this.emailErrors.push('Email inválido!')
        }
        if (this.body.password.length < 8 || this.body.password.length > 20) {
            this.passwordErrors.push('A Senha precisa ter de 8 a 20 caracteres.')
        }
    };
}

module.exports = {Register, RegisterModel};
