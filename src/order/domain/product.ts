export default class Product {
    public productId: string
    public price: number

    constructor(productId: string, price: number) {
        this.productId = productId
        this.price = price
    }
}
