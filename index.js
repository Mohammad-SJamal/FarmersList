// Import Classes Here
const Product = require("./classes/Product");
const Customer = require("./classes/Customer.js");
const Cart = require("./classes/Cart.js");
const Auth = require("./classes/Auth.js");

// DO NOT EDIT BELOW THIS LINE
try {
  module.exports = {
    Product,
  };
} catch (e) {}

try {
  module.exports = {
    Product,
    Cart,
  };
} catch (e) {}

try {
  module.exports = {
    Product,
    Cart,
    Customer,
  };
} catch (e) {}

try {
  module.exports = {
    Product,
    Cart,
    Customer,
    Auth,
  };
} catch (e) {}
