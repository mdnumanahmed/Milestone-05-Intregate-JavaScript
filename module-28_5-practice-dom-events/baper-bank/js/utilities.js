function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value
    if(isNaN(inputValueString)){
       alert('Please enter only number');
       return
    }
    const inputValue = parseFloat(inputValueString)
    inputField.value  = ''
    return inputValue;
}

function getElementValue(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString)
    return value;
}

function setElementValue(id, newValue){
    document.getElementById(id).innerText = newValue;
}