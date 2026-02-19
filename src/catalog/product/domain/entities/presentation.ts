import PresentationID from "./presentation/presentation-id"
import PresentationName from "./presentation/presentation-name"
import PresentationNetQuantity from "./presentation/presentation-net-quantity"
import PresentationType from "./presentation/presentation-type"
import PresentationUnitMeasure from "./presentation/presentation-unit-of-measure"

class Presentation {
    private id: PresentationID
    private name: PresentationName
    private type: PresentationType
    private netQuantity: PresentationNetQuantity
    private unitOfMeasure: PresentationUnitMeasure

    constructor(id: string, name: string, type: string, netQuantity: number, unitOfMeasure: string) {
        this.id = new PresentationID(id)
        this.name = new PresentationName(name)
        this.type = new PresentationType(type)
        this.netQuantity = new PresentationNetQuantity(netQuantity)
        this.unitOfMeasure = new PresentationUnitMeasure(unitOfMeasure)
    }
}

export default Presentation