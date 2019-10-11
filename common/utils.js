import getCart from '../shopping-cart/shopping-cart';

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

export function calcOrderTotal(cart, veggieArray) {
    let orderTotal = 0;
    let cart = getCart();
    for(let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const veggie = findById(veggieArray, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, veggie.price);
        orderTotal += lineTotal;
    }
    return roundCurrency(orderTotal);
}
export const makePrettyCurrency = (number) =>
    number.toLocalString('en-US', { 
        style: 'currency', 
        currency: 'USD' });

export const totalVeggiePrice = (veggie, quantity) => veggie.price * quantity;