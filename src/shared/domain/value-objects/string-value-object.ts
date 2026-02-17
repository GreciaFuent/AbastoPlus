import ValueObject from "./value-objects"

class StringValueObject extends ValueObject<string>{

    constructor(value: string) {
        super(value)
        this.ensureValueIsString()
    }

    private ensureValueIsString(){
        if (typeof this._value !== "string") {
           throw new Error("Is not a string") 
        }
    }
}

export default StringValueObject