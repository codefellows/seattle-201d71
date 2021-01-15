# Class 04: CSS Layout and JS Functions

## Warm Up

```javascript

var numbers = [10,3,2,5,7,6,9,12,15,4,19,1];

/**
 * Use the array created above and some type of loop to console.log every number within the array.
 * don't console.log any values between and equalling 6 through 12.
*/

for (var i = 0; i < number.length; i ++) {
  if (numbers[i] < 6 || numbers[i] > 12) {
    console.log(numbers[i]);
  }
}

```

## Code Review

- Thanks Jacob and Paulo for sharing your code.

## CSS Layout

- Yesterday we talked about box model.
- Today we're focusing on CSS position properties, these elements dictate the flow of a number of elements
  - Position property
    - Absolute: positions the element outside of the normal flow of elements around it, and anchors the element to it's parent element.
    - Fixed: I want to remove the element form the normal flow, the elements will be positioned with the viewport.
    - Relative: Keeps the element within the normal flow, but allows postioning with left and right, also allowing the element to be an anchor point for absolute positioned elements.
    - Static: they follow a consistent flow that is preserved with the elements around it, will be not usable as absolute element anchor points.
    - Sticky: Let's you stick an element to the nearest element using the left, right, top, and bottom CSS properties.  Without those properties it just behaves normally.

## JS Functions

- A variable that include ( not just data type ) but blocks of javascript
  - function declaration: creating a function, defining function operations.
  - arguments: the data you provide a function when you call / execute the function.
  - parameters: the data that the function defines, which come from it's execution.
    - think of this as a varible that only that specific function can use.
  - scope: the logic within the curly braces of a function.
    - function parameters are only usale within the functions scope.
  - global vs local scope
    - function are able to access global scope (variables that are defined outside the curlies);
    - function only have acces to local scope that is within their own curlies ( if other function )
  - function hoisting: functions that are declared with the funcition keyword, are able to be used on the lines above where they are defined.
  - Return values: a value that is precedes that return keyword, within a function declaration.

```javascript

// var array = [1, 2, 3];

// array.push(4);


// with functions we can store these operations to run when we chose

// function pushArray () {

//   var array = [1, 2, 3];

//   array.push(4);

// }


// pushArray(); // calling or executing the function.

//pushArray(4); // 4 is an argument. We need to make sure our function is defined with the proper parameters.

var arrayGlobal = [1,2,3];

function pushNumber(num) { // num is the parameter

  var arrayLocal = [1, 2, 3];

  arrayGlobal.push(num);

  return arrayLocal;
}

console.log(num); // we would get undefined;
console.log(arrayLocal); // we get errors for these becuase they are defined locally.

console.log(pushArray(5)); // 5 is an arguement
console.log(arrayGlobal);


```

## Pair Programming

- What? 2 people dedicated to the same outcome, there a driver ( who writes all the code ) and a navigator ( who keeps the driver in check )
  - Both share the responsibility fo producing a working thing.
    - Navigator - we need a function that sums 2 values
    - Driver - function (param1, param2) {}
    - Navigator - name the parameters num1, and num2.
- Why?  Seperating the responsiblities of each programmer makes us more efficient :)
- How? The Driver, will work the navigators project repo on github, and clone it down and do work at this.
  - A fork is an exact copy of someone elses repository, but under your github account.
  - After work is completed you make a pull requests to merge the code that you worked on together back in to the original person (navigator) repo.
