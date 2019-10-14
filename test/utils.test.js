import veggieArray from '../data/veggie.js';
import { findById, calcLineItem, calcOrderTotal } 
    from '../common/utils.js';
import { getCart } from '../shopping-cart/shopping-cart.js';
const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id returns null if not found', assert => {
    const id = 'not found';
    const expected = null;
    const foundVeggie = findById(veggieArray, id);
    assert.equal(foundVeggie, expected);
});
test('find product by id', assert => {
    const id = 'spinach';
    const expected = {
        id: 'spinach',
        name: 'spinach',
        image: 'spinach.png',
        description: 'Listen to Popeye but eat it fresh',
        category: 'leafy-greens',
        price: 2.00
    };
    const foundVeggie = findById(veggieArray, id);
    assert.ok(foundVeggie);
    assert.deepEqual(foundVeggie, expected);
});

test('calculate line total', (assert) => {
    const quantity = 3;
    const price = 2.01;
    const expected = 6.03;

    const total = calcLineItem(quantity, price);

    assert.equal(total, expected);
});

test('calculate line total', (assert) => {
    const quantity = 3;
    const price = 2.01;
    const expected = 6.03;
    const total = calcLineItem(quantity, price);
    assert.equal(total, expected);
});

test('calculate order total', (assert) => {
    const cart = [
        {
            'id': 'yellow-squash',
            'quantity': 1
        },
        {
            'id': 'chard',
            'quantity': 1
        }
    ];
    const expected = 3.04;

    const orderTotal = calcOrderTotal(cart, veggieArray);

    assert.equal(orderTotal, expected);
});