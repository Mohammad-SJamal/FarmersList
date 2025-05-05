class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addProduct(product, quantity) {
    if (quantity < product.quantity) {
      throw new Error(`I'm sorry there are only ${product.quantity} of this product left`);
      return;
    } else {
      this.products.push(product);
      this.total += product.price;
    }

    if (product.quantity == 0) {
      product.inStock = false;
    }
    return product;
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
