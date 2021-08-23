import { books } from './books-data.js';
import { renderBooks } from './render-utils.js';

const productsContainer = document.getElementById('products-container');

for (let book of books) {
    const productDiv = renderBooks(book);
    productsContainer.append(productDiv);
}