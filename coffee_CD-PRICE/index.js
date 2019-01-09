module.exports = async function (context, req) {

    var coffeeSize = req.body.task.CoffeeSize;
    var coffeeType = req.body.task.CoffeeType;

    // We calculate the price of the coffee
    var coffeePrice = 2;

    // Fancy coffees cost one dollar more
    var fancyCoffeeTypes = ['cap', 'latte', 'mocha'];
    if (fancyCoffeeTypes.includes(coffeeType)) {
        coffeePrice += 1;
    }

    // Bigger coffee cost more
    if (coffeeSize === 'md') {
        coffeePrice += 0.4;
    } else if (coffeeSize === 'lg') {
        coffeePrice += 0.8;
    }

    context.res = {
        body: {
            "data": [{
                "value": coffeePrice
            }]
        }
    };
};