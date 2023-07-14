

// CHECK PHONE NUMBER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'valid'
        phoneResult.style.color = 'blue'
} else {
        phoneResult.innerHTML = 'invalid'
        phoneResult.style.color = 'red'
    }
}


