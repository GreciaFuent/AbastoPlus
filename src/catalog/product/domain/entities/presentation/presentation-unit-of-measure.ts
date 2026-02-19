import EnumValueObject from "../../../../../shared/domain/value-objects/enum-value-object";

class PresentationUnitMeasure extends EnumValueObject {
    constructor(value: string, validValues: string[]) {
        super(value, validValues)
    }
}