document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-amount')
    if(withdrawAmount){
        const previousWithdrawTotal = getElementValue('withdraw-total')
        const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
        setElementValue('withdraw-total', newWithdrawTotal)
        const previousBalanceTotal = getElementValue('balance-total')
        const newBalanceTotal = previousBalanceTotal - withdrawAmount;
        setElementValue('balance-total', newBalanceTotal)
    }
})