import { getInventory } from '../utils.js';
// import { books } from './books-data.js';
import { renderBooks } from './render-utils.js';

const productsContainer = document.getElementById('products-container');
const currentInventory = getInventory();

for (let book of currentInventory) {
    const productDiv = renderBooks(book);
    productsContainer.append(productDiv);
}

