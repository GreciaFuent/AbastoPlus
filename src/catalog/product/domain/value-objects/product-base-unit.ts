import EnumValueObject from "../../../../shared/domain/value-objects/enum-value-object";

class ProductBaseUnit extends EnumValueObject {
    private static readonly values =["Kg", "g", "lb", "ml", "lt", "unidad"]

    constructor(value: string) {
        super(value, ProductBaseUnit.values)
    }

      
}


export default ProductBaseUnit