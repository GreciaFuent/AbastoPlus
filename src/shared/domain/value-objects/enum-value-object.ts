import ValueObject from "./value-objects"

class EnumValueObject extends ValueObject<string>{
    private validValues: string[]

    constructor(value: string, validValues: string[]) {
        super(value)
        this.validValues = validValues
        this.ensureValueIsValid(value)
    }

    private ensureValueIsValid(value: string){
        if (typeof value !== "string") {
            throw new Error("The value it´s not a string")
        }
    }
}

export default EnumValueObject