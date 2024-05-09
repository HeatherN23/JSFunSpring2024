(function () {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */
    
    async function updateQuote(){  
      try  { 
        let response = await axios.get('https://ron-swanson-quote.herokuapp.com/v2/quotes');     // get the quote from the url        
        const newQuote = response.data;                               // data of the response object
        const quote = document.querySelector("#quote");               // get the quote element
        quote.textContent = newQuote;                                 // display the new quote.      
        }
        catch(error){
        console.error(error);
        const quote = document.querySelector("#quote");
        quote.textContent = "ERROR!!  " + error;

      }
      
    }
    const btn = document.querySelector(".btn");
    btn.addEventListener('click', updateQuote);
    
 
  })();
  