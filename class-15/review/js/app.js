'use strict';

// Cart constructor.
var Cart = function (items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function (product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  var newCartItem = new CartItem(product, quantity);
  this.items.push(newCartItem);
};

Cart.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  var stringified = JSON.stringify(this.items);
  localStorage.setItem('cart', stringified);
};

// Fizzo: when we remove items from the cart, those items will be of type CartItem
Cart.prototype.removeItem = function (item) {  // we can decide oursleves how we want to remove something
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!

  // Matthew:
  //  looped through this.items
  //    if item === this.items[i].product and we splice the item out.
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].product.name === item.product.name) {
      this.items.splice(i, 1);
      return;
    }
  }
};

var CartItem = function (product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
