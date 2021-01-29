/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  console.log("loadCart")
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  console.log("loadCart cart items", cartItems)
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart(items) {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableBody = document.querySelector("#cart tbody")
  for (var j = 0; j < cart.items.length; j++) {
    var tableRow = document.createElement('tr')
    var tableData1 = document.createElement('td')
    var tableData2 = document.createElement('td')
    var tableData3 = document.createElement('td')
    tableBody.appendChild(tableRow);
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2)
    tableRow.appendChild(tableData3)
    tableData1.innerText = "delete link";
    tableData2.innerText = CartItem.this.quantity;
    tableData3.innerText = CartItem.this.product;

  
  }
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
