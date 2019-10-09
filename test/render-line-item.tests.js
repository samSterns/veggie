import veggieArray from '../data/veggie.js';
import { findById } from '../common/utils.js';
import renderLineItem from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', assert => {
    const lineItem = {
        id: 'spinach',
        quantity: 3
    };
    const spinach = findById(veggieArray, lineItem.id);
    const expected = '<tr><td class="align-left">spinach</td><td>3</td><td>$1.00</td><td class="line-item-total">$3.00</td></tr>';

    const dom = renderLineItem(lineItem, spinach);
    const html = dom.outerHTML;
    
    assert.equal(html, expected);
});