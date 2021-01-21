# Class 09: HTML Events and Event Handling


## Warm Up

```javascript

/**
 * Using two for loops nested together, write some javascript that will print into the console this pattern:
 
     *     
     ** 
     ***
     ****
     *****
 
 * Use any data structures or functions that you'd like
**/

var starArray = ['*', '**', '***', '****', '*****'];

// single array we can do like so
for (var i = 0; i < starArray.length; i++) {
  console.log(starArray[i]);
}

var star = "*";

for (var i = 1; i <= 5; i++) {
  
  var printString = '';

  for (var j = 1; j <= 5; j++) {
    if (j <= i) {
      printString += star; 
    }
  }

  console.log(printString);
}

```

## Wireframe Review

- Thanks Irwin and Mason!

## HTML Events

- When we do things in the browser
  - hovering over element
  - pressing a key on the keyboard
  - clicking
    - mouse down + mouseup.
  - The browser is aware that this happens
  - As developers we have the power to call functions, toggle classes, run any JS when these occur
- Forms are the most prevelent element to get interactions from the user, and we needd to learn how to handle all the events that occur around form inputs.
- This is a combination of HTML plus JavaScript.
  - We can tell our JavaScript to do something when an event is fired from our HTML.

```html

<div id="box">

</div>

```

```javascript

var boxElement = document.getElementById('box');

// new method on HTML elements: addEventListener
//  the commands that you assign to the event, will run only when that event occurs.


function handleClick () {
  console.log('box was clicked');
}

// 2 arguments for the addEventListener method: a) the event that I'm listening for, and a function to run when that event occurs.
// boxElement.addEventListener('click', function() {
//   console.log('box was clicked');
// }); 

boxElement.addEventListener('click', handleClick);

```
