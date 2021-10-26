// Create your HTML Page via DOM Methods here!

var body = document.body;

// TODO: Add a centered h1
var h1El = document.createElement('h1');
h1El.textContent = "Welcome to Week 4!";
h1El.setAttribute('style', 'text-align: center; color: green');
body.appendChild(h1El)

// TODO: Add a centered h2

// TODO: Add a centered image with a centered caption under it
var kittenEl = document.createElement('div');
kittenEl.textContent = "This is kitten";
kittenEl.setAttribute('style', 'text-align: center');
body.appendChild(kittenEl);
var imageEl = document.createElement('img');
imageEl.setAttribute('src', 'http://placekitten.com/200/300');
imageEl.setAttribute('style', 'text-align: center');
kittenEl.appendChild(imageEl)

// TODO: Add a list of your favorite foods (or other favorites)
var olEl = document.createElement('ol');
body.appendChild(olEl);
var liEl1 = document.createElement('li');
liEl1.textContent = "Sushi";
olEl.appendChild(liEl1);

var liEl2 = document.createElement('li');
liEl2.textContent = "Fruits";
olEl.appendChild(liEl2);


/*
document.getElementById = 
document.getElementsByClassName=[]
document.getElementsByTagName=[]

document.createElement
body.appendChild()

document.setAttribute()

*/