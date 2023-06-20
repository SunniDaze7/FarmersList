class Auth {
    constructor(){
        this.customers = [];
    }

  register(name, email, shippingAddress) {
    const newCustomer = new Customer(name, email, shippingAddress);
    this.customers.push(newCustomer);
  }

  login(email) {
    const customer = this.customers.find((customer) => customer.email === email);
    return customer;
  }
}

class Customer {
  constructor(name, email, shippingAddress) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
  }

}