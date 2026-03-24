import type TranslateService from "../ports/translate_service";
import Product from "../../domain/product";
import { inject, injectable } from "inversify";
import { SubscriptionRepository } from "../../../../shared/domain/bus/suscription-repository";

@injectable()
export default class TranslateProduct implements  SubscriptionRepository<{ name: string }>{
    private repository: TranslateService

    constructor(@inject("TranslateService") repository: TranslateService){
        this.repository = repository
    }

    async execute(payload: {name: string}): Promise<void>  {
        const translated = await this.repository.translate(payload.name, 'en')
        console.log("Nombre traducido", translated)
    }

}