import type TranslateService from "../ports/translate_service";
import Product from "../../domain/product";
import { inject, injectable } from "inversify";

@injectable()
export default class TranslateProduct{
    private repository: TranslateService

    constructor(@inject("TranslateService") repository: TranslateService){
        this.repository = repository
    }

    async execute(name: string): Promise<string> {
        const algo = await this.repository.translate(name, 'es')
        return algo
    }
}