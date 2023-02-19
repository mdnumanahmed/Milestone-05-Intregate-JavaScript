document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-amount')
    if(depositAmount){
        const previousDepositTotal = getElementValue('deposit-total')
        const newDepositTotal = previousDepositTotal + depositAmount;
        setElementValue('deposit-total', newDepositTotal)
        const previousBalanceTotal = getElementValue('balance-total')
        const newBalanceTotal = previousBalanceTotal + depositAmount;
        setElementValue('balance-total', newBalanceTotal)
    }   
})