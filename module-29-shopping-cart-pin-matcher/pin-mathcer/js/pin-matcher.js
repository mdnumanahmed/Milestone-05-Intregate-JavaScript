
function getPin(){
    const pin = generatePin()
    const pinString = pin + ''
    if(pinString.length === 4){
        return pin;
    }else{
        console.log('No is less than 4', pin);
        return getPin()
    }
}

function generatePin(){
    const random = Math.round(Math.random() * 10000)
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin()
    const displayPinField = document.getElementById('display-pin')
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(e){    
    const number = e.target.innerText;
    const typedNumberFiled = document.getElementById('typed-numbers')
    const previousTypedNumber = typedNumberFiled.value
    if(!isNaN(number)){
        const newTypedNumber = previousTypedNumber + number
        typedNumberFiled.value = newTypedNumber;
    }else{
        if(number === 'C'){
            typedNumberFiled.value = ''
        }else if(number === '<'){
            const digits = previousTypedNumber.split('')
            digits.pop()
            typedNumberFiled.value = digits.join('')
        }
    }
})

// Verify pin 
document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin')
    const currentPin = displayPinField.value;

    const typedPinFiled = document.getElementById('typed-numbers')
    const typedPin = typedPinFiled.value;

    const pinSuccess = document.getElementById('pin-success')
    const pinFailure = document.getElementById('pin-failure')
    if(typedPin === currentPin){
        pinSuccess.style.display = 'block'
        pinFailure.style.display = 'none'
    }
    else{
        pinFailure.style.display = 'block'
        pinSuccess.style.display = 'none'
    }
})

