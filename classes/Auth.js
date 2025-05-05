const Customer = require("./Customer.js");


class Auth {
    constructor(){
        this.customers = [];
    }

    register(name, email, shippingAddress){
        let newCust = new Customer(name, email, shippingAddress);
        this.customers.push(newCust);
    }

    login(email){
        function isEmail(cust){
            return cust.email === email;
        }

        let cust = this.customers.find(isEmail);

        if (cust == undefined){
            return null;
        } else {return cust;}
    }
}

module.exports = Auth;