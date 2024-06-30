// Iremos importar nossos estilos a serem interpretados pelo MiniCssExtractPlugin. O caminho deles deve ser relativo ao arquivo atual:
import './assets/css/general.css';
import './assets/css/header.css';
import './assets/css/main.css';
import './assets/css/footer.css';
import './assets/css/form.css';
import './assets/css/error404.css';
import './assets/css/messages.css';

import Validator from './models/FormValidator'

const registerForm = document.querySelector('.register-form')
const loginForm = document.querySelector('.login-form')

if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const validator = new Validator(e.target);
        validator.checkRegister()
        if (validator.errors === 0){
            e.target.submit()
        } else return
    })
}

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const validator = new Validator(e.target);
        validator.checkLogin()
        if (validator.errors === 0){
            e.target.submit()
        } else return
    })
}