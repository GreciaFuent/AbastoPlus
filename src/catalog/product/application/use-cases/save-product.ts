import Product from "../../domain/product";
import ProductRepository from "../productRepository";

class SaveProduct {
    private repository: ProductRepository

    constructor(repository: ProductRepository) {
        this.repository = repository;
    }

    public execute(data: {productId:string, productName: string, baseUnit:string, productPresentation: Array<{id: string, name: string, type: string, netQuantity: number, unitOfMeasure: string}>}): void {
        const newProduct = Product.build(data.productId, data.productName, data.baseUnit, data.productPresentation)
        this.repository.save(newProduct)
    }
}

export default SaveProduct