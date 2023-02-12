/* 
1. add event handler to withdraw button
2. get withdraw amount from withdraw input field
2.5 convert input value to number
3. get previous withdraw total from withdraw amount
3.5 convert to number previous withdraw total
4. get withdraw total
5. get the balance total
6. calculate balance total
7. clear the input field


*/

// step-1
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step-2
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountString = withdrawInput.value 
    const withdrawAmount = parseFloat(withdrawAmountString)
    
    // step-3
    const withdrawTotalField = document.getElementById('withdraw-total')
    const withdrawTotalString = withdrawTotalField.innerText
    const previousWithdrawTotal = parseFloat(withdrawTotalString)

    // step-4
    const withdrawTotal = previousWithdrawTotal + withdrawAmount
    withdrawTotalField.innerText = withdrawTotal

    // step-5
    const balanceField = document.getElementById('balance-total')
    const balanceTotalString = balanceField.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString)

    // step-6
    const balanceTotal = previousBalanceTotal - withdrawAmount
    balanceField.innerText = balanceTotal
    // step-7
    withdrawInput.value = ''

})