let str = "Wes Craven"; // e.g.

/***
 * Create a constant called "lastCharacter". It should be equal to the last character within "str".
 * @example
 * let str = "Wes Craven";
 * "lastCharacter" should equal "n"
 * Your answer should still work when "str" is equal to something else.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let strLength = str.length;
console.log(strLength);
const lastCharacter = str.substring(strLength-1);
console.log(lastCharacter);
