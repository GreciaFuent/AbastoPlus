import { Container } from "inversify";
import ProductRepository from "../catalog/product/application/productRepository";
import MongoProductRepository from "../catalog/product/infrastructure/mongo-product-repository";
import SaveProduct from "../catalog/product/application/use-cases/save-product";

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

export { container };