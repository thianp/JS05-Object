let product = {};

function createProduct(productName, amountSold, price, discount) {
    product.productName = productName;
    product.amountSold = amountSold;
    product.price = price;
    if (discount !== 0 && discount !== undefined) {
        product.discount = discount;   
    }

    return product;
}

console.log(createProduct("box", 3, 50, 0.09));

function calcPrice(prod) {
    return prod.price*(1-prod.discount);
}

console.log(calcPrice(product));