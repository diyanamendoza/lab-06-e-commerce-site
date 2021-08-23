// IMPORT MODULES under test here:
import { renderBooks } from '../bookshop/render-utils.js';

const test = QUnit.test;

test('renderBooks should take in a game and return the corret HTML elements', (expect) => {
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
