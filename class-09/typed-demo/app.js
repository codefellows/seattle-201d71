'use strict';

var boxElement = document.getElementById('box');

var inputElement = document.getElementById('input-one');

var kittens = [];

boxElement.addEventListener('click', function () {
  console.log('box was clicked');
});

boxElement.addEventListener('mouseover', function () {
  console.log('box was hovered');
  console.log(kittens);
});

// boxElement.addEventListener('click', console.log('box was clicked')); // we cannot define the function like this because console.log does not return a function

// console.log(inputElement);

// we get information passed into our callback, FROM OUR HTML
inputElement.addEventListener('input', function (event) {
  console.log(event.target);  // should tell us about the input element itself
  console.log(event.target.value); // the thing we really want => the value of the input field
});

var formElement = document.getElementById('kitten-form');

formElement.addEventListener('submit', function (event) {
  event.preventDefault(); // we need this to stop forms from refreshing
  console.log(event.target.nickname.value);
  console.log(event.target.breed.value);
  console.log(event.target.personality.value);

  var name = event.target.nickname.value;
  var breed = event.target.breed.value;
  var personality = event.target.personality.value

  var kittenFromConstructor = new Kitten(name, breed, personality);

  kittens.push(kittenFromConstructor);
});

function Kitten(name, breed, personality) {

  this.name = name;
  this.breed = breed;
  this.personality = personality;

}

console.log(kittens);
