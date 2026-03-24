import { injectable } from "inversify";
import TranslateService from "../application/ports/translate_service";

@injectable()
export default class MyMemoryTranslator implements TranslateService{
  async translate(text: string, targetLanguage: string): Promise<string> {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`;

    const response = await fetch(url);
    const data = await response.json();

    return data[0][0][0];
  }

}