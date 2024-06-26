export default class Validator {
    constructor(body, emailMsg, passwordMsg) {
        this.body = body;
        this.emailMsg = emailMsg;
        this.passwordMsg = passwordMsg;
        this.errors = 0;
    }

    checkRegister() { 
        if (!this.body.querySelector('#email').value){
            this.emailMsg.innerText = 'Email é obrigatório.'
            this.errors++;
        }
        if (!this.body.querySelector('#password').value){
            this.passwordMsg.innerText = 'Senha é obrigatória.'
            this.errors++;
        }
        if (this.body.querySelector('#password').value !== this.body.querySelector('#passwordConfirmation').value){
            this.passwordMsg.innerText = 'Senhas não conferem.'
            this.errors++;
        }
        if (this.body.querySelector('#password').value.length < 8 || this.body.querySelector('#password').value.length > 20) {
            this.passwordMsg.innerText = 'A Senha precisa ter de 8 a 20 caracteres.'
            this.errors++;
        }
    }

    checkLogin() {
        if (!this.body.querySelector('#email').value){
            this.emailMsg.innerText = 'Email é obrigatório.'
            this.errors++;
        }
        if (!this.body.querySelector('#password').value){
            this.passwordMsg.innerText = 'Senha é obrigatória.'
            this.errors++;
        }
    }
}