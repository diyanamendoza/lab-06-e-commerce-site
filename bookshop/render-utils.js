import { addToCart } from "../cart/cart-api.js";
import { getInventory } from "../utils.js";

export function renderBooks(book) {
    const bookDiv = document.createElement('div');
    const imgCover = document.createElement('img');
    const bookTitle = document.createElement('h2');
    const categoryAuthorP = document.createElement('h3');
    const descriptionP = document.createElement('p');
    const priceP = document.createElement('p');
    const addButton = document.createElement('button');
    const dropDown = document.createElement('select');

    // dropDown stuff
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let number of numbers) {
        const option = document.createElement('option');
        option.textContent = number;
        option.value = number;
        dropDown.appendChild(option);
    }


    bookDiv.classList.add('product');
    imgCover.classList.add('book-cover');
    categoryAuthorP.classList.add('category-author');
    descriptionP.classList.add('description');
    priceP.classList.add('price');
    addButton.classList.add('add');

    imgCover.src = book.image;
    bookTitle.textContent = book.name;
    categoryAuthorP.textContent = book.category;
    descriptionP.textContent = book.description;
    priceP.textContent = book.price.toLocaleString('en-US',
    {style: 'currency', currency: 'USD'});

    addButton.value = book.id;
    addButton.textContent = 'Add to cart';

    bookDiv.append(imgCover, bookTitle, categoryAuthorP, descriptionP, priceP, dropDown, addButton);

    addButton.addEventListener('click', () => {
        alert(`Yay! ${book.name} will be added to your cart.`);
        let selectedQuantity = Number(dropDown.value);
        addToCart(book.id, selectedQuantity);
    })

    return bookDiv;
}

export function renderAuthorSelect () {
    const authorSelectDiv = document.getElementById('author-select');
    const authorSelect = document.createElement('select');
    const inventory = getInventory();
    console.log(inventory);

    let authorArray = [];
    for (let item of inventory) {
        authorArray.push(item.category);
    }

    let uniqueAuthorArray = ['All'];
    authorArray.forEach((author) => {
        if (!uniqueAuthorArray.includes(author)) {
            uniqueAuthorArray.push(author);
        }
    });

    for (let author of uniqueAuthorArray) {
        const option = document.createElement('option');
        option.textContent = author;
        option.value = author;
        authorSelect.appendChild(option);
    }

    authorSelectDiv.append(authorSelect);
}

export function renderFilterButton () {
    const filterButton = document.createElement('button');
    const authorSelectDiv = document.getElementById('author-select');

    filterButton.textContent = 'Filter';
    filterButton.classList.add('filter-button');
    filterButton.setAttribute('id', 'filter-button');
    authorSelectDiv.append(filterButton);
}