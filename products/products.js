import veggieArray from '../data/veggie.js';
import renderVeggie from './render-veggie.js';

const veggieList = document.getElementById('veggie-list');
for(let i = 0; i < veggieArray.length; i++) {
    const thisVeggie = veggieArray[i];
    const dom = renderVeggie(thisVeggie);
    veggieList.appendChild(dom);
}
