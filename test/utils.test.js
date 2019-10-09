import veggie from '../data/veggie.js';
// import cart from '../data/cart.js';
import { findById } 
    from '../common/utils.js';
const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id returns null if not found', assert => {
    const id = 'not found';
    const expected = null;

    const foundVeggie = findById(veggie, id);

    assert.equal(foundVeggie, expected);
});
// const makePrettyCurrency = (number) =>
//     number.toLocalString('en-US', 
//         { 
//     style: 'currency', 
//     currency: 'USD' });

// const totalFruitPrice = (fruit, quantity) => fruit.price * quantity;

// export const cartTotal = (veggie, cart) => {

// }