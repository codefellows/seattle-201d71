var tableBody = document.getElementById('table-body');

/**
 * This is just for one row with 2 cells
 */

var rowOne = document.createElement('tr'); // <tr></tr>
var cellOne = document.createElement('td'); // <td></td>
var cellTwo = document.createElement('td'); // <td></td>

cellOne.textContent = 'one';
cellTwo.textContent = 'two';

rowOne.appendChild(cellOne);
rowOne.appendChild(cellTwo);
tableBody.appendChild(rowOne);

/**
 * Again, the same as above but for cell three and four
 */

var rowTwo = document.createElement('tr'); // <tr></tr>
var cellThree = document.createElement('td'); // <td></td>
var cellFour = document.createElement('td'); // <td></td>

cellThree.textContent = 'three';
cellFour.textContent = 'four';

rowTwo.appendChild(cellFour);
rowTwo.appendChild(cellThree);
tableBody.appendChild(rowTwo);

// this is only for data that will live in JS and be repeatable.



function Kitten(name, breed, traits, personality) {
  this.name = name;
  this.breed = breed;
  this.traits = traits;
  this.personality = personality;
  this.numberOfProperties = 4;
}

Kitten.prototype.display = function () {
  var kittenRow = document.createElement('tr');

  // for every number of this.properties
  // create a td
  // fill that td with text
  // append td to row


  var nameCell = document.createElement('td');
  var breedCell = document.createElement('td');
  var traitsCell = document.createElement('td');
  var personalityCell = document.createElement('td');

  nameCell.textContent = this.name;
  breedCell.textContent = this.breed;
  traitsCell.textContent = this.traits;
  personalityCell.textContent = this.personality;

  kittenRow.appendChild(nameCell);
  kittenRow.appendChild(breedCell);
  kittenRow.appendChild(traitsCell);
  kittenRow.appendChild(personalityCell);

  tableBody.appendChild(kittenRow);
}

tableBody.innerHTML = '';

var frankie = new Kitten('Frankie', 'calico', ['spotted', 'fuzzy'], 'friendly and warm');

frankie.display();

var spencer = new Kitten('Spencer', 'tabby', ['round', 'always hungry'], 'shy and really hates loud noises');

spencer.display();

console.log(spencer.name[1]);




