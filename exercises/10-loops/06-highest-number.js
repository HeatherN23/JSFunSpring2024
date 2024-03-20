//let numbers = [10000, -8, 10, 0.7]; // e.g.
let numbers = [5, 15, 7, 100];

/**
 * Create a variable called "highest".
 * Loop through the array using a for loop (or for ... of loop) and return the highest number.
 * Set "highest" to the highest number.
 */

// WRITE YOUR ANSWER BELOW THIS LINE


const findHighest = () => {  
  let highest = 0;  
  for( let i = 0 ; i < numbers.length ; i++) {  
    console.log("Iteration: " + i);
    console.log("Value is: " + numbers[i]);
    if ( numbers[i] > highest ){            
      highest = numbers[i];  
      console.log("Value of Highest is: " + highest); 
    }          
  }
  return highest;
};

console.log("Highest value is: " + findHighest());
