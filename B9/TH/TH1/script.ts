//Callback
let stocks = { Fruits: ["Strawberry", "Grapes", "Banana", "Apple"], Liquid: ["Water", "Ice"], Holder: ["Cone", "Cup", "Stick"], Toppings: ["Chocolate", "Peanuts"] }
let order = (fruit_name: number, call_production: any) => {
    setTimeout(() => {
        console.log(`Callback: ${stocks.Fruits[fruit_name]} was selected`);
        call_production()
    }, 2000)
}
let production = () => {
    setTimeout(() => {
        console.log("\nCallback: Production has started");
        setTimeout(() => {
            console.log("\nCallback: The fruit has been chopped");
            setTimeout(() => {
                console.log(`\nCallback: ${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`);
                setTimeout(() => {
                    console.log("\nCallback: Start the machine");
                    setTimeout(() => {
                        console.log(`\nCallback: Ice cream placed on ${stocks.Holder[1]}`);
                        setTimeout(() => {
                            console.log(`\nCallback: ${stocks.Toppings[0]} as topping`);
                            setTimeout(() => {
                                console.log("\nCallback: Serve ice cream");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0)
}
order(0, production)

//Promises
let is_shop_open = true
let order_promise = (time: number, work: any) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time)
        } else {
            reject(console.log("Our shop is closed"))
        }
    })
}
order_promise(2000, () => console.log(`Promises: ${stocks.Fruits[0]} was selected`))
    .then(() => {
        return order_promise(0, () => console.log("Promises: Production has started"))
    })
    .then(() => {
        return order_promise(2000, () => console.log("Promises: Fruit has been chopped"))
    })
    .then(() => {
        return order_promise(1000, () => console.log(`Promises: ${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`))
    })
    .then(() => {
        return order_promise(1000, () => console.log("Promises: Start the machine"))
    })
    .then(() => {
        return order_promise(2000, () => console.log(`Promises: Ice cream placed on ${stocks.Holder[1]}`))
    })
    .then(() => {
        return order_promise(3000, () => console.log(`Promises: ${stocks.Toppings[0]} as topping`))
    })
    .then(() => {
        return order_promise(2000, () => console.log("Promises: Serve ice cream"))
    })

//Async/Await
function time(ms: number) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log("Shop is closed"))
        }
    })
}
async function production_async() {
    try {
        await time(2000)
        console.log(`Async/Await: ${stocks.Fruits[0]} was selected`)
        await time(0)
        console.log("Async/Await: Production has started")
        await time(2000)
        console.log('Async/Await: Fruit has been chopped')
        await time(1000)
        console.log(`Async/Await: ${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`)
        await time(1000)
        console.log('Async/Await: Start the machine')
        await time(2000)
        console.log(`Async/Await: Ice cream place on ${stocks.Holder[1]}`)
        await time(3000)
        console.log(`Async/Await: ${stocks.Toppings[0]} as topping`)
        await time(2000)
        console.log('Async/Await: Serve ice cream')
    } catch (error) {
        console.log('Customer left')
    }
}
production_async()