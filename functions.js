"use strict";


// 1. isHometown

function isHometown(town){
    return town === 'San Francisco'
}
const isHometown2 = (town) => town === 'San Francisco';
    console.log(isHometown('Athens'));

// 2. getFullName

const getFullName = (firstName, lastName) => `${firstName} ${lastName}` 
    console.log(getFullName('fatima', 'Alhammouri'));

// 3. calculateTotal
function calculateTotal (basePrice, state, tax=0.05){
    let subtotal = basePrice * (1 + tax);
    let fee = 0;

    if (state === 'CA'){
        fee = 0.03 * subtotal;
    }
    else if (state === 'PA'){
        fee = 2;
    }
    else if (state === 'MA'){
        if (basePrice <= 100) {
            fee = 1;
        }
        else {
            fee = 3;
        }
    }
    return subtotal + fee;
}
console.log(calculateTotal(100, 'CA', 0.01))
 
