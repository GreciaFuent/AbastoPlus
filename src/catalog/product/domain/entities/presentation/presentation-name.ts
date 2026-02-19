import StringValueObject from "../../../../../shared/domain/value-objects/string-value-object";

class PresentationName extends StringValueObject {
    constructor(value: string) {
        super(value)
    }
}

export default PresentationName