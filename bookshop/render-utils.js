import { addToCart } from "../cart/cart-api.js";

export function renderBooks(book) {
    const bookDiv = document.createElement('div');
    const imgCover = document.createElement('img');
    const bookTitle = document.createElement('h2');
    const categoryAuthorP = document.createElement('h3');
    const descriptionP = document.createElement('p');
    const priceP = document.createElement('p');
    const addButton = document.createElement('button');

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
    priceP.textContent = `$${book.price.toFixed(2)}`;
    addButton.value = book.id;
    addButton.textContent = 'Add to cart';

    bookDiv.append(imgCover, bookTitle, categoryAuthorP, descriptionP, priceP, addButton);

    addButton.addEventListener('click', () => {
        alert(`Yay! ${book.name} will be added to your cart.`);
        
        addToCart(book.id);
    })

    return bookDiv;
}