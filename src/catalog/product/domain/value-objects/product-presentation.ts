import Presentation from "../entities/presentation";

class ProductPresentation {
    private value: Presentation[]
    
    
    constructor( presentation: Array<{id: string, name: string, type: string, netQuantity: number, unitOfMeasure: string}>) {
        this.value = []
        ProductPresentation.onlyFivePresentation(presentation)
        presentation.map((p) => {
            let newPresentation = new Presentation(
                p.id,
                p.name,
                p.type,
                p.netQuantity,
                p.unitOfMeasure
            );

            this.value.push(newPresentation)
        });
    }

    public static onlyFivePresentation(Presentation: Array<{id: string, name: string, type: string, netQuantity: number, unitOfMeasure: string}>){
        if (Presentation.length > 5) {
            throw new Error("Theres more than five presentation")
        }
    }

    public getValue(): Presentation[] {
        return this.value;
    }
}


export default ProductPresentation