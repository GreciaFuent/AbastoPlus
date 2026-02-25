import { connectDB } from "./catalog/product/infrastructure/db";
import MongoProductRepository from "./catalog/product/infrastructure/mongo-product-repository";
import Product from "./catalog/product/domain/product";

async function bootstrap() {
  await connectDB();

  console.log("App iniciada");

  const repository = new MongoProductRepository();

  const product = Product.build(
    "550e8400-e29b-41d4-a716-446655440000",
    "Coca Cola Original 500ml",
    "ml", 
    [
      {
        id: "111e8400-e29b-41d4-a716-446655440001",
        name: "Botella",
        type: "bottle",          
        netQuantity: 500,
        unitOfMeasure: "ml"     
      },
      {
        id: "222e8400-e29b-41d4-a716-446655440002",
        name: "Lata",
        type: "can",             
        netQuantity: 355,
        unitOfMeasure: "ml"
      }
    ]
  );

  await repository.save(product);

  console.log("Producto guardado");
}

bootstrap();