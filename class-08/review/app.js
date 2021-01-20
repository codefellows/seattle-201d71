'use strict';

// We need to create object for each store
//  each store contains properties
//    - store Name
//    - minCust per hour
//    - maxCust per hour
//    - avg Number of cookies that each customer buys

var storesElement = document.getElementById('store-list');
var tableElement = document.getElementById('store-table');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var stores = [];

var seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  openHours: hours,
  cookieSalesPerHour: [],
  cookieTotalSales: 0,
  // Only used to generate of cookies based on the values given above
  generateCookiesAtHour: function () {
    return generateStoreCustomers(this.minCust, this.maxCust) * this.avgCookie;
  },
  // fills the cookies sales array with calculated cookie sales data for each hour that our store is open.
  generateCookiesPerHour: function () {
    // for every hour that the store is open...
    for (var i = 0; i < this.openHours.length; i++) {

      // generate a number of cookies sold at that hour...
      var cookieSales = this.generateCookiesAtHour();

      // we are adding up these totals for each store over all the open hours.
      // this.cookieTotalSales += cookieSales;
      this.cookieTotalSales = this.cookieTotalSales + cookieSales;

      // add that number to our Cookies Sales data (cookieSalesPerHour)
      this.cookieSalesPerHour.push(cookieSales); // the push
    }
  },
  displayList: function () {

    var listElement = document.createElement('ul');
    var nameElement = document.createElement('p');
    nameElement.textContent = this.name;
    listElement.appendChild(nameElement);

    for (var i = 0; i < this.cookieSalesPerHour.length; i++) {
      var itemElement = document.createElement('li');

      // templating sytax `here is string stuff ${variableName} continue with string stuff`
      itemElement.textContent = `${this.openHours[i]}: ${this.cookieSalesPerHour[i]}`;
      listElement.appendChild(itemElement);
    }

    // append our store total
    var itemElement = document.createElement('li');
    itemElement.textContent = `Daily Total: ${this.cookieTotalSales}`;
    listElement.appendChild(itemElement);

    storesElement.appendChild(listElement);
  }
}

// generate a number of customers between min and max
function generateStoreCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

seattle.generateCookiesPerHour();
// console.log(seattle.cookieSalesPerHour);

seattle.displayList();

// Generate and average number of cookies, sold at each hour, per store.
//   - We to generate a random number between the minumumCust value and the maximum Customer value.
//   - Once we have this number we can multiply by the avg Number of cookies that each customer buys.


// Put this information about cookie sales onto my HTML Page
//  - Create HTML elements
//  - Put text content into those elements
//  - Place those elements on the rendered HTML Page.


//  Now let's see how we can do this with our constructors

function CookieStore(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.openHours = hours;
  this.cookieSalesPerHour = [];
  this.cookieTotalSales = 0;
};

CookieStore.prototype.generateCookiesAtHour = function () {
  return Math.floor(generateStoreCustomers(this.minCust, this.maxCust) * this.avgCookie);
};

CookieStore.prototype.generateCookiesPerHour = function () {
  for (var i = 0; i < this.openHours.length; i++) {
    var cookieSales = this.generateCookiesAtHour();
    this.cookieTotalSales = this.cookieTotalSales + cookieSales;
    this.cookieSalesPerHour.push(cookieSales); // the push
  }
};

// modigying this for table diplay instead of a list
CookieStore.prototype.displayTable = function () {

  var rowElement = document.createElement('tr');
  var nameElement = document.createElement('td');
  nameElement.textContent = this.name;
  rowElement.appendChild(nameElement);

  for (var i = 0; i < this.cookieSalesPerHour.length; i++) {
    var cellElement = document.createElement('td');

    cellElement.textContent = `${this.cookieSalesPerHour[i]}`;
    rowElement.appendChild(cellElement);
  }

  var totalElement = document.createElement('td');
  totalElement.textContent = `${this.cookieTotalSales}`;
  rowElement.appendChild(totalElement);

  tableElement.appendChild(rowElement);
}


// populate table header, which creates on row that display the global for each store
function createHeader() {

}

// populate the footer row, with the totals per store, per hour (think of a loop within a loop)
function createFooter() {

  // first start looping throuogh our total number of hours
  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length; i++) {

    // we just need to remember to reset at each hour
    hourlyTotal = 0;

    for (var j = 0; j < stores.length; j++) {

      hourlyTotal += stores[j].cookieSalesPerHour[i];
      totalOfTotals += stores[j].cookieSalesPerHour[i];
    }

  }

}

// let's create all our stores!


var seattle = new CookieStore('Seattle', 23, 65, 6.3);

stores.push(seattle);
seattle.generateCookiesPerHour();


var lima = new CookieStore('Lima', 2, 16, 4.6);
lima.generateCookiesPerHour();
stores.push(lima);

var tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
tokyo.generateCookiesPerHour();
stores.push(tokyo);

var dubai = new CookieStore('Dubai', 11, 38, 3.7);
dubai.generateCookiesPerHour();
stores.push(dubai);

var paris = new CookieStore('Paris', 20, 38, 2.3);
paris.generateCookiesPerHour();
stores.push(paris);

console.log(stores);

for (var i = 0; i < stores.length; i++) {
  stores[i].displayTable();
}

