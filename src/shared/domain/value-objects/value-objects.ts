class ValueObject<T> {
   protected _value: T

    constructor(value: T) {
        this._value = value
    }

    public toString1(): string {
        return "a"
    }
}