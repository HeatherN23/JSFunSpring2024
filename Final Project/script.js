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

//const searchForm = document.querySelector('#searchForm');
//const searchText = document.querySelector('#searchText');

const gallery = document.querySelector(".gallery");
const artistDD = document.querySelector("#artDD");
const artImg = document.querySelector(".artImg");
const artist = document.querySelector(".artist");
const artTitle = document.querySelector(".artTitle");
const artDate = document.querySelector(".artDate");
const artDesc = document.querySelector(".artDesc");

// listen for events
//searchForm.addEventListener('submit', (e) => {
artistDD.addEventListener("change", (e) => {
  //console.log('I was clicked!');

  e.preventDefault(); // PREVENT THE FORM FROM REFRESHING
  //console.log(artistDD.value);
  //const searchText2 = searchText.value;

  //If the user selects a dropdown item, erase the existing artwork and get the enw Data
  if (artistDD.value) {
    gallery.innerHTML="";
    getArtData(artistDD.value);
  } else {
    console.log("Pick an artist");
  }

  //console.log(searchText2);
  //results.textContent=`No results for ${displayResults} found`;
});
/*
const getArtData = function (search) {
  
  let artResults = axios.get("https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers");
  console.log(artResults.value);

};*/

function getArtDetails(response) {
  let html = `  
    <div>                                
      <img class="artImg" src="${response.primaryImageSmall}" width="300"/>
    </div>                        
    <div class="artData">
      <h3 class="artist">Artist:${response.artistDisplayName}</h4>
      <h4 class="artTitle">Title:${response.title}</h3>            
      <p class="artDate">Date:${response.objectDate}</p>            
      <p class="artDesc">Description:<a href="${response.objectURL}">${response.objectURL}</a></p>
    </div>
  `;

  let newDiv = document.querySelector(".gallery");
  newDiv.insertAdjacentHTML("beforeend", html);
  //newDiv.innerHTML=html;

  /*
  artImg.src=response.primaryImageSmall;
  artist.innerHTML=`Artist: ${response.artistDisplayName}`;
  artTitle.innerHTML=`Title: ${response.title}`;
  artDate.innerHTML=`Date: ${response.objectDate}`;
  artDesc.innerHTML=`Description: <a href="${response.objectURL}">${response.objectURL}</a>`;
  */
}
async function getArtData(search) {
  // Fetch the artist ID
  let response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let html = "";
      // loop thru the response object Id's and use the ID's to get the art work Objects
      console.log(response.objectIDs.length);
      for (let i = 0; i < 3; i++) {
        //console.log("Id: #" + i + ": " + response.objectIDs[i]);
        //Fetch the artwork by the artist.
        let fetchURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${response.objectIDs[i]}`;
        //console.log(fetchURL);
        fetch(fetchURL) // get the artwork object
          .then((response) => {
            return response.json(); // convert the object to json
          })
          .then((response) => {
            console.log("Artist is " + response.artistDisplayName);
            console.log("Image is " + response.primaryImageSmall);
            //If the object contains a small painting build the HTML
            if (response.primaryImageSmall !== "") {
              getArtDetails(response);
            }

            /*
            artImg.src=response.primaryImageSmall;
            artist.innerHTML=`Artist: ${search}`;
            artTitle.innerHTML=`Title: ${response.title}`;
            artDate.innerHTML=`Date: ${response.objectDate}`;
            artDesc.innerHTML=`Description: <a href="${response.objectURL}">${response.objectURL}</a>`;
            */
          });
      }
    });
  //.catch((error) => console.log("error", error));
}

/*const getArtData = function(search) {
  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`)
    .then(response => {      
      return response.json();
    })
    .then(response => {       
      let html = "";
      // loop thru the response object Id's and use the ID's to get the art work Objects      
      for (let i=0; i < 5; i++ ){
        //console.log("Id: #" + i + ": " + response.objectIDs[i]);
        let fetchURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${response.objectIDs[i]}`;
        //console.log(fetchURL);
        fetch(fetchURL)                       // get the artwork object
          .then( response => {
            return response.json();           // convert the object to json
          })
          .then ( response => {
            //console.log(response.title);
            artImg.src=response.primaryImageSmall;
            artist.innerHTML=`Artist: ${search}`;
            artTitle.innerHTML=`Title: ${response.title}`;
            artDate.innerHTML=`Date: ${response.objectDate}`;
            artDesc.innerHTML=`Description: <a href="${response.objectURL}">${response.objectURL}</a>`;
            
          });
          
      }      
    });
    //.catch((error) => console.log("error", error));
};
*/

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
