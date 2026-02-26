import { connectDB } from "./catalog/product/infrastructure/db";
import MongoProductRepository from "./catalog/product/infrastructure/mongo-product-repository";
import SaveProduct from "./catalog/product/application/use-cases/save-product";

async function main() {
  await connectDB();

  console.log("App iniciada");

  const repository = new MongoProductRepository();
  const saveProduct = new SaveProduct(repository);
  await saveProduct.execute({
    productId: "550e8400-e29b-41d4-a716-446655440000",
    productName: "Producto de prueba",
    baseUnit: "kg",
    productPresentation: [
      {
        id: "111e8400-e29b-41d4-a716-446655440001",
        name: "Presentación 1",
        type: "bottle",
        netQuantity: 10,
        unitOfMeasure: "kg"
      },
      {
        id: "222e8400-e29b-41d4-a716-446655440002",
        name: "Presentación 2",
        type: "can",
        netQuantity: 5,
        unitOfMeasure: "ml"
      }
    ]
  })
}

main();


