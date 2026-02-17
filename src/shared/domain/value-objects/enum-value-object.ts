class EnumValueObject {
    protected _value: string
    private validValues: string[]

    constructor(value: string, validValues: string[]) {
        this._value = value
        this.validValues = validValues
    }

    private ensureValueIsValid(value: string){
        return
    }
}