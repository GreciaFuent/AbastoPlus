import Presentation from "./entities/presentation"
import ProductPresentation from "./value-objects/product-presentation"

class Product {
    private readonly productId: string
    private readonly productName: string
    private readonly baseUnit:string
    private productPresentation:Presentation[]

    constructor(productId:string, productName: string, baseUnit:string, productPresentation: Presentation[]) {
        this.productId = productId
        this.productName = productName
        this.baseUnit = baseUnit
        this.productPresentation = productPresentation
    }

    public  static build (id:string, name:string, baseUnit:string, presentation: Array<{id: string, name: string, type: string, netQuantity: number, unitOfMeasure: string}>):Product {
        const arrayPrresentation = new ProductPresentation(presentation)
        const newProduct = new Product(id, name, baseUnit, arrayPrresentation.getValue())

        return newProduct
    }

    
}