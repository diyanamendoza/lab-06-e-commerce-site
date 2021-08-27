import { addProduct, renderInventory } from "../utils.js";

// getting data from form
const form = document.getElementById('admin-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const book = {
        id: data.get('id'),
        name: data.get('title'),
        image: `../assets/${data.get('id')}.${data.get('image-type')}`,
        description: data.get('description'),
        category: data.get('author'),
        price: Number(data.get('price')),
    };
    

    addProduct(book);

    window.location = '../bookshop/shop.html';
});

// render inventory with buttons

renderInventory();