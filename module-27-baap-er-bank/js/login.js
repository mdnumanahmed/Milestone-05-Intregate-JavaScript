// step-1: add click event handler with submit button
document.getElementById('submit-btn').addEventListener('click', function(){
    // step-2: get the email address from the email input field
    // always remember to use .value to get text from input field
    const userEmailField = document.getElementById('user-email')
    const userEmail = userEmailField.value;

    // step-3: get the password from the password input field
    // 3.a: set the id in HTML Element
    // 3.b: get the element by id
    // 3.c: get the value from input field
    const userPasswordField = document.getElementById('user-password')
    const userPassword = userPasswordField.value;

    // DANGER: DO NOT VERIFY email and password on the client side
    // step-4: verify email and password and check weather valid user or not

    if(userEmail === 'sontan@baap.com' && userPassword === 'secret'){
        window.location.href = 'bank.html'
    }else{
        alert('Please enter valid email and password');
    }
})