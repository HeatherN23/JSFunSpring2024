let string = "racecar";

/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 *
 * Create a variable called "isPalindrome".
 * It should equal true if "string" is a palindrome
 * and false if it is not.
 *
 * Use the split and join methods to solve this problem.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let isPalindrome=false;

//const skillString = "JavaScript, React, CSS";
let newString1= string.split("");
let newString2 = string.split("");
console.log(newString1);
console.log(newString2);

newString2.reverse();
console.log(newString2);

newString1 = newString1.join("");
console.log(newString1);
newString2 = newString2.join("");
console.log(newString2);

if( newString1 === newString2 ) {
  isPalindrome=true;
}

console.log(isPalindrome);

