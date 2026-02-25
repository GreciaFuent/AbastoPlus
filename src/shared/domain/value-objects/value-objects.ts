class ValueObject<T> {
   protected _value: T

    constructor(value: T) {
        this._value = value
    }

    public toString(): string {
        return String(this._value)
    }

    public getValue(): T {
        return this._value;
    }

}

export default ValueObject