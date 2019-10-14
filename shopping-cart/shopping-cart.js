import veggieArray from '../data/veggie.js';
import { findById } from '../common/utils.js';
import { calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');

export const getCart = () => {
    console.log('made it here');
    return JSON.parse(localStorage.getItem('CART')) || [];
};

let cart = getCart();

if(cart.length === 0 && placeOrderButton) {
    placeOrderButton.disabled = true;
}
else if(placeOrderButton) {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}

if(cart && tbody) {
    for(let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const veggie = findById(veggieArray, lineItem.id);
        const dom = renderLineItem(lineItem, veggie);

        tbody.appendChild(dom);
    } 
}

if(orderTotalCell) {
    const orderTotal = calcOrderTotal(cart, veggieArray);
    orderTotalCell.textContent = toUSD(orderTotal);
}