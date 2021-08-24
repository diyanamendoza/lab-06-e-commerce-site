// IMPORT MODULES under test here:
import { renderBooks } from '../bookshop/render-utils.js';
import { renderTableBody } from '../cart/render-table-body.js';
import { findById, calcItemTotal, calcOrderTotal } from '../utils.js';
import { books } from '../bookshop/books-data.js'
import { cartItems } from '../cart/cart-data.js';

const test = QUnit.test;

test('calcOrderTotal should take in cartArray, productArray and provide the total of all items in cart', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 98.35;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(cartItems, books);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('calcItemTotal should take in quantity and price and return the product', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 30;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(3, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('findById should take in an id and return the correct product object data from the specified array of objects', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 1,
        name: 'The Killing Moon',
        image: '../assets/1.jpg',
        description: 'Assassin priests, mad kings, and the goddess of death collide in the first book of the Dreamblood Duology by NYT bestselling and three time Hugo-Award winning author N. K. Jemisin.',
        category: 'N.K. Jemisin',
        price: 15.63
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(books, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('renderBooks should take in a game and return the correct HTML elements', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="product"><img class="book-cover" src="../assets/1.jpg"><h2>The Killing Moon</h2><h3 class="category-author">N.K. Jemisin</h3><p class="description">Assassin priests, mad kings, and the goddess of death collide in the first book of the Dreamblood Duology by NYT bestselling and three time Hugo-Award winning author N. K. Jemisin.</p><p class="price">$15.63</p><button class="add">1</button></div>`;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBooks({
        id: 1,
        name: 'The Killing Moon',
        image: `../assets/1.jpg`,
        description: 'Assassin priests, mad kings, and the goddess of death collide in the first book of the Dreamblood Duology by NYT bestselling and three time Hugo-Award winning author N. K. Jemisin.',
        category: 'N.K. Jemisin',
        price: 15.63
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderTableBody should take in cartItem and return the corret HTML elements', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr><td class="item-title">The Unbroken</td><td class="item-quantity">2</td><td class="item-price-total">$31.26</td></tr>`;

    // Call the function you're testing and set the result to a const
    const actual = renderTableBody(
        {id: 2, quantity: 2},
        );

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
