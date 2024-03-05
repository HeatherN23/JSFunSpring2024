/**
 * Create a function called "countNumberOfDigits".
 * Given an integer, it should return the number of digits in an integer.
 *
 * @param {int} num
 * @returns {int} the number of digits
 *
 * @example countNumberOfDigits(5000); // 4
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const countNumberOfDigits = ( num ) => {  
  let strNum = num.toString();     // to find the length of an integer, conver to string
  let length = strNum.length;      // get the length of the string  
  return length;
}

let length = countNumberOfDigits ( 3565545 );
console.log( length );
