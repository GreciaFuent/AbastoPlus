import Product from "../domain/product";

export default interface ProductRepository {
    save(data: Product): void
}