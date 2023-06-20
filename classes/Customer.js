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

const melanie = new Customer("Melanie", "melanie@gmail.com", "22 Main St");
const strawberries = new Product("Strawberries", 5, "The freshest fresas on the market");
const carrots = new Product("Carrots", 2, "Perfect for an afternoon snack");
const mangos = new Product("Mangos", 3, "The tastiest fruit you can buy");

const myFirstOrder = new Cart();
myFirstOrder.addProduct(mangos);
myFirstOrder.addProduct(carrots);

const mySecondOrder = new Cart();
mySecondOrder.addProduct(strawberries);

melanie.addToOrderHistory(myFirstOrder);
melanie.addToOrderHistory(mySecondOrder);

melanie.orderHistory; 
/*
[ 
    Cart { products: [ [Product], [Product] ], total: 5 },
    Cart { products: [ [Product] ], total: 5 },
]
*/