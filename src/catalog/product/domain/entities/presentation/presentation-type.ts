import EnumValueObject from "../../../../../shared/domain/value-objects/enum-value-object";

class PresentationType extends EnumValueObject {
    constructor(value: string, validValues: string[]) {
        super(value, validValues)
    }
}