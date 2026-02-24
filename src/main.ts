import { connectDB } from "./catalog/product/infrastructure/db";

async function bootstrap() {
  await connectDB();

  console.log("🚀 App iniciada");
}

bootstrap();