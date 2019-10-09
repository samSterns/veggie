import cart from '../data/cart.js';
import veggieArray from '../data/fruits.js';
import { findById, calcOrderTotal, toUSD } 
    from '../common/utils.js';
import renderLineItem 
    from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for(let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const veggie = findById(veggieArray, lineItem.id);
    const dom = renderLineItem(lineItem, veggie);

    tbody.appendChild(dom);
}

// const orderTotal = calcOrderTotal(cart, veggieArray);
// orderTotalCell.textContent = toUSD(orderTotal);