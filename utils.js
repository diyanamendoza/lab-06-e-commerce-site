export function findById(productArray, id) {
    for (let product of productArray) {
        if (product.id === id) {
            return product;
        }
    }
}