class Cart {
  constructor() {
    this.products = [];
    this.total = this.total;
  }

  addProduct(product) {
    this.products.push(product);
    this.total.total += product.price;
  }

  removeProduct(index) {
    if (index >= 0 && index < this.products.length) {
      this.products.splice(index, 1);
    } else {
      throw new Error("Item not found in cart");
    }
  }
}

module.exports = Cart;
