import 

const makePrettyCurrency = (number) =>
    number.toLocalString('en-US', 
        { 
    style: 'currency', 
    currency: 'USD' });

const totalFruitPrice = (fruit, quantity) => fruit.price * quantity;

export const cartTotal = (fruits, cart) => {

}