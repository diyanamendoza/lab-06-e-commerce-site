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

    if (!bookInventory || bookInventory === '[]') {
        // if no books yet in local storage, get the books-data array ready to set in local storage
        bookInventory = JSON.stringify(books);
        // now set it
        localStorage.setItem('BOOKS', bookInventory);
    }

    // if getItem('BOOKS') does return books
    const parsedBookInventory = JSON.parse(bookInventory);
    return parsedBookInventory;
}

// addProduct takes a product object as a parameter and puts that product into the correct place in localStorage
export function addProduct(newProduct) {
    // get existing inventory
    let currentInventory = getInventory();

    // console.log(currentInventory);

    // push new product to inventory and stringify it so you can set

    // console.log(newProduct);
    // console.log([...currentInventory, newProduct]);

    //originally had this, but the push was returning the array length
    // const newInventory = JSON.stringify(currentInventory.push(newProduct));

    //had to use spread instead to get it working/passing test
    const newInventory = JSON.stringify([...currentInventory, newProduct]);

    // console.log(newInventory);

    // set new inventory in LS
    localStorage.setItem('BOOKS', newInventory);
}

export function removeProduct(productId) {
    let currentInventory = getInventory();
    let productToRemove = findById(currentInventory, productId);
    let index = currentInventory.indexOf(productToRemove);
    currentInventory.splice(index, 1);

    // get updatedInventory ready to set
    currentInventory = JSON.stringify(currentInventory);
    // set updatedInventory
    localStorage.setItem('BOOKS', currentInventory);

    renderInventory();

}

export function renderInventory () {
    let inventory = getInventory();
    const list = document.getElementById('inventory-list');
    list.textContent = '';

    console.log(inventory);
    for (let item of inventory) {
        const removeButton = document.createElement('button');
        const li = document.createElement('li');

        li.textContent = `${item.name} by ${item.category}`;
        li.classList.add('remove-li');
        removeButton.value = `${item.id}`;
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
    
        removeButton.addEventListener('click', () => {
            confirm(`Are you sure you'd like to remove ${item.title} from the inventory?`);
            if (confirm) {
                removeProduct(item.id);
            }
        });
    
        list.append(removeButton, li);
    }
    };