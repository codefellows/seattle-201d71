/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionElement = document.createElement('option');
    optionElement.innerText = Product.allProducts[i].name;
    selectElement.append(optionElement);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  var quantityId = document.getElementById('quantity');
  var selectElement = document.getElementById('items');
  cart.addItem(selectElement.value, quantityId.value);
  console.log(cart);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  // target quantity selected, it this the number of products??
  //  or the products as well as there quantity.

  // put that quantity on the element.
  var cartCount = document.getElementById('itemCount');
  cartCount.textContent = cart.items.length;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  var quantityElement = document.getElementById('quantity');
  var selectElement = document.getElementById('items');
  // TODO: Add a new element to the cartContents div with that information
  var cartPreview = document.getElementById('cartContents');
  var itemPreview = document.createElement('p');
  itemPreview.textContent += selectElement.value + ' ' + quantityElement.value;
  cartPreview.appendChild(itemPreview);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();