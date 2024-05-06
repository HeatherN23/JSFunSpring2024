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
      .then( response => {
        console.log(response);
        //const dogImg = document.querySelector("#image") 
          const url = response.data.message;
          const image = document.querySelector('#image');
          image.src = url;
        }) // success*/       
      })
      .catch( function( error ) {
        console.log(error);
      });
  }) ();


  
