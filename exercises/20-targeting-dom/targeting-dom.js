/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
 // Put your answers in here
 const li = document.querySelector("li");
 console.log(li);

 const myId = document.querySelector("#myId");
 console.log(myId);

 const warning = document.querySelectorAll(".bg-warning");
 console.log(warning);

 const targetBtn = document.querySelector("#target");
 console.log(targetBtn);

 const media = document.querySelectorAll(".media"); 
 console.log(media);

 const media2 = document.querySelectorAll("[data=media]");
 console.log(media2);

 const cell = document.querySelectorAll("#myRow > .col");
 console.log( cell );

})();
  
           
