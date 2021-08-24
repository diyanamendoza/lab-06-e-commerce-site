export function findById(productArray, id) {
    for (let product of productArray) {
        if (product.id === id) {
            return product;
        }
    }
}

export function calcItemTotal(quantity, price) {
    return quantity * price; 
}

export function calcOrderTotal(cartArray, productArray) {
    let orderTotal = 0;
    let itemPrice = 0;
    for (let item of cartArray) {
        itemPrice = (findById(productArray, item.id)).price;
        orderTotal = orderTotal + (calcItemTotal(item.quantity, itemPrice));
    }
    return Math.round(orderTotal * 100) / 100;
}