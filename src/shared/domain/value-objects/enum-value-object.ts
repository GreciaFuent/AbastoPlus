import ValueObject from "./value-objects"

class EnumValueObject extends ValueObject<string>{
    private validValues: string[]

    constructor(value: string, validValues: string[]) {
        super(value)
        this.validValues = validValues
        this.ensureValueIsValid(value)
        this.baseUnit(value, this.validValues)
    }

    private ensureValueIsValid(value: string){
        if (typeof value !== "string") {
            throw new Error("The value it´s not a string")
        }
    }

    private baseUnit(value: string, validValues: string[]) {
        if (!validValues.includes(value)) {
            throw new Error(" the value it´s not correct")
        }
    } 
}

export default EnumValueObject