'use strict';

var orderForm = document.getElementById('order-form');
var orders = document.getElementById('orders');

function Coffee(name, size, type) {
  this.name = name;
  this.size = size;
  this.type = type;

  // add coffee to array everytime we submit, if this is not an array we have issues
  Coffee.drinks.push(this);
}

var drinksFromLocalStorage = localStorage.getItem('orders'); // if this isn't stored as an array intially, things could go wrong.
var drinksAsAnArray = JSON.parse(drinksFromLocalStorage);

// want to Update something in the array?
// loop through drinksAsAnArray and make changes

// coerses Coffee.drinks to be an array if drinksFromLocaStorage is a falsey value
Coffee.drinks = drinksAsAnArray || [];

orderForm.addEventListener('submit', function (event) {

  event.preventDefault();
  console.log(event.target);

  var name = event.target["order-name"].value;
  var size = event.target.size.value;
  var type = event.target.type.value;

  new Coffee(name, size, type);

  console.log(Coffee.drinks);

  var coffeeAsAString = JSON.stringify(Coffee.drinks);

  localStorage.setItem('orders', coffeeAsAString);

  renderOrders();
});

function renderOrders() {
  orders.innerHTML = '';

  for (var i = 0; i < Coffee.drinks.length; i++) {
    var item = document.createElement('li');
    var p = document.createElement('p');
    p.textContent = `Order name: ${Coffee.drinks[i].name}, Size: ${Coffee.drinks[i].size}oz, Type: ${Coffee.drinks[i].type}`;
    item.appendChild(p);
    orders.appendChild(item);
  }
}

function storeObject(obj) {
  var stringify = JSON.stringify(obj);
  localStorage.setItem('orders', stringify);
}

function fetchObject(key) {
  var stringify = localStorage.getItem(key);
  return JSON.parse(stringify);
}

renderOrders();

