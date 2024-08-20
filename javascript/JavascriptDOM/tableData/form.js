
const formSubmit = document.getElementById('formSubmit')
const registerBtn = document.getElementById('registerBtn')
const passwordInput = document.getElementById('password')
const confirmPasswordInput = document.getElementById('confirmPassword')
const emailError = document.getElementById('emailError')
const passwordError = document.getElementById('passwordError')
const emailInput = document.getElementById('email')
const confirmPasswordError = document.getElementById('confirmPasswordError')

function handleForm(e){
    e.preventDefault()
    let isValid=true

    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    document.getElementById('formSuccess').textContent='';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue= emailInput.value.trim()

     const passwordValue= passwordInput.value.trim()
     const confirmPasswordValue= confirmPasswordInput.value.trim()

if(emailValue===""){
    emailError.textContent="Email is required"
    isValid=false
} else if (!emailPattern.test(emailValue)) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
}

if(passwordValue===""){
    passwordError.textContent="Password is required"
    isValid=false
} else if (passwordValue.length<6) {
    passwordError.textContent = 'password length must be 6';
    isValid = false;
}
if(confirmPasswordValue===""){
    confirmPasswordError.textContent="Confirm Password is required"
    isValid=false
} else if (confirmPasswordValue!==passwordValue) {
    confirmPasswordError.textContent = 'password and confirm password should match';
    isValid = false;
}

if(isValid){
    document.getElementById('formSuccess').textContent="submitted successfully"
}

}

formSubmit.addEventListener('submit', handleForm)