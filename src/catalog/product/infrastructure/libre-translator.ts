import { injectable } from "inversify";
import TranslateService from "../application/ports/translate_service";
import { SubscriptionRepository } from "../../../shared/domain/bus/suscription-repository";

@injectable()
export default class MyMemoryTranslator implements TranslateService, SubscriptionRepository<{ name: string }> {

  async translate(text: string, targetLanguage: string): Promise<string> {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=es|${targetLanguage}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.responseData.translatedText;
  }

  async execute(key: string, payload: {name: string}): Promise<void> {
    console.log("key:", key);
    console.log("payload:", payload);
    console.log(await this.translate(payload.name, 'en'))
  }
}