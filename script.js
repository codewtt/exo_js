// Function n°1 & 1 bis

const footerClick = document.getElementsByTagName('footer');

let counter = 0 
// Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! 😇
footerClick[0].addEventListener('click', function(){
  counter++;
  console.log('click')
  console.log(`${counter}`)
});

// Function n°2

let myNavbar = document.getElementById('navbarHeader');
let button = document.getElementsByTagName('button');
// Il existe une fonction qui permet de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente. C'est "toggle". Tu peux l'utiliser ainsi : elementDuDOM.classList.toggle("nomDeLaClasse")
button[0].addEventListener('click', function(){
    myNavbar.classList.toggle('collapse')
});

// Function n°3

let htmlCardBtnGoRed = document.getElementsByClassName('btn-group')[0].getElementsByClassName('btn btn-sm btn-outline-secondary')[0];

htmlCardBtnGoRed.addEventListener('click', function() {
  this.style.color = 'red';
});

// Function n°4

let cssCardBtn = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[1];
let cssCardText = document.getElementsByClassName('card-text')[1];
let colorGreenOn = false;

cssCardBtn.addEventListener("click", function(){
  if (colorGreenOn){
    cssCardText.style.color = '';
    colorGreenOn = false;
  } else {
    cssCardText.style.color = 'green';
    colorGreenOn = true;
  }
});

// Function n°5

let navbar = document.getElementsByClassName("navbar")[0];
let bootsLink = document.getElementsByTagName("link")[0];

navbar.addEventListener("dblclick", function(){
  if (bootsLink.rel == "stylesheet") {
    bootsLink.rel = "styleDisabled";
  } else {
    bootsLink.rel = "stylesheet";
  }
});

// Function n°6

// Function n°7

// Function n°8

// Function n°9