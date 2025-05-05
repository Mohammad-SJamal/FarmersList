class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addProduct(product) {
    this.products.push(product);
    this.total += product.price;
  }

  removeProduct(index) {
    if (index >= 0 && index < this.products.length) {
      this.products.splice(index, 1);
      this.total = this.products.reduce(
        (sum, product) => sum + product.price,
        0
      );
    } else {
      throw new Error("Item not found in cart");
    }
  }
}

module.exports = Cart;
