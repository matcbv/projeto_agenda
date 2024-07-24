export default class Validator {
    constructor(body) {
        this.emailMsg = document.querySelector('.email-message')
        this.passwordMsg = document.querySelector('.password-message')
        this.body = body;
        this.errors = 0;
    }

    checkRegister() {
        this.emailMsg.innerText = '';
        this.passwordMsg.innerText = '';

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
        this.emailMsg.innerText = '';
        this.passwordMsg.innerText = '';

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