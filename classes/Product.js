class Product{
    constructor(name, price, description, quantity){
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = true;
        this.quantity = quantity;
    }

    display(){
        return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`
    }
}

module.exports = Product;