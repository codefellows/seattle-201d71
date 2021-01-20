# Class 08: CSS Wireframing

```javascript

/**
  *  Create a Pokemon constructor that creates an object with the following properties and methods
  *     - Name: String
  *     - Health Points: Number
  *     - Attack Points: Number
  *     - Abilities: Array of Strings
  *     - Speak: A Method that console logs the Pokemon's name
**/

function Pokemon(namePoke, attackPoints, healthPoints, abilities, speak) {
  this.name = namePoke;
  this.abilities = abilities;
  this.healthPoints = healthPoints;
  this.attackPoints = attackPoints;
  this.speak = function() {
    console.log(speak, this.name, this.name, this.name);
  }
  this.speak();
}

var pikachu = new Pokemon('Pikachu', 3, 5, 'shoot fire', 'pika');
console.log(pikachu, pikachu.speak());


```

## Code Review

- See `Review` Folder
