import { calculateOfficialPrice, calculateDiscountValue, calculateSubTotalValue } from "../helpers/calculator.mjs";

const runPage =  () => {
    checkoutList(JSON.parse(localStorage.getItem('cartItems')));
    

}




const checkoutList = (cart) => {
    let cartRow = document.getElementById('cartItems');
    cartRow.innerHTML = '';
        if (cart === null) {
            cartIsEmpty()
        } else {
            cart.forEach(item => {
                makeCartItem(item);
            });
            calculateOfficialPrice();
            calculateDiscountValue();
            calculateSubTotalValue();
        }
};

const cartIsEmpty = () => {
    let cartRow = document.getElementById('cartItems');
    let emptyCart = document.createElement('div');
    emptyCart.classList = "empty-cart";
    let emptyCartText = document.createElement('h2');
    emptyCartText.textContent = "Your cart is empty";
    emptyCart.appendChild(emptyCartText);
    cartRow.appendChild(emptyCart);
};

const makeCartItem = (item) => {
    let cartRow = document.getElementById ('cartItems')
    
    let cartItem = document.createElement('div');
    cartItem.classList = "cart-item";

    let image = document.createElement('img');
    image.src = item.image.url;
    image.alt = item.image.alt;
    image.classlist = "cartImage";

    let jacketTitle = document.createElement('h2');
    jacketTitle.textContent = item.title;

    let jacketPrice = document.createElement('p');
    if (item.discountedPrice === item.price) {
        jacketPrice.textContent = item.price + 'kr';
    }else {
        jacketPrice.textContent = item.discountedPrice + 'kr';
    }

    let removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList = "remove-button";
    removeButton.addEventListener('click', () => {
        removeItemFromCheckout(item);
    });


    //append
    cartRow.appendChild(cartItem);
    cartItem.append(image, jacketTitle, jacketPrice, removeButton);
};

const removeItemFromCheckout = (jacket) => {
    let cart = JSON.parse(localStorage.getItem('cartItems'));
    cart = cart.filter (item => item.title !== jacket.title)
    localStorage.setItem('cartItems', JSON.stringify(cart));
    checkoutList(cart);
};


runPage();