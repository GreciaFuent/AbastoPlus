import Product from "../domain/product";
import mongoose from "mongoose";
import "dotenv/config";


export default class MongoProductRepository implements MongoProductRepository {
    constructor(){
        
    }
    
    async save(data: Product): Promise<void> {
    }


}