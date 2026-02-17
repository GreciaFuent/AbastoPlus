import ValueObject from "./value-objects"

class IdentifierValueObject extends ValueObject<string> {

    constructor(value: string) {
        super(value)
        this.ensureValueIsUuid()
    }

    private ensureValueIsUuid(): void {
        const uuidRegex =
            /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

        if (!uuidRegex.test(this._value)) {
            throw new Error("Value is not a valid UUID")
        }
    }
}

export default IdentifierValueObject
