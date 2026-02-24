import mongoose from "mongoose";
import "dotenv/config";


export const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("MongoDB conectado correctamente");
    } catch (error) {
        console.error("Error al conectar MongoDB:", error);
    }
};