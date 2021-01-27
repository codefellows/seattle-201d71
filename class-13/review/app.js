'use strict';

// an array of all the product names
var products = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg'];
var imageContainer = document.getElementById('image-container');
var leftImageElement = document.getElementById('left-image');
var rightImageElement = document.getElementById('right-image');
var middleImageElement = document.getElementById('middle-image');
var roundsOfVoting = 5;

// this grabs our canvas element and select a context called ('2d;);
//    this operation enables us to draw 2 dimensional shapes use the ctx variable
var ctx = document.getElementById('myChart').getContext('2d');
var votesByProduct = [];
var timesProductsAreShow = [];


function ProductImage(name) {

  // grabs the substring from the first position of the string, up until the forth position from the end.
  this.name = name.substring(0, name.length - 4);

  this.timesShown = 0;
  this.timesClicked = 0;
  this.image = `images/${name}`;

  // 'this' refers to the object that the constructor is creating
  ProductImage.allImages.push(this);
  // Mapping using bracket notation on an objects to assign he object to a key that is this.name
  ProductImage.imageMap[this.name] = this;
}

ProductImage.allImages = [];
ProductImage.imageMap = {};

// Loop through the products 
for (var i = 0; i < products.length; i++) {
  new ProductImage(products[i]);
}

// ProductImages.allImage["bag.jpg"];

// console.log(ProductImage.allImages);
// console.log(ProductImage.imageMap);

/**
 * Functions for handling User click logic and Product generation & rendering
 */

// returns 3 random images from ProductImage.allImages
function generateRandomImages() {

  var leftIndex = Math.floor(Math.random() * ProductImage.allImages.length);
  var rightIndex = Math.floor(Math.random() * ProductImage.allImages.length);
  var middleIndex = Math.floor(Math.random() * ProductImage.allImages.length);

  // as long as the their is one duplicate index
  //   UPDATE:  We also need to check whether our middle and right Index are equal, that added index increases our complexity more that just double since everything needs to be compared.
  while (leftIndex === rightIndex || leftIndex === middleIndex || middleIndex === rightIndex) {
    if (leftIndex === rightIndex) {
      rightIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    }
    if (leftIndex === middleIndex) {
      middleIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    }
    // Adding additional conditional here to account for the added condition in the while
    if (middleIndex === rightIndex) {
      rightIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    }
  }

  var leftProductImage = ProductImage.allImages[leftIndex];
  var middleProductImage = ProductImage.allImages[middleIndex];
  var rightProductImage = ProductImage.allImages[rightIndex];

  return [leftProductImage, middleProductImage, rightProductImage];
}

function renderImages() {

  //  What is currently rendered?
  var currentlyRenderedImages = [leftImageElement.name, rightImageElement.name, middleImageElement.name];

  var newImages = generateRandomImages();

  // let's duscuss .includes
  //   method that loops through a data type (either a string or an array)
  //   and returns a boolean if it finds a match.

  //   ensure that there are not the images that were previously rendered
  //     What is going to be the new images currently rendered?
  //     images from the previous state to our new state cannot be duplicated.
  while (
    currentlyRenderedImages[0] === newImages[0].name ||
    currentlyRenderedImages[1] === newImages[0].name ||
    currentlyRenderedImages[2] === newImages[0].name ||
    currentlyRenderedImages[0] === newImages[1].name ||
    currentlyRenderedImages[1] === newImages[1].name ||
    currentlyRenderedImages[2] === newImages[1].name ||
    currentlyRenderedImages[0] === newImages[2].name ||
    currentlyRenderedImages[1] === newImages[2].name ||
    currentlyRenderedImages[2] === newImages[2].name
  ) {
    newImages = generateRandomImages();
  }

  // render new images to the page
  leftImageElement.src = newImages[0].image;
  leftImageElement.name = newImages[0].name;
  newImages[0].timesShown++;

  middleImageElement.src = newImages[1].image;
  middleImageElement.name = newImages[1].name;
  newImages[1].timesShown++;

  rightImageElement.src = newImages[2].image;
  rightImageElement.name = newImages[2].name;
  newImages[2].timesShown++;
}

function handleImageClick(event) {
  roundsOfVoting--;

  for (var i = 0; i < ProductImage.allImages.length; i++) {
    if (event.target.name === ProductImage.allImages[i].name) {
      ProductImage.allImages[i].timesClicked++;
      console.log(ProductImage.allImages[i]);
    }
  }
  renderImages();

  if (!roundsOfVoting) {
    // anything that needs to happen afer voting is completed
    imageContainer.removeEventListener('click', handleImageClick);
    renderChart();
  }
}

renderImages();
imageContainer.addEventListener('click', handleImageClick);



function renderChart() {

  // what is this for loop doing?
  //  Is it required?
  for (var i = 0; i < ProductImage.allImages.length; i++) {
    votesByProduct.push(ProductImage.allImages[i].timesClicked);
    timesProductsAreShow.push(ProductImage.allImages[i].timesShown);
  }

  // This is an object constructor, from chart.js.  Because we have installed our chart.js file from the cdn, we should have access to a new constructor
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: products, // array of strings goes here
      datasets: [{
        label: 'times clicked',
        // data: [15, 50, 3, 5, 2, 3], // array of numbers goes here
        data: votesByProduct,
        // backgroundColor: ['rgba(54, 162, 235, 1)'],
        backgroundColor: new Array(12).fill('rgba(54, 162, 235, 1)'),
        // borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1
      },
      {
        label: 'times Shows',
        // data: [30, 100, 3, 5, 2, 3],
        data: timesProductsAreShow,
        // backgroundColor: ['rgba(255, 99, 132, 1)'],
        backgroundColor: new Array(12).fill('rgba(255, 99, 132, 1)'),
        // borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}
