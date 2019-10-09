export function findById(items, id) {
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        if(item.id === id) {
            return item;
        }
    }
    return null;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}

export function calcLineItem(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}
function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

// export function calcOrderTotal(cart, fruits) {
//     let orderTotal = 0;

//     for(let i = 0; i < cart.length; i++) {
//         const lineItem = cart[i];
//         const fruit = findById(fruits, lineItem.id);
//         const lineTotal = calcLineTotal(lineItem.quantity, fruit.price);
//         orderTotal += lineTotal;
//     }

//     return roundCurrency(orderTotal);
// }