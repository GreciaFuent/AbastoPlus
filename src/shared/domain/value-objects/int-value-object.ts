class IntValueObject {
    protected _value: number

    constructor(value: number) {
        this._value = value
        this.ensureValueIsInt()
    }

    private ensureValueIsInt(){
        if (typeof this._value !== "number") {
           throw new Error("Is not a Int") 
        }
    }
}