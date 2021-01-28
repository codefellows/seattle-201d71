# Class 13

## Warm Up

Look at the following HTML and Javascript and discuss within your breakout rooms what the code is doing

- Try drawing a diagram of how the code is running in the browser and how the HTML and JS is behaving if a user were to interact with the HTML.

```html

<html>

  <body>
    <button id="add-five">Add 5</button>
    <p id='result'>0</p>
  </body>

</html>

```

```javascript

var addFiveButton = document.getElementById('add-five');
var resultElement = document.getElementById('result');

// In HTML, the stuff within the tags shuould be of type string.

var count = parseInt(resultElement.textContent); // why????  This tries to convert anything into an integer.

// var count = 0;

var resultElement = document.createElement('p'); // creating the element
body.appendChild(resultElement); // placing the element

addFiveButton.addEventListener('click', function(event) {

  event.preventDefault();

  count = count + 5;

  resultElement.textContent = count;
});

```

- What is this Code doing?
  - Creating a button a p tag in HTML, each with ids
  - Everytime the user clicks the button, the p tag goes up by 5.

- How would you have done the same?
  - How do we control our types between HTML and JS


## Code Review of ChartJS

- Where you successful is gettting any Chart to show
  - Installing the library from a CDN.
  - Getting a bar chart to display?

- Issue, changing the colors
  - backgroundColor: takes and array of rgba string value ['rgba(0, 0, 0, 0.1)'];

- Taking calculated Values and putting them into the Chart?
  - When the Chart is drawn (new Chart(ctx, config)) this can be difficult to redraw.

- See review folder to check out chart drawing functions.

## Data Persistence

- Data is created and collected using JavaScript, but as soon refresh the page, go to a different and come back, all the JS stuff gets gets reintialized.
- A big part of any computer application is putting that data somewhere for it remain indefinitly.
  - Using a database we could get our data to persist, but those are complex and have very specific ways of interacting.
    - Browsers don't interact with databases, but computers do.
- The way that we are going to persist data is through LocalStorage

## LocalStorage

- An API ( application programming interfacing ), just like `document`, but this api is used to stored data and allow it to persist within our file system,
  - Deep in the programming files of our browser, lives a little directory that stores our localStorage data
    - often stores tokens, so that we don' have to login everytime we visit facebook, gmail, etc...
    - only accessible via a web browser.
  - each URL has it's own little spot in our localStorage files.
  - Each URL has a 5MB limit.
  - The data is always key value pairs, both the key and the value are strings.
  - The data go away if the browser tells to, or you as the developer clears it using the API.

### localStorage

- the API is accessible through the `localStorage` object within our runtime.
  - `localStorage.setItem('key', 'value')` method for placing something in localStorage, passes a key and value to store.
  - `localStorage.getItem('key)`, method for retrieving an item from localStorage, just passes a key and returns the value.
  - `localStorage.removeItem('key')`, method for removing a single item stored, by the key that's passed in.
  - `localStorage.clear()`, method for clearing all values in localStorage.

- `JSON` object, which is another js api, for manipulating javascript objects
  - `JSON.stringify` turns a javascript object or array, into a string.
  - `JSON.parse` turns a string that contains javascript object notation and converts it back into a javascript object.

```javascript

var jacob = {
  name: 'Jacob',
  age: 31
}

var stringify = JSON.sringify(jacob);

localStorage.setItem('jacob', stringify); // "{'name': 'Jacob', 'age': '31'}"

var objectAgain = JSON.parse(localStorage.getItem('jacob'));

objectAgain.name // 'Jacob'

```
