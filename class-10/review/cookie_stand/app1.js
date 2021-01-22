'use strict';

var body = document.getElementById('table-body');
var submitEl = document.getElementById('Submit');
var locationEl = document.getElementById('Location');
var minCustomersEl = document.getElementById('Mininmum Customer');
var maxCustomersEl = document.getElementById('Maximum Customer');
var avgCustsalesEl = document.getElementById('Average Cookie Sales');
var storeCountEl = document.getElementById('Store Count');
var formElement = document.getElementById('test-form');
var storeInformationSheet = [] /// Array I'm passing to form element

//------------------------------------------------------------------------------------


// Store Builder Constructor
function storeBuilder(storeName, minCust, maxCust, avgSales, storeHours) {
  this.storeName = storeName
  this.minCust = minCust
  this.maxCust = maxCust
  this.avgSales = avgSales
  this.storeHours = storeHours
  this.totalSale = 0
  this.hourlySales = []
}

// Store Results Calcultor
storeBuilder.prototype.salesResults = function () {

  var totalShiftsales = 0
  var SaleSheet = []
  for (var i = 0; i < this.storeHours.length; i++) {
    console.log()
    var randomAmount = (Math.floor(Math.random() * (this.minCust - this.maxCust + 1)) + this.minCust)
    console.log(this.maxCust, this.minCust, randomAmount)

    SaleSheet[i] = Math.round((randomAmount * this.avgSales)); // mutation of our object 
    totalShiftsales = SaleSheet[i] + totalShiftsales
  }
  this.hourlySales = SaleSheet
  this.totalSale = totalShiftsales
}

// Writes Data
storeBuilder.prototype.salesData = function () {
  // var table = document.createElement('table')
  var body = document.getElementById('table-body');
  var tableRow = document.createElement('tr')
  var heading = document.createElement('th')
  var dataCell = document.createElement('td')


  heading.textContent = this.storeName;
  tableRow.appendChild(heading)

  for (var i = 0; i <= this.hourlySales.length; i++) {

    var dataCell = document.createElement('td')
    dataCell.textContent = this.hourlySales[i];
    tableRow.appendChild(dataCell)
  }
  dataCell.textContent = this.totalSale;
  tableRow.appendChild(dataCell)
  // table.appendChild(tableRow)
  // body.appendChild(table)
  body.appendChild(tableRow);
}

// Document Writer for Heading Information
function display(operationHours) {
  var heading = document.createElement('th')
  var tableRow = document.createElement('tr')
  // var table = document.createElement('table');
  var body = document.getElementById('table-body');

  heading.textContent = ' '
  tableRow.appendChild(heading)

  for (var i = 0; i <= operationHours.length; i++) {
    var heading = document.createElement('th')

    heading.textContent = operationHours[i];
    tableRow.appendChild(heading)
  }
  heading.textContent = 'Total';
  tableRow.appendChild(heading);
  // table.appendChild(tableRow);
  body.appendChild(tableRow);
}

// Takes Information from boxes and creates array
formElement.addEventListener('submit', function (event) {

  body.innerHTML = ''; // to remove all the rows within our HTML

  event.preventDefault(); // we need this to stop forms from refreshing



  // var location = event.target.location.value
  // var minCustomers = event.target.minCustomers.value
  // var maxCustomers = event.target.maxCustomers.value
  // var avgCustsale = event.target.avgCustsale.value
  var storeHoursLocation = ["6am", "7am", "8am", "9am", "10am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]


  var location = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"]
  var minCustomers = [65, 24, 38, 38, 16]
  var maxCustomers = [23, 3, 11, 20, 2]
  var avgCustsale = [6.3, 1.2, 3.7, 2.3, 4.6]


  display(storeHoursLocation)

  for (var i = 0; i < location.length; i++) {
    var StoreConstructor = new storeBuilder(location[i], minCustomers[i], maxCustomers[i], avgCustsale[i], storeHoursLocation)

    // Builds
    //  var StoreConstructor = new storeBuilder(location, minCustomers, maxCustomers, avgCustsale, storeHoursLocation)
    // Calculates
    StoreConstructor.salesResults()
    // Spits out Data
    StoreConstructor.salesData()
    // Pushes
    storeInformationSheet.push(StoreConstructor);

  }

})


