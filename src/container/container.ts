import { Container } from "inversify";
import ProductRepository from "../catalog/product/application/productRepository";
import MongoProductRepository from "../catalog/product/infrastructure/mongo-product-repository";
import SaveProduct from "../catalog/product/application/use-cases/save-product";
import TranslateProduct from "../catalog/product/application/use-cases/translate_product";
import MyMemoryTranslator from "../catalog/product/infrastructure/libre-translator";
import type TranslateService from "../catalog/product/application/ports/translate_service";

const container = new Container();

/**
 * Repositories
 */
container
  .bind<ProductRepository>("ProductRepository")
  .to(MongoProductRepository);

/**
 * Use Cases
 */
container
  .bind<SaveProduct>(SaveProduct)
  .toSelf();

/**
 * Repositories - TranslateService
 */
container 
  .bind<TranslateService>("TranslateService")
  .to(MyMemoryTranslator)

/**
 * Use Cases - TranslateProduct
 */
container
  .bind<TranslateProduct>(TranslateProduct)
  .toSelf()

export { container };