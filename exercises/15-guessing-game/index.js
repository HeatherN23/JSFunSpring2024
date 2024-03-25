//let readlineSync = require('readline-sync');
import prompt from "readline-sync";

// THIS FUNCTION TAKES THE NUMBER GUESSED BY THE USER AND EVALUATES IT FOR CORRECTNESS
const evaluateGuess = ( guess ) => {
  if (guess == randNum) {
    console.log("Correct!"); 
    return true;                      
  } else if (guess < randNum) {
      console.log("Too low!");     // return "Too Low! Try Again!"
      return false;
  } else if (guess > randNum) {
      console.log("Too high!");    // return "Too High! Try Again!"
      return false;
  }
};

// VARIABLES
const max_Guesses = 5;                             // The user gets 5 guesses
let numGuesses = 0;                               // Initialize the number of guesses
let isValidGuess = false;
let numFound = false;
let playAgain;

let randNum = Math.floor(Math.random() * 10 + 1 );      // Generate a random number betwee 1 & 10
console.log("Random number is: " + randNum);            // For testing purposes

// Greet the user
console.log("\nWelcome to the Guessing Game!\nPress ctrl+c to stop\n");

while ( numGuesses < max_Guesses && !numFound ){        // Validate number of guesses & whether the nubmer has been found
  
  let guess = prompt.question("Please guess a number between 1 and 10: ");   // Get the user's guess
  numGuesses++;                                         // increment number of guesses
  isValidGuess=( guess > 0 && guess <= 10 );            // Validate the guess   
  if( isValidGuess  ){    
     numFound = evaluateGuess( guess );                 // Call the function to evaluate the guess   
  } else {
    console.log("Number is invalid!");                  // Display an error msg
  }   
} 

if( numFound ){
  console.log("Nicely played!");  
} else if (numGuesses < max_Guesses) {
  console.log("Try again!");
} else {
  console.log("Sorry you ran out of guesses.");
}

//  PUT ALL THE ABOVE IN A WHILE LOOP THAT IS BASED ON THE FLAG CONTINUE (IS YES = TRUE FOR BOOLEAN?)
/*playAgain = prompt.question("Would you like to play again? y/n:");
if ( playAgain ) {            // reset all the variables
  numGuesses = 0;
  isValidGuess = false;
  numFound = false;
}*/

