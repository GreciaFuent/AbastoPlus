import Product from "../domain/product";

export default interface OrderProductRepository {
    addProduct(product: Product): void
    save(data: Product): void
    findById(productId: string): Product | null
}
