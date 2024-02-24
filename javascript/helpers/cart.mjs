import { updateCartTotal } from "./calculator.mjs";


export const displayCart = (cart) => {
    let cartRow = document.getElementById('itemRow');
    cartRow.innerHTML = '';

    cart.forEach(item => {
        makeCartItem(item);
    });

    updateCartTotal(cart);
};

export const addItemToCart = (jacketInfo) => {
    let jacket = JSON.parse(jacketInfo);
    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log(cart);
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].title === jacket.title) { 
            alert("This item is already in your cart");
            return;
    }}
    cart.push(jacket);
    localStorage.setItem('cartItems', JSON.stringify(cart));
    displayCart(cart);
};

const makeCartItem = (item) => {
    let cartRow = document.getElementById('itemRow');

    let cartItem = document.createElement('div');
    cartItem.classList = "cart-item";

    let cartItemTitle = document.createElement('h2');
    cartItemTitle.textContent = item.title;

    let image = document.createElement('img');
    image.src = item.image.url;
    image.alt = item.image.alt;
    image.classList = "cart-image";
    

    let cartItemPrice = document.createElement('p');
    cartItemPrice.textContent = item.price + 'kr';

    let removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList = "remove-button";
    removeButton.addEventListener('click', () => {
        removeItem(item);
    });

    cartItem.append(image, cartItemTitle, cartItemPrice, removeButton);
    cartRow.appendChild(cartItem);
};

const removeItem = (jacket) => {
    let cart = JSON.parse(localStorage.getItem('cartItems'));
    cart = cart.filter (item => item.title !== jacket.title)
    localStorage.setItem('cartItems', JSON.stringify(cart));
    displayCart(cart);
};