import { addItemToCart, displayCart } from "../helpers/cart.mjs";


const runPage =  () => {
    jacketItem(JSON.parse(localStorage.getItem('jacket')));
    
    document.addEventListener('DOMContentLoaded', () => {
        let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        displayCart(cart);
    });
}



const jacketItem = (jacket) => {
    let main = document.querySelector('main');

    // Create container for the specific jacket details
    let specificJacket = document.createElement('div');
    specificJacket.classList = "specific-jacket";

    // Create product info container
    let productInfo = document.createElement('div');
    productInfo.classList = "product-info";

    // Create image element
    let jacketImage = document.createElement('img');
    jacketImage.src = jacket.image.url;
    jacketImage.alt = jacket.image.alt;

    // Create product details container
    let productDetails = document.createElement('div');
    productDetails.classList = "product-details";
    // Create heading for jacket title
    let h2 = document.createElement('h2');
    h2.classList = "jackettitle";
    h2.textContent = jacket.title;

    // Create paragraph for jacket description
    let p = document.createElement('p');
    p.classList = "jackettext";
    p.textContent = jacket.description;

    // Create price element
    let priceDiv = document.createElement('div');
    priceDiv.classList = "price";
    let priceH2 = document.createElement('h2');
    priceH2.textContent = "Price " + jacket.price + 'kr';
    priceDiv.appendChild(priceH2);

    // Create sizes container
    let sizes = document.createElement('div');
    sizes.classList = "sizes";
    // Loop through sizes array and create size buttons
    jacket.sizes.forEach(size => {
        let sizeButton = document.createElement('button');
        sizeButton.classList = "size";
        sizeButton.textContent = size;
        sizeButton.addEventListener('click', () => selectSize(sizeButton)); // Legg til en lytter for størrelsesvalg
        sizes.appendChild(sizeButton);
    });

    // Create add to cart button
    let addButton = document.createElement('button');
    addButton.type = "button";
    addButton.textContent = "Add to cart";
    addButton.addEventListener('click', () => {
        localStorage.setItem("cartJacket", JSON.stringify(jacket)); 
        addItemToCart(localStorage.getItem('cartJacket')); // Legg til en lytter for å legge til i handlekurv
    });



    // Append elements to their respective parents
    main.appendChild(specificJacket);
    specificJacket.appendChild(productInfo);
    productInfo.appendChild(jacketImage);
    productInfo.appendChild(productDetails);
    productDetails.append(h2, p, priceDiv, sizes, addButton);
    return specificJacket;
}

runPage();