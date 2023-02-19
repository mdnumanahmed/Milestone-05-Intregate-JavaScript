

document.getElementById('deposit-btn').addEventListener('click', function(){
    /* 
    1. get the element by id
    2. get the value from the input field
    3. convert string value to number
    */
    const newDepositAmount = getInputValueById('deposit-input');
    // get previous deposit total
    const previousDepositTotal = getElementValueById('deposit-total');
    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value
    setElementValueById('deposit-total', newDepositTotal)

    // get previous balance total using function
    const previousBalanceTotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set balance total value
    setElementValueById('balance-total', newBalanceTotal)
})