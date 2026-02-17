import EnumValueObject from "../../../../shared/domain/value-objects/enum-value-object.ts";

class ProductBaseUnit extends EnumValueObject {
    constructor(value: string, validValues: string[]) {
        super(value, validValues)
        this.baseUnit(value, validValues)
    }

    private baseUnit(value: string, validValues: string[]) {
        if (!validValues.includes(value)) {
            throw new Error(" the value it´s not correct")
        }
    }   
}
