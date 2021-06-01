/**
 * Make a copy of the provided array
 */
const arr = [1, 2, 3, 4, 5];

/**
 * Create a function that checks if the given string is palyndrome
 */

function isPalyndrome(str) {

}

isPalyndrome('kayak'); //true
isPalyndrome(1001); //true
isPalyndrome('test'); //false

/**
 * Print in the console the index of the minimal item from the given array
 */

const numbers = [2, 33, 5, 3, 1, 55, 98];

function findMinIndex(arr) {

}

findMinIndex(numbers); //should print 4

/**
 * Write functions:
 * 1. To return a room where the square is max
 * 2. To calculate the square of the room
 * 3. To return a count of unique rooms
 */
const apartment = [{
  name: "bathroom",
  length: 5,
  width: 6
}, {
  name: "hall",
  length: 8,
  width: 6
}, {
  name: "balcony",
  length: 7,
  width: 5
}, {
  name: "balcony",
  length: 6,
  width: 3
}];


describe('Test suite', () => {

  let myString;

  beforeEach(() => {
    myString = 'New string';
  });

  it('first test', () => {
    myString = 'My string';
    console.log(myString);
  });

  it('second test', () => {
    console.log(myString);
  });

});