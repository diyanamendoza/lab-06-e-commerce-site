// import { books } from '../bookshop/books-data.js';
import { findById, getInventory } from '../utils.js';
import { calcItemTotal } from '../utils.js';

export function renderTableBody(cartItem) {
    //Create parent for table body
    const cartTableTr = document.createElement('tr');

    //Create table children
    const cartItemTitle = document.createElement('td');
    const cartItemQuantity = document.createElement('td');
    const cartPerItemTotal = document.createElement('td');

    //Append children to parent
    cartTableTr.append(cartItemTitle, cartItemQuantity, cartPerItemTotal);

    //Give 'em classy ish
    cartItemTitle.classList.add('item-title');
    cartItemQuantity.classList.add('item-quantity');
    cartPerItemTotal.classList.add('item-price-total');

    //Get book object data ready
    const inventory = getInventory();
    const item = findById(inventory, cartItem.id);
    //Get the approp data into the elements
    cartItemTitle.textContent = item.name;
    cartItemQuantity.textContent = cartItem.quantity;
    cartPerItemTotal.textContent = (calcItemTotal(cartItem.quantity, item.price)).toLocaleString('en-US',
    {style: 'currency', currency: 'USD'});

    return cartTableTr;
}