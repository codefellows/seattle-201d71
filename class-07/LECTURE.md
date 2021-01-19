# Class 07: Object Oriented Programming, HTML Tables

## Warm Up

```html

<!DOCTYPE html>
<html>
  <body>
    <div id="content-box"></div>
  </body>
</html>


```

```javascript

/**
  * Complete the function below, which takes takes in 2 parameter, the first is a string that represents an HTML element, the second is a string that represents content we want to put in our HTML.
  *  The function should utilize DOM methods to create that type of element, and set its text content to whatever is passed in as the `content` parameter.  That element should be returned.

  *  STRETCH:  if you complete the function see if you can use the function to render content to some HTML.  Some starter HTML has been provided to get you started.
**/

// We declare the contentCreator function with 2 parameters (variables)
function contentCreator(elementType, content)  {

  // assign the newly created element to the element variable 
  var element = document.createElement(elementType);

  // use the 'element' variable, which now has a property called textContent,  we set this content using the textContent property.
  element.textContent = content;

  // return this new element to whatever code invokes or calls it.
  return  element;
}


// invoke the contentCreator function and assign the return value to the paragraph variable.
var paragraph = contentCreator('p','here is some text');

var divElement = document.getElementById('content-box');

// append paragraph to divElement
divElement.appendChild(paragraph); // div element puts the paragraph within it.

// innerHTML = <p>Here is some text</p>
// textContent = Here is some text

```

## Code Review

- Getting a random number to represent cookies sold at each hour.
  - that number is within some range of values.
    - Min Customers per hour
    - Max Customers per hour
      - Randomly generte a number of customers between these values.
    - Average number of cookies each customer buys.
      - multiply the number above by this number (Avg Customer).
  - We need to do this same thing for every hour that a store is open.

- Victor: Make an array for cookies per hour, another array for locations.
  - plug cookie sales into number generator.

- Don: Not hard coding any values, to much.

```javascript

var hours = ['6am', '7am', '8am', '9am', '10am'];

// if know all the hours, we can, for each hour, perform some logic.

var seattle = {
  minCust: 10,
  maxCust: 15,
  avgCookies: 3,
  cookiesPerHour: [],
  findCookiesPerHour: function() { // this is an anonymous function (it doesn't get a function name);
    
    // how do I get a random number between 10, and 15

    // We subtract the min from the max to get our middle point
    //   if we use a middle instead of the absolute maximum, we might go above when we add the minimum.

    // we add the min so that if zero we get our minimum value
    var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    
    var randomCookies = randomCustomers * this.avgCookies;
    return randomCookies;
  },
}

for (var i = 0; i < hours.length; i ++) {

  var cookies = seattle.findCookiesPerHour();
  seattle.cookiesPerHour.push(cookies);

  // now we can build our list.
}

// passing in a store into our function
function generateCustomer(store) {
  Math.floor(Math.random() * (store.max_cust - store.min_cust + 1)) + store.min_cust;
}

generateCustomers(seattle);

```

- Get some values to append to the a list.

## Object Oriented Programming

- We are using objects as a design pattern.
- We use objects as the starting point for programming operations.
  - All the functions and operations that you could, belong to an object.
  - Before we can all out to properties and methods, we have to create an object.
- It all begins with defining functions that produce objects.
- Constructors: it's a function that creates on object.


```javascript

var seattle = {
  // properties and methods go here.
}

// in JS, we mark constructor functions with a capital letter at the beginning
function Store() {

  this.name = 'seattle';
  this.hours = ['6am', '7am', '8am'];

}

var seattle = new Store(); // creating an object using the Store constructor function

console.log(seattle) // { name: 'seattle', hours: ['6am', '7am', '8am'] }


// by convention, when we define constructors we capitalze them
function Store(name, hours, minCust) {
  this.name = name;
  this.hours = hours;
  this.minCust = minCust;
  // this.speak = function() {
    // this is a little different
    // console.log('hey Im seattle');
  // } 
};


// prototype is the set of properties and methods that all objects that are associated with the constructor receive.
// this is javascript inheritance
Store.prototype.speak = function() {
  console.log("hey Im " + this.name);
}

Store.prototype.banana = function() {}

var openHours = ['6am', '7am', '8am'];

// we want things defined on the prototype to be shared between all objects created with that constructor.
Store.prototype.hours = hours;

// Calling upon the constructor, and passing values within
var seattle = new Store('Seattle', ['6am', '7am', '8am'], 5); // the new keyword activates constructor powers within this function
// Store.name => this doesnt exist


seattle.name // => 'Seattle'
seattle.banana();
seattle.speak();


var tokyo = new Store('Tokyo', ['6am', '7am', '8am', '9am'], 2);

tokyo.name // 'Tokyo'
tokyo.hours // ['6am', '7am', '8am', '9am ];
```

## HTML Tables

- Creating rows and columns.
- This requires a very specific composition / hierarchy of elements.
  - There not really a column element itselft, more like stack of row.
  - Each row is made of of data cells, and if one row appares above the another in your code, they will stack

```html

<table>
  <tr>
    <td>One</td>
    <td>two</td>
  </tr>
  <tr>
    <td>three</td>
    <td>four</td>
  </tr>
  <tr>
    <td>Five</td>
  </tr>
</table>

```
