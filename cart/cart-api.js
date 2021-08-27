import { findById } from "../utils.js";
import { books } from "../bookshop/books-data.js";

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

// Get product inventory array from local storage or, if none, books-data; store it in a const

export const getInventory = () => {
    // pull from local storage
    let bookInventory = localStorage.getItem('BOOKS');

    if (!bookInventory) {
        // if no books yet in local storage, get the books-data array ready to set in local storage
        bookInventory = JSON.stringify(books);
        // now set it
        localStorage.setItem('BOOKS', bookInventory);
    }

    // if getItem('BOOKS') does return books
    const parsedBookInventory = JSON.parse(bookInventory);
    return parsedBookInventory;
}