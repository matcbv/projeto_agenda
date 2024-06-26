const mongoose = require('mongoose');
const validator = require('validator')

// Criando schema para o modelo de contatos:
const ContactSchema = new mongoose.Schema({
    // O nome será o unico campo obrigatório:
    name: { type: String, required: true },
    lastname: { type: String, required: false, default: '' },
    email: { type: String, required: true, default: '' },
    number: { type: String, required: true, default: '' },
    // Iremos adicionar um campo de forma implícita informando a hora que o contato foi cadastrado:
    data: {type: Date, default: Date.now()}
});

const ContactModel = mongoose.model('Contact', ContactSchema);

function Contact(body) {
    this.body = body;
    this.nameErrors = [];
    this.emailErrors = [];
    this.contact = null;
}

Contact.prototype.cleanUp = function() {

    for (let property in this.body){
        if (typeof this.body[property] !== 'string'){
            this.body[property] = '';
        }
    }

    this.body = {
        name: this.body.name,
        lastname: this.body.lastname,
        email: this.body.email,
        number: this.body.number
    }
}

Contact.getContactById = async (id) => {
    if (typeof id !== "string") return
    ContactModel.find
    // Abaixo, iremos obter o usuário através de seu id:
    const contact = await ContactModel.findById(id)
    return contact
}

Contact.getContacts = async () => {
    // Obtendo os documentos em ordem descrescente de acordo com o campo data:
    const contacts = await ContactModel.find({}, null, {sort: { data: -1 }})
    return contacts
}

Contact.prototype.validation = function() {
    this.cleanUp()
    // Validando se o nome foi preenchido:
    if (!this.body.name) this.nameErrors.push('Nome é um campo obrigatório.')
    // Verificando se ao menos um dos campos de contato (email e number) foi preenchido:
    if (!this.body.number && !this.body.email) this.emailErrors.push('Deve ser informado ao menos um meio de contato.')
    //Verificando se o email foi preenchido e se ele é valido:
    if (this.body.email && !validator.isEmail(this.body.email)) this.emailErrors.push('Email inválido!')
}

Contact.prototype.register = async function() {
    this.validation()
    if (this.emailErrors.length > 0 || this.nameErrors.length > 0) return
    this.contact = await ContactModel.create(this.body)
}

Contact.prototype.edit = async function(id) {
    if (typeof id !== "string") return
    this.validation()
    if (this.nameErrors.length > 0 || this.emailErrors.length > 0) return
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, {new: true})
}

Contact.delete = async (id) => {
    if (typeof id !== "string") return
    const contact = await ContactModel.findByIdAndDelete(id)
    return contact
}

module.exports = Contact;
