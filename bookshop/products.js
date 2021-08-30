import { findById, findByKey, getInventory } from '../utils.js';
import { books } from './books-data.js';
import { renderAuthorSelect, renderBooks, renderFilterButton } from './render-utils.js';

renderAuthorSelect();
renderFilterButton();

let authorSelect = document.querySelector('select').value;
const filterButton = document.getElementById('filter-button');

const productsContainer = document.getElementById('products-container');
const currentInventory = getInventory();

displayAll();

function displayAll() { 
        for (let book of currentInventory) {
            let productDiv = renderBooks(book);
            productsContainer.append(productDiv);
        }
    };

filterButton.addEventListener('click', () => {
    // grab value in dropdown
    authorSelect = document.querySelector('select').value;

    // clear the product div
    let toRemove = productsContainer.getElementsByClassName('product');
    for (let i = toRemove.length-1; i>=0; i--) {
        let childNode = toRemove[i];
        childNode.parentNode.removeChild(childNode);
    }

    // if all is selected, display all
    if (authorSelect === 'All') {
        displayAll();
    }
    // if a specific author is selected, only display books by that author
    else {
        let booksFiltered = findByKey(currentInventory, 'category', authorSelect);

        for (let book of booksFiltered) {
            let filteredDiv = renderBooks(book);
            productsContainer.append(filteredDiv);
        }
    }

});