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
<<<<<<< Updated upstream
 * Calculate a century by given year if a number is passed
 * @param {number} year
 * @return {num} century
 * @example
 * console.log(centuryFromYear(1705)) // 18
 * console.log(centuryFromYear(1900)) // 19
 * console.log(centuryFromYear(1601)) // 17
 */
function centuryFromYear(year) {

}

/**
 * Write functions:
 * 1. To return the max square (optionally: name of the room)
 * 2. To calculate the square of the apartment
 * 3. To return a count of unique room's names
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

const promiseOne = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('FIRST!');
    }, 1000);
  });
};

const promiseTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('SECOND!');
    }, 500);
  });
};