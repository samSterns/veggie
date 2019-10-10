import { findById } from '../common/utils.js';
import { getCart } from '../shopping-cart/shopping-cart.js';

function renderVeggie(veggie) {
    
    const li = document.createElement('li');
    li.setAttribute('id', veggie.id);
    li.className = veggie.class;
    

    const div = document.createElement('div');
    div.textContent = veggie.name;
    li.appendChild(div);
    div.class = veggie.name;

    const img = document.createElement('img');
    img.id = 'image';
    img.src = '../images-veggie/' + veggie.image;
    img.alt = veggie.name + ' image';
    li.appendChild(img);

    const usd = '$' + veggie.price.toFixed(2);

    const priceDiv = document.createElement('div');
    priceDiv.textContent = usd;
    li.appendChild(priceDiv);
    
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.id = veggie.id;
    
    button.addEventListener('click', () => {
        let cart = getCart();
        if(!cart) {
            cart = [];
        }

        let lineItem = findById(cart, veggie.id);

        if(!lineItem) {
            lineItem = {
                id: veggie.id,
                quantity: 1
            };

            cart.push(lineItem);
        } else {
            lineItem.quantity++;
        }

        let json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        alert('1' + veggie.name + 'added to cart');
    });

    div.appendChild(button);

    li.appendChild(div);

    return li;
}
export default renderVeggie;