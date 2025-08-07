var BURRITO_PRICE = 11;
var TAX_RATE = 0.08;
var SHIPPING = 4;

function getBurritoPrice() {
  return BURRITO_PRICE;
}

function getTaxesPrice() {
  return BURRITO_PRICE * TAX_RATE;
}

function getShippingPrice() {
  return SHIPPING;
}

function getNumberOfItems() {
  // read from html
  var quantity = document.getElementById("quantity").value;
  return quantity;
}

function getTotalCost() {
  var numberOfItems = getNumberOfItems();
  var totalCost =
    getBurritoPrice() * numberOfItems +
    getTaxesPrice() * numberOfItems +
    getShippingPrice();
  // alert(totalCost);                          string           varible
  document.getElementById("cost").innerHTML = "Total Cost: $" + totalCost;
}
