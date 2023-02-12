// step-1: add event listener to the deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    const depositInput = document.getElementById('deposit-input')
    const newDepositAmount = depositInput.value 
    
    // step-3: get current deposit total
    const depositTotalField = document.getElementById('deposit-total')
    const previousDepositTotal = depositTotalField.innerText;

    // step-4: convert string to number and sum previous and current deposit
    depositTotalField.innerText = Number(previousDepositTotal) + Number(newDepositAmount)
    
    // step-5: get the current balance total
    const balanceField = document.getElementById('balance-total')
    const previousBalanceTotal = balanceField.innerText;
    
    // step-6: calculate balance total
    const balanceTotal = Number(previousBalanceTotal) + Number(newDepositAmount)
    // set balance total
    balanceField.innerText = balanceTotal

    // clear input field
    depositInput.value = ''
    console.log(balanceTotal);
})