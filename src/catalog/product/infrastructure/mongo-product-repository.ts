import { injectable } from "inversify";
import Product from "../domain/product";
import ProductRepository from "../application/productRepository";
import { ProductModel } from "./product_model";

@injectable()
export default class MongoProductRepository implements ProductRepository {

    async save(data: Product): Promise<void> {

        const productDb = await ProductModel.create(
        data.toPrimitives()
        );

        console.log(productDb);
    }
}