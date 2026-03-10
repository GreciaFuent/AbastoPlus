export default interface TranslateService{
    translate(name: string,  targetLanguage: string): Promise<string>
}