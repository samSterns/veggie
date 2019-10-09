import renderVeggie from '../products/render-veggie.js';
// import { renderTableRow from '../'

const test = QUnit.test;
QUnit.module('Render Veggie');

test('renders a veggie', assert => {
    const spinach = {
        id: 'spinach',
        class: 'veggie-box',
        name: 'Baby Spinach',
        image: 'spinach.png',
        description: 'Baby spinach image',
        category: 'leafy-greens',
        price: 1.00,
    };
    const expected = '<li id="spinach" class="veggie-box"><div>Baby Spinach</div><img id="image" src="../images-veggie/spinach.png" alt="Baby Spinach image"><div>$1.00</div><button id="spinach">Add to Cart</button></li>';
    
    const dom = renderVeggie(spinach);
    const html = dom.outerHTML;
    
    assert.equal(html, expected);
});

// const appleOrder = {
//     id: 'apple',
//     quantity: 4
// };
// const expected =  <tr><td>apple</td><td>4</td><td>$1.00</td><td>$4.00</td></tr>; 

// const fruitElementTr = renderTableRow(apple, appleOrder);
// const stringHtmlOfFruitElement = fruitElementTr.outerHTML;
// assert.equal