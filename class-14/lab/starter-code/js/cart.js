/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var tempArray = [];
  var finalArray = [];
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  for (let i=0; i < cartItems.length; i++){
    var product = cartItems[i].product;
    var quantity = cartItems[i].quantity;
    tempArray.push([product, quantity]);
  }
    for (let j=0; j < tempArray.length; j++){
      for (let k=0; k < Product.allProducts.length; k++){
        if (Product.allProducts[k].name === tempArray[j][0]){
          finalArray.push([Product.allProducts[k].filePath, tempArray[j][0], tempArray[j][1]]);
          k = 20;
        }

      }
    }
    // console.log(Product.allProducts);
  // console.log(finalArray);
  cart = new Cart(cartItems);

}
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

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
