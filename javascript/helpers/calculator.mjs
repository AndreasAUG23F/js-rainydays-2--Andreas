export const updateCartTotal = (cart) => {
    let initialValue = 0; 

 // here it checks if its the discount price or reg price and returns the price.
    const reduceFunction = (cartTotal, jacket) => {
        let discount = jacket.price - jacket.discountedPrice
        if (discount > 0){
            return cartTotal + jacket.discountedPrice
        }else {
            return cartTotal + jacket.price
        }

    }
    //updatedCartTotal take the return value from reducefuntion and adds it with the initialvalue
    let updatedCartTotal = cart.reduce(reduceFunction, initialValue) 

    let inputCartTotal = document.getElementById("totalPrice")
    inputCartTotal.innerText = "kr" + Math.round(updatedCartTotal *100)/100 //makes the number not go to the moon in decimals


}

export const calculateOfficialPrice = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));
    let officialPriceText = document.getElementById("officialPrice");

    let Price = cartItems.reduce((priceTotal, item) => {
        return priceTotal + item.price;
    }, 0);

    let officialPrice = Math.round(Price * 100) / 100;
    officialPriceText.innerText = "kr" + officialPrice;
};

export const calculateDiscountValue = () => {
    let discountValue = document.getElementById("discount");
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));

    let discount = cartItems.reduce((priceTotal, item) => {
        return priceTotal + item.price - item.discountedPrice;
    }, 0);

    let roundedDiscount = Math.round(discount * 100) / 100;
    discountValue.innerText = "kr" + roundedDiscount;
};

export const calculateSubTotalValue = () => {
    let subTotalValue = document.getElementById("subtotal");
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));

    let price = cartItems.reduce((priceTotal, item) => {
    let discount = item.price - item.discountedPrice;
    return priceTotal + item.price - discount;
    }, 0);

    let roundedPrice = Math.round(price * 100) / 100;
    subTotalValue.innerText = "kr" + roundedPrice;
};