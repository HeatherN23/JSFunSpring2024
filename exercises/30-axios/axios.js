(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use axios in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
  */

  //Listen for the button to get clicked, then get the picture from the url.
  const dogBtn = document.querySelector("#button").addEventListener("click", function (e) {
   
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then( response => {                                //response is the GET returned in object form
          const url = response.data.message;              // the url of the response object
          const image = document.querySelector('#image'); // get the element with the image id
          image.src = url;                                // swap out the urls
        });     
      })
      .catch( function( error ) {
        console.log(error);
      });
  }) ();                                                 // REMEMBER TO INVOKE THE FUNCTION WITH THE ()!!!

/*  ALTERNATE METHOD
  axios({
            method: "GET",
            url: "https://dog.ceo/api/breeds/image/random",
        })
            // If the GET request is successful, the #image elements' source is updated with a new, random image source url.
            .then((response) => {
                const image = document.querySelector("#image");
                image.src = response.data.message;
            })
            // Otherwise, an error is thrown.
            .catch((err) => {
                console.error(err);
            });    
*/
  
