import { connectDB } from "./catalog/product/infrastructure/db";
import "reflect-metadata"
import SaveProduct from "./catalog/product/application/use-cases/save-product";
import { container } from "./container/container";
import TranslateProduct from "./catalog/product/application/use-cases/translate_product";



async function main() {
  // await connectDB();

  console.log("App iniciada");

  // const saveProduct = container.get(SaveProduct);
  const translateProduct = container.get(TranslateProduct)

  // await saveProduct.execute({
  //   productId: "550e8400-e29b-41d4-a716-446655440090",
  //   productName: "Producto de prueba",
  //   baseUnit: "Kg",
  //   productPresentation: [
  //     {
  //       id: "111e8400-e29b-41d4-a716-446655440801",
  //       name: "Presentación 1",
  //       type: "bottle",
  //       netQuantity: 10,
  //       unitOfMeasure: "Kg"
  //     },
  //     {
  //       id: "222e8400-e29b-41d4-a716-446655449002",
  //       name: "Presentación 2",
  //       type: "can",
  //       netQuantity: 5,
  //       unitOfMeasure: "ml"
  //     }
  //   ]
  // })

  console.log(await translateProduct.execute('name'))
}

main();


