// import { books } from "../bookshop/books-data.js";
import { calcOrderTotal, getInventory } from "../utils.js";
import { clearCart, getCart } from "./cart-api.js";
// import { cartItems } from "./cart-data.js"; 
import { renderTableBody } from "./render-table-body.js";

// Get parent element where the table is going inside
const tableBody = document.querySelector('tbody');

// Loop through cart items and populate table
const cartItems = getCart();

for (let item of cartItems) {
    const tr = renderTableBody(item);
    tableBody.append(tr);
}

// Get element where order total should go
const orderTotal = document.getElementById('total');

// get inventory to be able to cross-reference for pricing
const inventory = getInventory();

orderTotal.textContent = (calcOrderTotal(cartItems, inventory)).toLocaleString('en-US',
{style: 'currency', currency: 'USD'});

// Place order button shenanigans
const placeOrder = document.getElementById('place-order');
const empty = document.getElementById('if-empty');

if (cartItems.length === 0) { 
    placeOrder.disabled = true;
    placeOrder.style.backgroundColor = "gray"; 
    empty.textContent = ('Your cart is an empty valley of sadness.');
};

placeOrder.addEventListener('click', () => {
    clearCart()
});

// Continue shopping button shenanigans
const continueShopping = document.getElementById('continue-shopping');
continueShopping.addEventListener('click', () => {
    window.location = '../bookshop/shop.html';
});