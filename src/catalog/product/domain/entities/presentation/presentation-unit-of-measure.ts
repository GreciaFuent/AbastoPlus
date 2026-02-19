import EnumValueObject from "../../../../../shared/domain/value-objects/enum-value-object";

class PresentationUnitMeasure extends EnumValueObject {
    private static readonly values =["Kg", "g", "lb", "ml", "lt", "unidad"]

    constructor(value: string) {
        super(value, PresentationUnitMeasure.values)
    }
}

export default PresentationUnitMeasure