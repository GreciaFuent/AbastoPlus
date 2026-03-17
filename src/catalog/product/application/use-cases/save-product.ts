import { inject, injectable } from "inversify";
import Product from "../../domain/product";
import type ProductRepository from "../productRepository";
import type TranslateService from "../ports/translate_service";

@injectable()
class SaveProduct {
    private repository: ProductRepository
    private translator: TranslateService

    constructor(@inject("ProductRepository") repository: ProductRepository, @inject("TranslateService") translator: TranslateService) {
        this.repository = repository;
        this.translator = translator
    }

    async execute(data: {productId:string, productName: string, baseUnit:string, productPresentation: Array<{id: string, name: string, type: string, netQuantity: number, unitOfMeasure: string}>}): Promise<void>{
        const newName = await this.translator.translate(data.productName, 'en')
        const newProduct = await Product.build(data.productId, newName, data.baseUnit, data.productPresentation)
        this.repository.save(newProduct)
    }
}

export default SaveProduct