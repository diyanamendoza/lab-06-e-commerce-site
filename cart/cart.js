import { books } from "../bookshop/books-data.js";
import { calcOrderTotal } from "../utils.js";
import { cartItems } from "./cart-data.js"; 
import { renderTableBody } from "./render-table-body.js";

// Get parent element where the table is going inside
const tableBody = document.querySelector('tbody');

// Loop through cart items and populate table
for (let item of cartItems) {
    const tr = renderTableBody(item);
    tableBody.append(tr);
}

// Get element where order total should go
const orderTotal = document.getElementById('total');

orderTotal.textContent = (calcOrderTotal(cartItems, books)).toLocaleString('en-US',
{style: 'currency', currency: 'USD'});