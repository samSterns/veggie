
import veggieArray from '../veggie.js';
import renderVeggie from './render-veggie.test.js';

const veggieList = document.getElementById('veggie-list');
for (let i = 0; i < veggieList.length; i++) {
    const thisVeggie = veggieList[i];
    const dom = renderVeggie(thisVeggie);
    veggieList.appendChild(dom);
}