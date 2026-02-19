import IntValueObject from "../../../../../shared/domain/value-objects/int-value-object";


class PresentationNetQuantity extends IntValueObject {
    constructor(value: number) {
        super(value)
    }
}

export default PresentationNetQuantity