(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   * 
   */

  // load the Dropdown with a list of characters
  getCharacterList();
  
  async function getCharacterList()  {

    let characterDD = document.querySelector("#dropdown");
    let characterID;

    try {
      let characterList = await axios.get('https://rickandmortyapi.com/api/character');  // Use the api request to get a list of characters
      let ddHtml =`<option>Select one of these fine characters character</option>`;
      console.log(ddHtml);
      

      // for each character, display the text in dropdown, and add an event listener
      for await ( let character of characterList.data.results ) {        
        //character = character.name ;
        //characterID = character.id;
        console.log( "The character name is:" + character.name );        
        console.log("The character.id is " + character.id);
        //console.log(typeof(character.id));
        //let id = parseInt(character.results.id);
        //console.log("The ID is " + id);
        ddHtml += `<option value="${character.id}"> ${character.name} </option>`;
      }

      characterDD.innerHTML = ddHtml;                       // display the list of characters in DD
    }
    catch(error) {
      console.error(error);                                   // display error
    }
  }
  
  let characterDD = document.querySelector("#dropdown");
  characterDD.addEventListener('click', function(e) {                //listen for the DD to be clicked
    console.log(e.target.value);
  
  // When useer selects a character, grab the value using Get
  // Use th value to get the character image & description and display it.  

  });

})();
