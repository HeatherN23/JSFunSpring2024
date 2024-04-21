/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here


let myImg = document.querySelector("img");
//console.log(myImg);
myImg.src = "https://files.worldwildlife.org/wwfcmsprod/images/Wild_Beaver_Swimming/magazine_large/51bbxziued_usfws_wildlifebeaver_sara_germainjpg.jpg";


let link = document.querySelector(".alert-warning a");
//console.log(link);

link.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript");
//console.log(link.attributes);

let div = document.querySelector("#victorious");
//console.log(div);

div.innerHTML="I am victorious!";

let divColor = document.querySelector(".alert-info");
//console.log(divColor);
divColor.style.backgroundColor = "#3383ac";

let font=document.querySelector("#myColor");
//console.log(font);
font.style.color = "green";

let hideMe = document.querySelector(".hideMe");
hideMe.visability="hidden";

let showMe = document.querySelector(".hidden");
showMe.classList.remove("hidden");

btn = document.querySelector("button").classList.contains("btn-primary");
console.log(btn);
//console.log(btn.classList.contains(".btn-primary"));

if ( btn ) {
  document.querySelector("button").textContent="&check; blue";
}

})();
