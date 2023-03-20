class Product {
    name: string
    price: number
    amount: number
    constructor(name: string, price: number, amount: number) {
        this.name = name
        this.price = price
        this.amount = amount
    }
    addProduct(extraQuantity: number) {
        this.amount += extraQuantity
    }
}
class Customer {
    name: string
    quantityProduct: number
    constructor(name: string, quantityProduct: number) {
        this.name = name
        this.quantityProduct = quantityProduct
    }
    buyProduct(product: Product, quantity: number) {
        if (product.amount > quantity) {
            product.amount -= quantity
            this.quantityProduct += quantity
        } else {
            console.log('Out of product');
            return
        }
    }
}
let shirt = new Product('T-Shirt', 100000, 30)
shirt.addProduct(10)
console.log(shirt.amount, 'Amount product');
let customer = new Customer('Duong', 0)
customer.buyProduct(shirt, 5)
console.log(customer.quantityProduct, 'Quantity of product customer');
console.log(shirt.amount, 'Amount product after customer buy');

