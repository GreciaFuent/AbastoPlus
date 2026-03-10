import { injectable } from "inversify";
import TranslateService from "../application/ports/translate_service";

@injectable()
export default class MyMemoryTranslator implements TranslateService {

  async translate(text: string, targetLanguage: string): Promise<string> {

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`;

    const response = await fetch(url);

    const data = await response.json();

    return data.responseData.translatedText;
  }

}