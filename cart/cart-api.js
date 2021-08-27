import { findById } from "../utils.js";
// Set 
export function setCart(cartArray) {
    const cartToSet = JSON.stringify(cartArray);
    localStorage.setItem('CART', cartToSet);
}


// Get original
// export function getCart() {
//     const unparsedCart = localStorage.getItem('CART');
//     if (!unparsedCart) {
//         return [];
//     }

//     const parsedCart = JSON.parse(unparsedCart);
//     return parsedCart;
// }

// Get refactored
export function getCart() {
    return JSON.parse(localStorage.getItem('CART') || '[]');
}

// Add and set
export function addToCart(someId, selectedQuantity) {
    const currentCart = getCart();
    const itemInCart = findById(currentCart, someId);
    if (itemInCart) {
        itemInCart.quantity = itemInCart.quantity + selectedQuantity;
    }
    else {
        const newItem = { id: someId, quantity: selectedQuantity };
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
    
    window.location = '../bookshop/shop.html';
}