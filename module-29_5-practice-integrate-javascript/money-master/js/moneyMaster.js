let error;

function getInputValue(inputId){
    const inputField = document.getElementById(inputId)
    const inputFieldString = inputField.value;
    inputField.value = ''
    if(isNaN(inputFieldString) || inputFieldString < 0 || typeof inputFieldString === 'undefined'){        
        return alert('Input value must be a number');
    }
    const inputValue = parseFloat(inputFieldString)
    return inputValue;
}

function getElementValue(elementId){
    const elementField = document.getElementById(elementId)
    const elementValueString =  elementField.innerText;
    const previousValue = parseFloat(elementValueString)
    return previousValue;
}

function setElementValue(elementId, newValue){
    const elementField = document.getElementById(elementId)
    const elementValueString =  elementField.innerText;
    const previousValue = parseFloat(elementValueString)
    elementField.innerText = newValue;
    return previousValue;
}

function calculateExpense(){
    const foodCost = getInputValue('food')
    const rentCost = getInputValue('rent')
    const clothCost = getInputValue('clothes')
    const income = getInputValue('income')

    if(foodCost > -1 && rentCost > -1 && clothCost > -1 && income > -1){
        const totalCost = foodCost + rentCost + clothCost
        if(totalCost > income){
            return alert('Should expense more than income')
        }
        setElementValue('total-expense', totalCost)

        // Balance         
        const balance = income - totalCost
        // display balance data
        setElementValue('balance', balance)  
    
        console.log('inside getInputValue function');
        console.log(foodCost, rentCost, clothCost, typeof income);
    }     
}

function calculateSavings(){
    const saveRate = getInputValue('save')
    if(saveRate > 100){
        return alert('Not possible save money more than 100')
    }
    const expense = getElementValue('total-expense')
    const balance = getElementValue('balance')
    const income = expense + balance;
    const save = income * saveRate / 100;
    console.log(save);
    if(save > balance){
        return alert('Could not save money more than balance')
    }
    setElementValue('saving-amount', save)
    const savingMoney = getElementValue('saving-amount')

    const remainingBalance = balance - savingMoney;
    setElementValue('remaining-balance', remainingBalance)

}


