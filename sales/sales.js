import veggieArray from '../data/veggie.js';
import findById from '../common/utils.js';
import renderLineItem from '../shopping-cart/render-line-item.js';


// export const renderSalesTable() => {

// }

const tbody = document.querySelector('tbody');

export const getSale = () => {
    return JSON.parse(localStorage.getItem('SALE')) || [];
};

let sale = getSale();

if(sale && tbody) {
    for(let i = 0; i < sale.length; i++) {
        const lineItem = sale[i];
        const veggie = findById(veggieArray, lineItem.id);
        const dom = renderLineItem(lineItem, veggie);

        tbody.appendChild(dom);
    } 
}