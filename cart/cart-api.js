import { findById } from "../utils.js";

// Set 
export function setCart(cartArray) {
    const cartToSet = JSON.stringify(cartArray);
    localStorage.setItem('CART', cartToSet);
}


// Get 
export function getCart() {
    const unparsedCart = localStorage.getItem('CART');
    if (!unparsedCart) {
        return [];
    }

    const parsedCart = JSON.parse(unparsedCart);
    return parsedCart;
}

// Add and set
export function addToCart(someId) {
    const currentCart = getCart();
    const itemInCart = findById(currentCart, someId);
    if (itemInCart) {
        itemInCart.quantity++;
    }
    else {
        const newItem = { id: someId, quantity: 1 };
        currentCart.push(newItem);
    }

    setCart(currentCart);
}



// Alert, clear, bring home
export function clearCart() {
    const cartToClear = getCart();
    const stringOfCartToClear = JSON.stringify(cartToClear, true, 2);
    alert(stringOfCartToClear);

    localStorage.removeItem('CART');
    
    window.location = './bookshop/shop.html';
}