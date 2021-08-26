// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { subtract } from '../calculator.js';

const test = QUnit.test;


// name your test by what it is testing
test('subtract two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 3;
    const y = 1;
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
