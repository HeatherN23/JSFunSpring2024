(function () {
  /**
   * You have a few problems to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  // Write your answer here



  /**
   * Problem 1: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  
  // TARGET THE FORM, AND THE SEARCH BOX AND THE RESULTS
  const form= document.querySelector('#form'); 
  const results= document.querySelector('#results');
  const search = document.querySelector("#search");
  
  // ADD THE EVENT LISTENER TO THE WHOLE FREAKING FORM
  form.addEventListener("submit", (e) => {
    e.preventDefault();                     // REVENT THE FORM FROM REFRESSING
    const displayResults = search.value;
    console.log(displayResults);
    results.textContent=`No results for ${displayResults} found`; 
  });

  /**
   * Problem 2: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To see an example of what this looks like:
   * When the page loads, @see terms-on-load.png
   * When the user clicks on the "Continue" button without checking the "I Agree ..." checkbox,
   * @see terms-on-error.png
   * When the user checks the "I Agree ..." checkbox and click "Continue",
   * @see terms-on-success.png
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here

  /*
  const agreementForm = document.querySelector('#agreement');  
  const terms = document.querySelector('#terms');         //checkbox
  
  // On loading the page the msgs need to be hidden.
  const warning = document.querySelector('#warning');     //warning block
  const success = document.querySelector('#success');     // thankyou block
  warning.style.display = "none";
  success.style.display = "none";

  agreementForm.addEventListener("submit", (e) => {
    e.preventDefault();  
   
    // If the Continue Button has been clicked and the box isn't checked, display error msg
    if( !agreementForm.terms.checked ) {
      terms.classList.add("is-invalid");       // change font to red
      warning.style.display = "block";
      success.style.display = "none";

    } else {                                  // The box is checked:  display success msg
      terms.classList.remove("is-invalid");   // change font to black
      warning.style.display = "none";
      success.style.display = "block";
    }

   });
*/
})();
