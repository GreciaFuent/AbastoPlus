import EnumValueObject from "../../../../../shared/domain/value-objects/enum-value-object";

class PresentationType extends EnumValueObject {
    private static readonly values =["bag", "sack", "box", "can", "jar", "bottle"]

    constructor(value: string) {
        super(value, PresentationType.values)
    }
}

export default PresentationType