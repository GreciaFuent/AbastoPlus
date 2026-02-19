import ValueObject from "./value-objects"


class IntValueObject extends ValueObject<number>{
    constructor(value: number) {
        super(value)
        this.ensureValueIsInt()
    }

    private ensureValueIsInt(){
        if (typeof this._value !== "number") {
           throw new Error("Is not a Int") 
        }
    }
}

export default IntValueObject