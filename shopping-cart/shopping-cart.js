import veggieArray from '../data/veggie.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');

export const getCart = () => {
    JSON.parse(localStorage.getItem('Cart'));
};

let cart = getCart();
if(cart) {
    for(let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const veggie = findById(veggieArray, lineItem.id);
        const dom = renderLineItem(lineItem, veggie);

        tbody.appendChild(dom);
    }
} 

const orderTotal = calcOrderTotal(cart, veggieArray);
orderTotalCell.textContent = toUSD(orderTotal);

if(getCart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed:\n' + JSON.stringify(getCart, true, 2));
        window.location = '../';
    });
}