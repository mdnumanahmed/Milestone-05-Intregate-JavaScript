/* 
যে কোন প্রজেক্ট শুরু করার আগে করণীয়
-> একজন ব্যবহারকারী হিসেবে প্রজেক্টটি দেখা।
-> কোন কোন জায়গায় ইন্টারেকশন হবে, তা চিহ্নিত করা।
-> কোথায় ক্লিক করলে প্রজেক্টের কোন কোন জায়গায় ইফেক্ট পড়বে, তা চিহ্নিত করা।
-> প্রজেক্টের HTML ফাইলে গিয়ে ইন্টারেকশনের ইলিমেন্টগুলো চেক করা।



1. get case plus btn using id
2. add with btn addEventListener() and event name in first parameter then anonymous function
3. get case input field 
4. get string value from input field
6. convert string value to the number using parseInt()
7. add 1 to previous case number
8. set new case number to the input value
*/
function getAmount(isIncrease, productId){
    const numberField = document.getElementById(productId)
    const numberString = numberField.value 
    const previousNumber = parseInt(numberString)
    let newNumber;
    if(isIncrease){
        newNumber = previousNumber + 1;
    }else{
        newNumber = previousNumber - 1;
    }
    numberField.value = newNumber;
    return newNumber;
}

function setInnerTextValue(fieldId, value){
    const productPrice = document.getElementById(fieldId)
    productPrice.innerText = value;
}

function getTotalPrice(isIncrease, numberField, fieldId, price){
    const newNumber = getAmount(isIncrease, numberField)
    const totalPrice = newNumber * price;
    setInnerTextValue(fieldId, totalPrice)
    return totalPrice;
}

function calculateSubTotal(){
    const phoneTotalPrice = document.getElementById('phone-price').innerText
    const caseTotalPrice = document.getElementById('case-price').innerText
    const subTotal = parseInt(phoneTotalPrice) + parseInt(caseTotalPrice)
    setInnerTextValue('sub-total', subTotal)

    // tax
    const taxAmount = parseFloat((subTotal * 0.1).toFixed(2));
    setInnerTextValue('tax-amount', taxAmount)

    // final total
    const finalAmount = subTotal + taxAmount
    setInnerTextValue('final-total', finalAmount)

}

document.getElementById('case-increase').addEventListener('click', function(){
    // const newNumber = getAmount(true, 'case-number-field')
    // const caseTotalPrice = newNumber * 59;
    // const casePrice = document.getElementById('case-price')
    // casePrice.innerText = caseTotalPrice;
    const caseTotalPrice = getTotalPrice(true, 'case-number-field', 'case-price', 59)

    // calculate sub total, tax and final total
    calculateSubTotal()
})

document.getElementById('case-decrease').addEventListener('click', function(){
    const caseTotalPrice = getTotalPrice(false, 'case-number-field', 'case-price', 59)

    // calculate sub total, tax and final total
    calculateSubTotal()
})

document.getElementById('phone-increase').addEventListener('click', function(){
    const phoneTotalPrice = getTotalPrice(true, 'phone-number-field', 'phone-price', 1219)

    // calculate sub total, tax and final total
    calculateSubTotal()
})

document.getElementById('phone-decrease').addEventListener('click', function(){
    const phoneTotalPrice = getTotalPrice(false, 'phone-number-field', 'phone-price', 1219)

    // calculate sub total, tax and final total
    calculateSubTotal()
})