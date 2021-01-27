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
var count = parseInt(result.textContent);

addFiveButton.addEventListener('click', function(event) {

  event.preventDefault();

  count = count + 5;

  resultElement.textContent = count;
})

```
