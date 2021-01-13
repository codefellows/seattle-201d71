# Class 03: Box Model & Loops

## Warm Up

```javascript

'use strict';

var favoriteLanguage = prompt('What is your favorite programming language?');

/**
 *  add some 'if' statements or 'switch' cases that produce different 'alert' messages depending on which programming language they choose.
 *   If they chose 'JavaScript', have the 'alert' message print everything in all caps! 
**/

// var word = "banana".toUpperCase(); // this will work, you might not want to.

var word = "banana";

var upperBanana = word.toUpperCase();

if () {

} else if() {

} else {

}


```

## Code Review

- Thanks Don! For sharing your Code.

## HTML / CSS Box Model

- How to position elements among other elements.
- Each element is a box. It has a height and a width which equates to a number.
- Each differenet element type has different default properties for these numbers.
- The CSS properties that control an elements box.
  - Margin: Space between the element content, and any element adjacent.
  - Padding: the space around the content itself and it's surround box.
  - Border: A line (of various widths), around just the content.
  - Height + Width : how much space the actual content takes up.

## Formal JS Logic 

- What goes inside of those parenteses of a conditional statements.
- Truthy vs Falsey these are things that are not specificly true or the false that js thinks are true or false.
  - Booleans, true and false
  - Js is wierd and has this idea of things that evaulate to true / false without being exactly True or False
    - Truthy
      - true
      - numbers 1 or more or negative numbers
      - string that are not empty
      - '0'
    - Falsey
      - False
      - 0
      - ''
      - null
      - undefined
      - NaN
- Logical operator
  - ! not something
  - && both side of a statement need to be true / truthy
  - || only one side of a statement needs to be true

## Loops

- A way to get our code to run more than once, without having to write than once.
- 3 types of loops
  - while loop: while a condition is truthy, run the following code over and over again.
```javascript

var condition = true;

while (condition) {
  // this will run as long as condition is true
  console.log('truthy');
  condition = false;
}

// we'll only get to code below the loop, if the condition above become falsey at some point.
console.log('loop is done');

```
