// IMPORT MODULES under test here:

import { getCart } from "../cart/cart-api.js";


const test = QUnit.test;

test('getCart should return an empty array if the key passed to localStorage.getItem has no value', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [];
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getCart();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
