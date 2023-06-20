class Customer {
    constructor(name,email,shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHitory = []
    }
    addToOrderHistory(cart) {
        this.orderHitory.push(cart);
    }
}

module.exports = Customer