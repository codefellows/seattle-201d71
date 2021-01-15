# Class 05: Concept Review & Git Branching

## Warm Up

```javascript

var arrayOfNumbers = [1,10,15,20];
var integer = 5;


/**
 * Create a function that uses 2 parameters, the first parameter is an array of numbers, and the second is a single integer number.
 *   The function returns that same array, but adds that second parameter to each number within the array.
 *   for example the result of the 2 variables above would be => [6, 15, 20, 25];
*/

// Parameters: Varaibles that we define within the paranthesisi of the functions signature or declare
// Parameter 1 is an array of integers
// Parameter 2 is an integer
function sumThisUp(arrayThatWeWantToAddTo, numberWeWantToAdd) {

  var results = [];

  // if (typeof(arrayThatWeWantToAddTo) !== 'object')
  if ( typeof(numberWeWantToAddTo) !== 'number' ) {
    console.log('Please give me an integer as parameter 2');
    return;
  }

  for (var i = 0; i < arraryThatWeWantToAddTo.length; i++) {
    console.log(arrayThatWeWantToAddTo[i] + numberWeWantToAdd);
    results.push(arrayThatWeWantToAddTo[i] + numberWeWantToAdd);
  }

  return results;
}

// The function is being used (called  or invoked)
// sumThisUp('string', ['0']);// dont do this!!

console.log(sumThisUp([1,10,15,20], 5));

```

## Concept Review

- Let's take a look at some JS.

`var nums = new Array(10).fill('');` => `var nums = ['', '', '', '', '', '', '', '', '', '']`

## Git Branching

- ACP has up until now all gone to `main`
- `git checkout -b feature-1` this create and switches out terminal to the new branch `feature-1`.
  - The takes code from our local, from the current branch we are on.
  - GH will not be aware of this new branch at this time.
- We can work until we finish the goal of our feature.
  - We push to the feature branch `git push origin feature-1`
  - We can now if we chose move catch `main` up with a Pull Request.
  - If we want to work on another feature, we can run `git checkout -b feature-2`
- Once we are completly finished we want to make our PR.
