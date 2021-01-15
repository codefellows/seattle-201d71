'use strict';

// function to add to numbers
function adds(num1, num2) {
  console.log('here is number 1 ' + num1);
  console.log('here is number 2 ' + num2);

  var sumLocal = num1 + num2;

  console.log('here is the sum: ', sumLocal);
  return sumLocal;
}

var sumGlobal = adds(2, 3);
var newSum = adds(sumGlobal, 10);

console.log(newSum);

var arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// we passed only 1 argument, thus parameter 2 will be undefined

// var sumWithArray = adds(arrayOfNumbers) Make sure your types valid / dont do this!!!

// console.log(sumWithArray[8]);

function alertUser(param) {
  alert(param);
  console.log(param);
}

alertUser('Hello World');


var arrayOfAnswers = [];

function askQuestion(question) {

  var answer = prompt(question);
  arrayOfAnswers.push(answer);
}

askQuestion('How old are you?');
askQuestion('What is you favorire color?');

console.log(arrayOfAnswers);
