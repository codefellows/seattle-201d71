'use strict';

// literal object its defined using this syntax below, using curly brackets
var jacob = {
  name: 'Jacob',
  age: 31,
}

// This is a contructor function, more than just a function
//   always think this as a function that produces / constructs objects.
function Person(name, age) {
  this.name = name;
  this.age = age
}

Person.prototype.language = 'JavaScript';
Person.prototype.render = function () {
  var p = document.createElement('p');
  p.textContent = this.name;
  document.body.appendChild(p);
}


var personjacob = new Person('Jacob', 31);
personjacob.render();

console.log(personjacob, personjacob.language);


// in doing this we lose a little bit of what made this object unique
var stringjacob = JSON.stringify(personjacob);
localStorage.setItem('jacob', stringjacob);

var objectjacob = JSON.parse(localStorage.getItem('jacob'));
console.log(objectjacob, objectjacob.language);

// we need to re-personify objectjacob, also know as re-instantiation
var newlyReformedJacob = new Person(objectjacob.name, objectjacob.age);

console.log(newlyReformedJacob, newlyReformedJacob.language);
