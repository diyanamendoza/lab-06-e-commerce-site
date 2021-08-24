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