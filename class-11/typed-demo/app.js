'use strict';

// create a goat contructor
//   timesClicked
//   timesShown
//   image

function GoatImage(image) {
  this.timesClicked = 0;
  this.timesShown = 0;
  this.image = image;

  GoatImage.allImages.push(this);
}

// Creates our allImages property on the GoatImage Contructor
GoatImage.allImages = [];


// creates the goatImage, and runs the operations within the constructor
new GoatImage('images/cruisin-goat.jpg');
new GoatImage('images/float-your-goat.jpg');
new GoatImage('images/goat-away.jpg');
new GoatImage('images/goat-out-of-hand.jpg');
new GoatImage('images/kissing-goat.jpg');
new GoatImage('images/smiling-goat.jpg');
new GoatImage('images/sweater-goat.jpg');
new GoatImage('images/sassy-goat.jpg');
console.log(GoatImage.allImages);

// select elements from my HTML to render goat stuff

var goatContainer = document.getElementById('goat-container');
var leftGoatImage = document.getElementById('left-goat');
var rightGoatImage = document.getElementById('right-goat');

// generates 2 random goat images
function generateRandomGoats() {

  // randomIndex from our  array
  var leftIndex = Math.floor(Math.random() * GoatImage.allImages.length);

  var rightIndex = Math.floor(Math.random() * GoatImage.allImages.length);

  while (rightIndex === leftIndex) {
    rightIndex = Math.floor(Math.random() * GoatImage.allImages.length);
  }

  var leftGoat = GoatImage.allImages[leftIndex];
  var rightGoat = GoatImage.allImages[rightIndex];

  return [leftGoat, rightGoat];
}

function renderGoats(leftGoat, rightGoat) {
  leftGoatImage.src = leftGoat.image;
  leftGoat.timesShown++;
  // leftGoatImage.setAttribute('data-id', leftGoat.image);

  rightGoatImage.src = rightGoat.image;
  rightGoat.timesShown++;
  // rightGoatImage.setAttribute('data-id', rightGoat.image);
}

// initialize our page
var randomGoats = generateRandomGoats();
renderGoats(randomGoats[0], randomGoats[1]);


// how do we do something everytime an image was clicked
goatContainer.addEventListener('click', function (event) {
  console.log(event.target); // the actual item that was clicked

  // how do identify which image is clicked.  Increment the object that was clicked.
  for (var i = 0; i < GoatImage.allImages.length; i++) {
    if (event.target.src.includes(GoatImage.allImages[i].image)) {
      GoatImage.allImages[i].timesClicked++;
      console.log(GoatImage.allImages[i]);
    }
  }

  var newGoats = generateRandomGoats();
  renderGoats(newGoats[0], newGoats[1]);
});

