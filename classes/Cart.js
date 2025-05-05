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

  getTotal() {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }

  clearCart() {
    this.products = [];
    this.total = 0;
  }

  removeItemByName(product) {
    const index = this.products.findIndex((item) => item.name === product.name);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.total -= product.price;
    }
  }
}

module.exports = Cart;
