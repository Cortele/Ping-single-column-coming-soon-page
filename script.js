const heroBtn = document.querySelector('.hero-btn');
const input = document.querySelector('#email-hero')
const heroError = document.querySelector('.hero-error')
const regexEmail = /^[\w\.]+@([\w-]+\.)+[\w-]{2,5}$/g


function validate() {
    if (!regexEmail.test(input.value)) {
        input.classList.add('invalid')
        heroError.classList.remove('visible')
    } else {
        input.classList.remove('invalid')
        heroError.classList.add('visible')
        input.classList.add('valid') 
    }
}

heroBtn.addEventListener('click', validate)

