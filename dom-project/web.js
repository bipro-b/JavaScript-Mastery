// Using function update all cost values


function inputProperties(button,cost){

    const inputCost = document.getElementById(button);
    const totalCostText = inputCost.innerText;
    let totalCost = parseInt(totalCostText);
    totalCost = cost;
    inputCost.innerText=totalCost;
    console.log(totalCost); // 20

    totalPrice();
}

//Total price calculating

function totalPrice(){
    const basePrice = document.getElementById('base-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    const inputTotalPrice = document.getElementById('total-price');

    const totalPrice = parseInt(basePrice) + parseInt(memoryCost)+ parseInt(storageCost) + parseInt(deliveryCost);

    inputTotalPrice.innerText = totalPrice;

    const discountPrice = document.getElementById('discount-price');
    discountPrice.innerText = totalPrice;

}

// count for extra memory

document.getElementById('mbtn-two').addEventListener('click', function(){
    inputProperties('memory-cost',20);
})

document.getElementById('mbtn-one').addEventListener('click', function(){
    inputProperties('memory-cost',0);
})


// count for extra SSD

document.getElementById('sbtn-two').addEventListener('click', function(){
    inputProperties('storage-cost',100);
})

document.getElementById('sbtn-three').addEventListener('click', function(){
    inputProperties('storage-cost',200);
})

document.getElementById('sbtn-one').addEventListener('click', function(){
    inputProperties('storage-cost',0);
})

// Delivery charge count
document.getElementById('dbtn-two').addEventListener('click', function(){
    inputProperties('delivery-cost',30);
})

document.getElementById('dbtn-one').addEventListener('click', function(){
    inputProperties('delivery-cost',0);
})


// Promo code implement

document.getElementById('pomo-btn').addEventListener('click', function(){
    const promoCode = document.getElementById('pomo-code');
    const enteredPromoCode = promoCode.value;

    const calculatedDiscountPrice = document.getElementById('discount-price');

    const discountPriceText =  calculatedDiscountPrice.innerText;

    const discountPrice = parseFloat(discountPriceText);

    if(enteredPromoCode=='pomo'){
        let totalDiscountPrice = discountPrice - discountPrice*0.2;
        calculatedDiscountPrice.innerText = totalDiscountPrice;
        promoCode.value='';
        
        document.getElementById('pomo-btn').disabled= true;
        document.getElementById('pomo-code').disabled=true;
    }
    
})
