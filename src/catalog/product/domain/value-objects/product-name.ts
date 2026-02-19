import StringValueObject from "../../../../shared/domain/value-objects/string-value-object.ts";

class ProductName extends StringValueObject {
    constructor(value: string) {
        super(value)
        this.sizeName(value)
    }

    private sizeName (value: string){
        if (value.length <= 9) {
            throw new Error("the name it´s to small")
        }
    }
}

export default ProductName
