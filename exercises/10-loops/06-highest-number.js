let numbers = [10000, -8, 10, 0.7]; // e.g.

/**
 * Create a variable called "highest".
 * Loop through the array using a for loop (or for ... of loop) and return the highest number.
 * Set "highest" to the highest number.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

let highest = 0;
const findHighest = () => {  
  for( let i = 0 ; i < numbers.length ; i++) {  
    if ( numbers[i] > highest ){            
      highest = numbers[i];       
    }  
  } 
  return highest;
};

highest = findHighest();
console.log("Highest value is: " + highest);

