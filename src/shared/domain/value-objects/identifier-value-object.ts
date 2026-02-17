import ValueObject from "./value-objects"

class IdentifierValueObject extends ValueObject<string>{

    constructor(value: string) {
        super(value)
        this.ensureValueIsUuid()
    }

    private ensureValueIsUuid(){
        if (typeof this._value !== "number") {
           throw new Error("Is not a Int") 
        }
    }
}

export default IdentifierValueObject