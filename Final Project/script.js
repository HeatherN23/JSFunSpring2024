//REQUEST FOR RECORDS BY ID
//GET /public/collection/v1/objects/[objectID] returns a record for an object
// Request: https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]

// QUERY REQUEST
//GET /public/collection/v1/search   returns a listing of all Object IDs for objects that contain the search query within the object’s data
//https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers

// MEDIUM REQUEST
//https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Quilts|Silk|Bedcovers&q=quilt

//ARTIST OR CULTURE REQUEST
//https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=french

//DATE RANGE REQUEST
//https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=1700&dateEnd=1800&q=African

//let axios = "https://unpkg.com/axios/dist/axios.min.js"
  // listen for events
  
  const searchForm = document.querySelector('#searchForm');
  const searchText = document.querySelector('#searchText');
  
  searchForm.addEventListener('submit', (e) => {
    console.log('I was clicked!');
    
    e.preventDefault();                     // PREVENT THE FORM FROM REFRESHING
    console.log(searchText.value);
    //const searchText2 = searchText.value;
    getArtData(searchText.value);
    //console.log(searchText2);
    //results.textContent=`No results for ${displayResults} found`; 


  });
/*
const getArtData = function (search) {
  
  let artResults = axios.get("https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers");
  console.log(artResults.value);

};*/

const getArtData = function(search) {
  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`)
    .then(response => {      
      return response.json();
    })
    .then(response => {       
      // loop thru the response object Id's and use the ID's to get the art work Objects
      
      for (let i=0; i < 10; i++ ){
        //console.log("Id: #" + i + ": " + response.objectIDs[i]);
        let fetchURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${response.objectIDs[i]}`;
        console.log(fetchURL);
        fetch(fetchURL)                       // get the artwork object
          .then( response => {
            return response.json();           // convert the object to json
          })
          .then ( response => {
            console.log(response.title);
          });
          
      }      
    });
    //.catch((error) => console.log("error", error));
};

/*
async function getArtData (search) {
  let response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`)
    .then((response) => {
      console.log("Response before JSon" +response);
      console.log("Here's the ID's: " +response.json());     // this shows the Object Promise (IDS)
      let IDs = response.json();
      console.log("Ids maybe: " + IDs[0]);

      // for each object ID, display the artwork in dropdown, and add an event listener
      //for ( let artWork of response.data.results ) {    
      //  console.log(artwork)  ; 
        //ddHtml += `<option value="${character.id}"> ${character.name} </option>`;
     })
    .then((data) => { 
      console.log("Here is the data:" + data[0]);
      //console.log(data[0].title);
    });
    //.catch((error) => console.log("error", error));
}
*/
//getArtData('Van Gogh');
//getArtData('Monet');