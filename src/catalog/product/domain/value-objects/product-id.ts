import IdentifierValueObject from "../../../../shared/domain/value-objects/identifier-value-object.ts";

class ProductId extends IdentifierValueObject {
    constructor(value: string) {
        super(value)
    }

}

export default ProductId
