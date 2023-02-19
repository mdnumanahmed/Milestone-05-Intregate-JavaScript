document.getElementById('easy-discount-btn').addEventListener('click', function(){
    const priceElement = document.getElementById('price')
    const priceElementString = priceElement.innerText;
    const price = parseInt(priceElementString)

    const discountPriceElement = document.getElementById('discount-price')
    // const discountPriceElementString = discountPriceElement.innerText;
    // const discountPrice = parseInt(discountPriceElementString)

    const discountMoney = price * 0.3
    discountPriceElement.innerText = price - discountMoney
})


document.getElementById('discount-btn').addEventListener('click', function(){
    const mainPriceString = document.getElementById('main-price').innerText
    const mainPrice = parseInt(mainPriceString)
    const discountPrice = document.getElementById('disc-price')
    const discount = mainPrice * 0.3
    discountPrice.innerText = mainPrice - discount
})

document.getElementById('discount-btn').setAttribute('disabled', true)
document.getElementById('promo').addEventListener('keyup', function(e){
    const discountBtn = document.getElementById('discount-btn')
    if(e.target.value !== 'DISC30'){
        discountBtn.setAttribute('disabled', true)
    }
    else{
        discountBtn.removeAttribute('disabled')
    }
})