var UNIT_PRICE = 11;
var TAX_RATE = 0.08;
var SHIPPING = 4;

function getUnitPrice() {
  return UNIT_PRICE;
}

function getTaxesPrice() {
  return UNIT_PRICE * TAX_RATE;
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
    getUnitPrice() * numberOfItems +
    getTaxesPrice() * numberOfItems +
    getShippingPrice();
  // alert(totalCost);                          string           varible
  document.getElementById("cost").innerHTML = "Total Cost: $" + totalCost;
}
