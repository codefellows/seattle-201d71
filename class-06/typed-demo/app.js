'use strict';

var frankie = {
  name: 'Frankie',
  age: null,
  traits: ['cute', 'good at cuddling', 'great singing voice'],
  breed: 'tabby',
  generateAge: function (ageLimit) {
    // random number generation

    var randomAge = Math.floor((Math.random() * ageLimit) + 1);
    this.age = randomAge; // mutation of our object.

    // if you needed this number outside of this function / object
    // no harm in returning, but the above is storing our value on the object literal.
  },
  healthHistory: 'He\'s been vacinated. Already been neutrued.  Is kinda fat'
}

// var seattle  {
//   minCookies: 10
// }


// The worflow we want to do

// Maybe we can create a function that does this???
var divElement = document.createElement('div'); // => <div></div>
var h2Element = document.createElement('h2'); // <h2></h2>

h2Element.textContent = frankie.name // <h2>Frankie</h2>

divElement.appendChild(h2Element); // <div> </h2>Frankie</h2> </div>

var sectionElement = document.getElementById('profiles'); // <section id="profiles></section>"
sectionElement.appendChild(divElement); // appends everything



frankie.generateAge(20);

console.log(frankie);

// create element from nothing
var breedElement = document.createElement('h3');
breedElement.textContent = frankie.breed; // <h3>tabby</h3>
divElement.appendChild(breedElement);

var imgElement = document.createElement('img'); // <img>
imgElement.setAttribute('src', 'images/frankie.jpeg'); // <img src="images/frankie.jpeg"
divElement.appendChild(imgElement);


