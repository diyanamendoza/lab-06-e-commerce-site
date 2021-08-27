import { books } from "../bookshop/books-data.js";


export function findById(productArray, id) {
    for (let product of productArray) {
        if (product.id === id) {
            return product;
        }
    }
}

export function calcItemTotal(quantity, price) {
    return quantity * price; 
}

export function calcOrderTotal(cartArray, productArray) {
    let orderTotal = 0;
    let itemPrice = 0;
    for (let item of cartArray) {
        itemPrice = (findById(productArray, item.id)).price;
        orderTotal = orderTotal + (calcItemTotal(item.quantity, itemPrice));
    }
    return Math.round(orderTotal * 100) / 100;
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