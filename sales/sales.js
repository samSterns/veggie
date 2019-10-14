import veggieArray from '../data/veggie.js';
import { findById } from '../common/utils.js';
import renderLineItem from '../shopping-cart/render-line-item.js';

const tbody = document.querySelector('tbody');

export const getCart = () => {
    console.log('made it here');
    return JSON.parse(localStorage.getItem('CART')) || [];
};

let cart = getCart();

if(cart && tbody) {
    for(let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const veggie = findById(veggieArray, lineItem.id);
        const dom = renderLineItem(lineItem, veggie);

        tbody.appendChild(dom);
    } 
}