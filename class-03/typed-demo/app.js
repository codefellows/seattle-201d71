var condition = -2;

// while (condition) {
//   // this will run as long as condition is true
//   console.log('truthy ' + condition);
//   condition++;
// }

// we'll only get to code below the loop, if the condition above become falsey at some point.
// console.log('loop is done');


// this prompt returns a string => null '' => 'some name'
// var answer = prompt('What is you name?');
// console.log(answer);


// while (!answer || answer === ' ') {
//   console.log('you have not given me a name');
//   answer = prompt('you have not given me a name, please answer me!!');
// }

// console.log('thank you');


// for loop syntax: intializer / condition for the loop / incremeneter, the thing we want to occur after every loop
// for (var i = 0; i <= 10; i++) {
//   console.log('loop is running ' + i);
// }

// console.log('loop is done');

var arrayOfQuestions = ['What is you name?', 'what is your favorite color?'];

// arrayOfQuestions[someNumber] => some number represents the position of items within the array.

// pushed item moved this way <=
var arrayOfAnswers = [];

// this loop is running against the number of items in the array of Questions.
for (var i = 0; i < arrayOfQuestions.length; i++) {
  // because is being being incremented we are able to ask each question from the array of questions.
  var answer = prompt(arrayOfQuestions[i]);

  arrayOfAnswers.push(answer);

  // setting items at a specfic index placement
  // arrayOfAnswers[i] = answer;

  // this will stop your loop ini its tracks
  // break;
}

// let's go in reverse
// array.length is the total number of items, not necessarily the ending index
for (var i = arrayOfQuestions.length - 1; i >= 0; i--) {
  // this will do things in reverse order;
}

console.log('loop is done', arrayOfAnswers[0]);

// Do while


// condition = false
// // this will run once regarless of the truthiness when the loop begins
// do {
//   console.log('condition might be truthy?');
// } while (condition);
