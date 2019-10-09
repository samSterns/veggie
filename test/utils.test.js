import veggieArray from '../data/veggie.js';
// import cart from '../data/cart.js';
import { findById, calcLineItem } 
    from '../common/utils.js';
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
        price: 1.00,
        cost: 0.25
    };

    const foundVeggie = findById(veggieArray, id);

    assert.ok(foundVeggie);
    assert.deepEqual(foundVeggie, expected);
});

test('calculate line total', (assert) => {
    // arrange
    const quantity = 3;
    const price = 2.01;
    const expected = 6.03;

    // act 
    const total = calcLineItem(quantity, price);

    // assert
    assert.equal(total, expected);
});

// const makePrettyCurrency = (number) =>
//     number.toLocalString('en-US', 
//         { 
//     style: 'currency', 
//     currency: 'USD' });

// const totalFruitPrice = (fruit, quantity) => fruit.price * quantity;

// export const cartTotal = (veggie, cart) => {

// }