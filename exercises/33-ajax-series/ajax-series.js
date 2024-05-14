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
  
  /********   ASYNC FUNCTION TO GETCHARACTERLIST  *********/
  async function getCharacterList()  {

    let characterDD = document.querySelector("#dropdown");
    let characterID;

    try {
      let characterList = await axios.get('https://rickandmortyapi.com/api/character');  // Use the api request to get a list of characters
      let ddHtml =`<option>Select one of these fine characters character</option>`;            

      // for each character, display the text in dropdown, and add an event listener
      for await ( let character of characterList.data.results ) {       
         ddHtml += `<option value="${character.id}"> ${character.name} </option>`;
      }

      characterDD.innerHTML = ddHtml;                         // display the list of characters in DD
    }
    catch(error) {
      console.error(error);                                   // display error
    }
  }           /*******        END FUNCTION       ********/


  let characterDD = document.querySelector("#dropdown");
  characterDD.addEventListener('click', async function(e) {                //listen for the DD to be clicked
    //console.log(e.target.value);

    // When useer selects a character, get the character info and replace the image & caption.    
    let characterAtb = await axios.get('https://rickandmortyapi.com/api/character/' + e.target.value);
    
    document.querySelector("img").src = characterAtb.data.image;       
    document.querySelector("#photo-caption").innerHTML = characterAtb.data.name;    

  });

})();
