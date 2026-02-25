import IdentifierValueObject from "../../../../shared/domain/value-objects/identifier-value-object";

class ProductId extends IdentifierValueObject {
    constructor(value: string) {
        super(value)
    }

}

export default ProductId
