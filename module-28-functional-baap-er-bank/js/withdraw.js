/* 
1. add event handler with withdraw button
2. get withdraw amount from withdraw input field using getInputValueById() function
3. get previous withdraw total using getElementValueById() function
4. calculate new withdraw total 
4.5 set the new withdraw total using setElementValueById() function
5. get previous balance total using getElementValueById() function
6. 
*/

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('withdraw-input');
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
    setElementValueById('balance-total', newBalanceTotal)

})