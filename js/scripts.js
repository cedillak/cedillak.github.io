/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// email
var shown = false;
function showhideEmail(){
	if (shown){
      document.getElementById('email').innerText = "Show my email";
	  shown = false;
    }else{
	  var myemail = document.createElement('a');
	  myemail.href = 'mailto:cedillak@ucmail.uc.edu';
	  myemail.innerText = 'cedillak@ucmail.uc.edu';
      document.getElementById('email').innerHTML = '';
      document.getElementById('email').appendChild(myemail);
      shown = true;
    }
}
// RANDOM DOG IMAGE
function get_random_dog_image(){

  url = "https://dog.ceo/api/breeds/image/random";

  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    display_image(data.message);
  })
  .catch(function(error){
    console.log("Error: " + error);
  });


}
// POKEMON
function display_image(image_url){
  document.getElementById("image").src = image_url;
}
async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}

// CONFETTI
// Assuming you have a separate script.js for your custom scripts
const confettiButton = document.querySelector('#confetti-button');
const jsConfetti = new JSConfetti();

confettiButton.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['🎉', '✨', '🎊']
    });
});

// Function to get a cookie by name
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Function to set a cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to check the user's visit and display appropriate message
function checkVisit() {
  let lastVisit = getCookie("lastVisit");
  if (lastVisit == "") {
    alert("Welcome to my homepage!");
    let currentVisit = new Date().toString();
    setCookie("lastVisit", currentVisit, 365); // Set the last visit date to expire in 1 year
  } else {
    alert("Welcome back! Your last visit was " + lastVisit);
    let currentVisit = new Date().toString();
    setCookie("lastVisit", currentVisit, 365); // Update the last visit date
  }
}

// Run the checkVisit function when the window loads
window.onload = checkVisit;
